import React from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
function Viewartist() {
    return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alginItems="center">
            <Header title="Artists" subtitle="Browse and manage all registered submitted artists" /> 
        </Box>
    </Box>
    )
}

export default Viewartist
