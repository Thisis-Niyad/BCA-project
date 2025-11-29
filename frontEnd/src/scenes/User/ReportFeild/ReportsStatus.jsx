import React from 'react'
import {Box,Button} from '@mui/material'
import Header from '../../../Components/Header'
import {Link} from 'react-router-dom'


function ReportsStatus() {
  return (
    <Box m="20px">
     <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Report Status" subtitle="Track, review, and resolve complaints" /> 
    </Box>
    <Box display="flex" justifyContent="end" mt="10px">
        <Link to="new">
        <Button color="secondary" variant="contained">Raise a new complaint</Button>
        </Link>
    </Box>
    </Box>
  )
}

export default ReportsStatus
