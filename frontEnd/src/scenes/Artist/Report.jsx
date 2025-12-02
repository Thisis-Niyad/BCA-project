import React from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
import {Outlet} from 'react-router-dom'



function Report() {
  
      
  return (
    <Box m="20px">
     <Outlet />
        </Box>
        
  )
}

export default Report
