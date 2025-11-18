import React from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
function Gallery() {
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alginItems="center">
            <Header title="Gallery" subtitle="Track, review, and resolve complaints" /> 
        </Box>
    </Box>
  )
}

export default Gallery
