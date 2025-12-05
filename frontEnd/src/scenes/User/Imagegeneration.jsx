import React from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
function Imagegeneration() {
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="AI Image Generation" subtitle="Create, customize and download Ai Generated Images" /> 
        </Box>
    </Box>
  )
}

export default Imagegeneration
