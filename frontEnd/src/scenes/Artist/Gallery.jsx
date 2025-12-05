import React from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
function Gallery() {
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Gallery" subtitle="Browse, review and organize your uploaded creations" /> 
        </Box>
    </Box>
  )
}

export default Gallery
