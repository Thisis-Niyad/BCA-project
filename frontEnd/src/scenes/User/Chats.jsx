import React from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
function Chats() {
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Chats" subtitle="Connect and interact with Artist " /> 
        </Box>
    </Box>
  )
}

export default Chats
