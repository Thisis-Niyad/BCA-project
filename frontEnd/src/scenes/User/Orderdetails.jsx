import React from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
function Orderdetails() {
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Order Details" subtitle="View, Track, and manage your order information " /> 
        </Box>
    </Box>
  )
}

export default Orderdetails
