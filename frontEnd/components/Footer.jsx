import React from 'react'

function Footer() {
  return (
    <div>
         {/* <!-- footer section start --> */}
   <div className="footer_section layout_padding">
      <div className="container">
         <div className="row">
            <div className="col-lg-3 col-md-6">
               <div className="footer_logo">logimg</div>
               <p className="footer_text">There are many variations of passages of Lorem Ipsum </p>
            </div>
            <div className="col-lg-3 col-md-6">
               <h3 className="footer_taital">LET US HELP YOU</h3>
               <p className="footer_text">There are many variations of passages of Lorem Ipsum available</p>
            </div>
            <div className="col-lg-3 col-md-6">
               <h3 className="footer_taital">INFORMATION</h3>
               <div className="footer_menu">
                  <ul>
                     <li><a href="index.html">Home</a></li>
                     <li><a href="about.html">About</a></li>
                     <li><a href="services.html">Services</a></li>
                     <li><a href="testimonial.html">Testimonial</a></li>
                     <li><a href="contact.html">Contact Us</a></li>
                  </ul>
               </div>
            </div>
            <div className="col-lg-3 col-md-6">
               <h3 className="footer_taital">Contact Us</h3>
               <div className="location_text">
                  <ul>
                     <li>
                        <a href="#">
                           <i className="fa fa-map-marker" aria-hidden="true"></i><span className="padding_left_10">Page when
                              looking at its</span>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <i className="fa fa-phone" aria-hidden="true"></i><span className="padding_left_10">+01
                              1234567890</span>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <i className="fa fa-envelope" aria-hidden="true"></i><span
                              className="padding_left_10">demo@gmail.com</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="footer_section">
            <div className="row">
               <div className="col-md-6">
                  <div className="input_bt">
                    
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="footer_social_icon">
                     <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   {/* <!-- footer section end --> */}
   {/* <!-- copyright section start --> */}
   <div className="copyright_section">
      <div className="container">
         <p className="copyright_text">2025 All Rights Reserved. Design by Pixel Pact </p>
      </div>
   </div>
    </div>
  )
}

export default Footer
