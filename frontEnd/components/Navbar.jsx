import React from 'react'

function Navbar() {
  return (
    <div class="header_section">
      <div class="container-fluid">
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="index.html">logoimg</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                     <a class="nav-link" href="index.html">Home</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="about.html">About</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="design.html">Design</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="company.html">Company</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="news.html">News</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="contact.html">Contact Us</a>
                  </li>
               </ul>
               <form class="form-inline my-2 my-lg-0">
                  {/* <!-- Actual search box --> */}
                  <div class="form-group has-search">
                     <input type="text" class="form-control" placeholder="Search"/>
                     <span class="fa fa-search form-control-feedback"></span>
                  </div>
                  
               </form>
            </div>
         </nav>
      </div>
   </div>
//    <!-- header section end -->
  )
}

export default Navbar
