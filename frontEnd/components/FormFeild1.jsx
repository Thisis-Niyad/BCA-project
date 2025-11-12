import React from 'react'

function FormFeild1() {
  return (
    <>
       <div className="contact_section layout_padding">
      <div className="container">

        <div className="contact_section_2">
          <div className="row">
            <div className="col-md-6">
              <form className="mail_section_1">
                <input
                  type="text"
                  className="mail_text"
                  placeholder="Name"
                  name="Name"
                />
                <input
                  type="text"
                  className="mail_text"
                  placeholder="Email"
                  name="Email"
                />
                <input
                  type="text"
                  className="mail_text"
                  placeholder="Phone Number"
                  name="PhoneNumber"
                />
                <textarea
                  className="massage-bt"
                  placeholder="Message"
                  rows="5"
                  id="comment"
                  name="Message"
                ></textarea>

                <div className="send_bt">
                  <a href="#">SEND</a>
                </div>
              </form>
            </div>

            <div className="col-md-6">
              <div className="map_main">
                <div className="map-responsive">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                    width="600"
                    height="368"
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default FormFeild1
