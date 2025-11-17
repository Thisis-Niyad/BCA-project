import React from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
function index() {
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alginItems="center">
            <Header title="DASHBOARD" subtitle="welcome to dashboard" /> 
        </Box>
    </Box>
  )
}

export default index
