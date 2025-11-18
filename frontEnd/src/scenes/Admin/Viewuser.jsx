import React from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
function Viewuser() {
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alginItems="center">
            <Header title="Users" subtitle="list of all regisered users" /> 
        </Box>
    </Box>
  )
}

export default Viewuser
