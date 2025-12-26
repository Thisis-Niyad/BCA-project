import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
// import './css/jquery.mCustomScrollbar.min.css'
import './css/bootstrap.min.css'
import './css/responsive.css'
import './css/style.css'
import {Box ,useTheme} from '@mui/material'
import { tokens} from './Theme'

function Home() {
    const theme =useTheme();
    const colors =tokens(theme.palette.mode);
  return (
    
    <div >
      <Box className='bodyindex' sx={{backgroundColor:colors.blueAccent[200]}}>
    <Navbar />
    <Box>
    <Outlet />
    </Box>
    </Box>
    <Footer/>
     
    </div>
   
  )
}

export default Home
