import React from 'react'
import img1 from "../src/assets/img-3.jpg";
import img2 from "../src/assets/img-6.jpg";
import img3 from "../src/assets/img-9.png";
import img4 from "../src/assets/img-11.jpg";
import img5 from "../src/assets/img-16.jpg";
import img6 from "../src/assets/img-17.png";
import clientimg1  from '../src/assets/client-img1.png';
import clientimg2  from '../src/assets/client-img2.png';
import Cardimg from '../components/Cardimg';
import ArtistSlide from '../components/ArtistSlide';



function Index() {
  return (
      <div>
      <div className="banner_section layout_padding">
        <div className="container-fluid">
        
               <div className="row" style={{ justifyContent: "flex-end" }}>
                  <div className="col-sm-2">
                    <h1 className="banner_taital">
                      Design For <span style={{ color: "#343535" }}>Your House</span>
                    </h1>
                  </div>
                  <div className="col-sm-9">
                    <div className="images_main">
                      <div className="banner_img"><img className="img1"src={img5} /></div>
                      <div className="banner_img"><img className="img1"src={img2} /></div>
                    </div>
                  </div>
                </div>
              
              {/* other carousel-items same change */}
            

            {/* <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
              <i className="fa fa-arrow-left"></i>
            </a>
            <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
              <i className="fa fa-arrow-right"></i>
            </a> */}
        </div>
      </div>
      {/* <!-- about section start --> */}
    <div id="about" className="about_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about_taital">
              About <span style={{ color: "#f7f6f6" }}>Company</span>
            </div>
            <p className="about_text">
              there isn't anything embarrassing hidden in the middle of text. All
              the Lorem Ipsum generators on the Internet tend to repeat
              predefined. there isn't anything embarrassing hidden in the middle
              of text. All the Lorem Ipsum generators on the Internet tend to
              repeat predefined.
            </p>
          </div>

          <div className="col-md-6">
            <div className="about_img">
              <img src={img6} alt="About Company" />
            </div>
          </div> 
        </div>
      </div>
    </div>
   {/* <!-- about section end --> */}
      {/* <!-- design section start --> */}
  <div className="design_section layout_padding">
      <div className="container">
        <h1 className="design_taital">
          Our Interior <span style={{ color: "#f3f3f3" }}>Design Work</span>
        </h1>

        <p className="design_text">
          All the Lorem Ipsum generators on the Internet tend to repeat text.
          All the Lorem Ipsum generators on the Internet tend
        </p>

        <div className="design_section_2">
          <div className="design_section_main">
            <div className="row">

              {/* Column 1 */}
              <div className="col-md-4">
                <Cardimg img={img1} url={"login"}/>
              </div>

              {/* Column 2 */}
              <div className="col-md-4">
                <div>
                <Cardimg img={img2} url={"login"}/>
                </div>
                <div>
                <div className="margin_top_30">
                  <Cardimg img={img3} url={"login"}/>
                </div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="col-md-4">
                <Cardimg img={img4} url={"login"}/>
              </div>

            </div>
          </div>
        </div>

        <div className="read_bt">
          <a href="#">See More</a>
        </div>
      </div>
    </div>
   {/* <!-- design section end --> */}
   <div className="client_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="client_taital">
              Artist <span style={{ color: "#2ea0f8" }}>Says</span>
            </h3>
          </div>
        </div>

          <div className="client_section_2">
          <div id="my_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
          <ArtistSlide img={clientimg1}/>
          <ArtistSlide img={clientimg2}/>
          </div></div>
            <div className="carousel-item "> 
              <div className="row">
          <ArtistSlide img={clientimg1}/>
          <ArtistSlide img={clientimg2}/>
          </div></div>
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
    </div>
  )
}

export default Index
