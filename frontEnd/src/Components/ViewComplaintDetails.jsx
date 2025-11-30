import React from 'react'
import {Box,Typography} from '@mui/material'

function ViewComplaintDetails({complaint}) {
  return (
    <Box style={{
        boxShadow:'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
        padding:"35px 25px"
    }}>
        <Typography>{complaint.name}</Typography>
        <Typography>{complaint.email}</Typography>
        <Typography>{complaint.phoneNo}</Typography>
        <Typography>Title : {complaint.title}</Typography>
        <Typography>{complaint.dateOfComplaint}</Typography>
        <Typography component="p">{complaint.complaintDetails}</Typography>
        <Typography>{complaint.status}</Typography>
    </Box>
  )
}

export default ViewComplaintDetails
