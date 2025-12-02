import React from 'react'
import {Box,Button,Typography,useTheme} from '@mui/material'
import {tokens} from '../Theme'
import {useNavigate} from 'react-router-dom'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

function ViewComplaintDetails({complaint}) {
        const theme =useTheme();
        const colors =tokens(theme.palette.mode);
        const navigate=useNavigate();
       const statusColors={
          pending:"#FFEE8C",
          "In Progress":"#f7b335",
          Resolved:"#98fb98",
          Rejected:"#fa8072",
        }  
  return (
    <>
      <Box display="flex" justifyContent="start" m="10px 0">
           <Button startIcon={<ArrowBackIosNewRoundedIcon/>} type="button" color="secondary" onClick={()=>{navigate(-1)}} variant="contained">Go Back</Button>
       </Box>
    <Box style={{
        boxShadow:'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
        padding:"45px 35px",
        backgroundColor:colors.primary[400]
    }}>
    {!complaint ? (
  <Typography>Loading...</Typography>
) : (
<Box style={{width:"100%", minHeight:"400px"}}>
    <Typography variant='h6' color={colors.grey[100]} fontWeight="bold">
        {complaint?.name||"Name"}
    </Typography>
    <Typography variant='h6' color={colors.grey[100]} fontWeight="bold">
        {complaint?.email||"E-mail"}
    </Typography>
    <Typography variant='h6' color={colors.grey[100]} >
        {complaint?.phoneNo||"Phone no."}
    </Typography>
    <Typography variant='h6' color={colors.grey[100]} >
        {complaint?.dateOfComplaint||"Date"}
    </Typography>
    <Typography variant='h6'color={colors.grey[100]} >
        subject : {complaint?.title}
    </Typography>
    <Typography component="p" variant='body' color={colors.grey[200]}>
       &emsp;&emsp;&emsp;&emsp; {complaint.complaintDetails ?? "Details"}
    </Typography>
    <Typography sx={{
        width:'fit-content',
        borderRadius:"9px",
        padding:"10px",
        margin:"10px 0",
        backgroundColor: statusColors[complaint?.status],
        color:colors.grey[500]
        }}>
        status : {complaint?.status}
    </Typography>
</Box>
)}     
    </Box>
    </>
  )
}

export default ViewComplaintDetails
