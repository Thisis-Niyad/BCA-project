import React from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
function Request() {
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Work lists" subtitle="Track, review, and resolve complaints" /> 
        </Box>
    </Box>
  )
}

export default Request
