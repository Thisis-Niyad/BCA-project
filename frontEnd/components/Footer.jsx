import React from 'react'

function Footer() {
  return (
    <div>
         {/* <!-- footer section start --> */}
   <div class="footer_section layout_padding">
      <div class="container">
         <div class="row">
            <div class="col-lg-3 col-md-6">
               <div class="footer_logo">logimg</div>
               <p class="footer_text">There are many variations of passages of Lorem Ipsum </p>
            </div>
            <div class="col-lg-3 col-md-6">
               <h3 class="footer_taital">LET US HELP YOU</h3>
               <p class="footer_text">There are many variations of passages of Lorem Ipsum available</p>
            </div>
            <div class="col-lg-3 col-md-6">
               <h3 class="footer_taital">INFORMATION</h3>
               <div class="footer_menu">
                  <ul>
                     <li><a href="index.html">Home</a></li>
                     <li><a href="about.html">About</a></li>
                     <li><a href="services.html">Services</a></li>
                     <li><a href="testimonial.html">Testimonial</a></li>
                     <li><a href="contact.html">Contact Us</a></li>
                  </ul>
               </div>
            </div>
            <div class="col-lg-3 col-md-6">
               <h3 class="footer_taital">Contact Us</h3>
               <div class="location_text">
                  <ul>
                     <li>
                        <a href="#">
                           <i class="fa fa-map-marker" aria-hidden="true"></i><span class="padding_left_10">Page when
                              looking at its</span>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <i class="fa fa-phone" aria-hidden="true"></i><span class="padding_left_10">+01
                              1234567890</span>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <i class="fa fa-envelope" aria-hidden="true"></i><span
                              class="padding_left_10">demo@gmail.com</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div class="footer_section">
            <div class="row">
               <div class="col-md-6">
                  <div class="input_bt">
                    
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="footer_social_icon">
                     <ul>
                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   {/* <!-- footer section end --> */}
   {/* <!-- copyright section start --> */}
   <div class="copyright_section">
      <div class="container">
         <p class="copyright_text">2025 All Rights Reserved. Design by Pixel Pact </p>
      </div>
   </div>
    </div>
  )
}

export default Footer
