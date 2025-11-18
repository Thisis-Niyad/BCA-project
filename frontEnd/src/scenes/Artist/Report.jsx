import React from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
function Report() {
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alginItems="center">
            <Header title="Report issues" subtitle="Track, review, and resolve complaints" /> 
        </Box>
    </Box>
  )
}

export default Report
