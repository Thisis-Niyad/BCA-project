import React from "react";
import client1 from "../assets/client-img1.png";
import client2 from "../assets/client-img2.png";

function ArtistSlide() {
  return (
    <div className="client_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="client_taital">
              Clients <span style={{ color: "#2ea0f8" }}>Says</span>
            </h3>
          </div>
        </div>

        <div className="client_section_2">
          <div id="my_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">

              {/* Slide 1 */}
              <div className="carousel-item active">
                <div className="row">
                  <ClientCard img={client1} name="Joy Maro" />
                  <ClientCard img={client2} name="Kinpa Lomi" />
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <div className="row">
                  <ClientCard img={client1} name="Joy Maro" />
                  <ClientCard img={client2} name="Kinpa Lomi" />
                </div>
              </div>

              {/* Slide 3 */}
              <div className="carousel-item">
                <div className="row">
                  <ClientCard img={client1} name="Joy Maro" />
                  <ClientCard img={client2} name="Kinpa Lomi" />
                </div>
              </div>

            </div>

            <a
              className="carousel-control-prev"
              href="#my_slider"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-angle-left"></i>
            </a>
            <a
              className="carousel-control-next"
              href="#my_slider"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClientCard({ img, name }) {
  return (
    <div className="col-md-6">
      <div className="client_taital_main">
        <div className="client_left">
          <div className="client_img">
            <img src={img} alt={name} />
          </div>
        </div>

        <div className="client_right">
          <h3 className="moark_text">{name}</h3>
          <p className="client_text">
            ipsum dolor sit amet, consectetur adipiscing elit, sed veniam,
            quis nostrud exercitation ullamco
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArtistSlide;
