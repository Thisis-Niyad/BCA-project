import React from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
function Addpost() {
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Add Post" subtitle="Upload, Manage and showcase your artwork images" /> 
        </Box>
    </Box>
  )
}

export default Addpost
