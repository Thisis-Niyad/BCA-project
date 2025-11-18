import React from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
function Carts() {
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alginItems="center">
            <Header title="Cart Lists" subtitle="Track, review, and resolve complaints" /> 
        </Box>
    </Box>
  )
}

export default Carts
