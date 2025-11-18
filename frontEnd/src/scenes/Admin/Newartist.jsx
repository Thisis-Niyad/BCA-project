import React from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
function Newartist() {
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alginItems="center">
            <Header title="Artist Verification" subtitle="Validates Talents Joining the Platform" /> 
        </Box>
    </Box>
  )
}

export default Newartist
