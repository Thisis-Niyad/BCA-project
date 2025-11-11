import React from 'react'
import Navbar from '../components/Navbar'
import img1 from "../src/assets/img-3.jpg";
import img2 from "../src/assets/img-6.jpg";
import img3 from "../src/assets/img-9.png";
import img4 from "../src/assets/img-11.jpg";
import Cardimg from '../components/Cardimg';

function Index() {
  return (
      <div>
        <Navbar />
      <div classNameName="banner_section layout_padding">
        <div classNameName="container-fluid">
          <div id="main_slider" classNameName="carousel slide" data-ride="carousel">
            <div classNameName="carousel-inner">

              <div classNameName="carousel-item active">
                <div classNameName="row">
                  <div classNameName="col-sm-2">
                    <h1 classNameName="banner_taital">
                      Design For <span style={{ color: "#343535" }}>Your House</span>
                    </h1>
                  </div>
                  <div classNameName="col-sm-10">
                    <div classNameName="images_main">
                      <div classNameName="banner_img"><img src="/images/banner-img1.png" /></div>
                      <div classNameName="banner_img"><img src="/images/banner-img2.png" /></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* other carousel-items same change */}
              
            </div>

            <a classNameName="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
              <i classNameName="fa fa-arrow-left"></i>
            </a>
            <a classNameName="carousel-control-next" href="#main_slider" role="button" data-slide="next">
              <i classNameName="fa fa-arrow-right"></i>
            </a>

          </div>
        </div>
      </div>
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
                <Cardimg img={img2} url={"login"}/>
                <div className="margin_top_30">
                  <Cardimg img={img3} url={"login"}/>
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
    </div>
  )
}

export default Index
