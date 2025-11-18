import React from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
function Payments() {
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alginItems="center">
            <Header title="Payment Transactions" subtitle="Analyze transactions and financial activity across the platform" /> 
        </Box>
    </Box>
  )
}

export default Payments
