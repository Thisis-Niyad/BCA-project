import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
// import './css/jquery.mCustomScrollbar.min.css'
import './css/bootstrap.min.css'
import './css/responsive.css'
import './css/style.css'
function Home() {
  return (
    <div className='bodyindex'>
    <Navbar />
    <Outlet />
    <Footer/>
    </div>
  )
}

export default Home
