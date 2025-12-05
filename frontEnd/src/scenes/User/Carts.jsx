import React from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
function Carts() {
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Cart Lists" subtitle="Review, update and procced with selected Items" /> 
        </Box>
    </Box>
  )
}

export default Carts
