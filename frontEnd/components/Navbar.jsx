import React from 'react'
import {Link, useLocation } from 'react-router-dom'

function Navbar() {
   const location = useLocation()
   const home = location.pathname === "/";  
   const contact =location.pathname.startsWith("/contact");
  return (
    <div class="header_section">
      <div class="container-fluid">
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/">logoimg</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav ml-auto">
                  <li class="nav-item ">
                     <Link className={`nav-link ${home ? "active" : ""}`} to="/">Home</Link>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" to="#about">About</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" to="design.html">Service</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" to="company.html">Company</a>
                  </li>
                  <li class="nav-item">
                     <Link className={`nav-link ${contact ? "active" : ""}`} to="/contact">Contact Us</Link>
                  </li>
               </ul>
               {/* <form class="form-inline my-2 my-lg-0">
                  <!-- Actual search box -->
                  <div class="form-group has-search">
                     <input type="text" class="form-control" placeholder="Search"/>
                     <span class="fa fa-search form-control-feedback"></span>
                  </div>
                  
               </form> */}
            </div>
         </nav>
      </div>
   </div>
//    <!-- header section end -->
  )
}

export default Navbar
