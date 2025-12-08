import React from 'react'
import {Box, Typography, Paper,useTheme, Grid, Chip, Divider, Button } from '@mui/material'
import {tokens} from '../Theme'
import {useNavigate} from 'react-router-dom'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

function ViewComplaintDetails({complaint}) {
        const theme =useTheme();
        const colors =tokens(theme.palette.mode);
        const navigate=useNavigate();
    //    const statusColors={
    //       pending:"#FFEE8C",
    //       "In Progress":"#f7b335",
    //       Resolved:"#98fb98",
    //       Rejected:"#fa8072",
    //     }  
//      const complaint = {
//     name: "John Doe",
//     email: "john@example.com",
//     phone: "9876543210",
//     title: "Payment not credited",
//     description:
//       "I have completed the artwork but payment is not credited yet. Please resolve.",
//     date: "2025-01-20",
//     role: "artist",
//     status: "pending",
//   };

  const getStatusColor = (status) => {
    switch (status) {
      case "Resolved":
        return "success";
      case "In-progress":
        return "warning";
      case "Rejected":
        return "error";
      default:
        return "info";
    }
  };
  return (
    <>
    <Box display="flex" justifyContent="start" m="10px 0">
           <Button startIcon={<ArrowBackIosNewRoundedIcon/>} type="button" color="secondary" onClick={()=>{navigate(-1)}} variant="contained">Go Back</Button>
       </Box>
     <Box p={3}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 3, backgroundColor:colors.primary[400] }}>

        {/* Header */}
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{color:colors.grey[100]}}>
          Complaint Details
        </Typography>
        <Divider sx={{ mb: 3 }} />

        {/* Basic Info */}
        <Grid container spacing={2} 
        sx={{ "& > .MuiGrid-root":{padding:"10px", borderBottom:"1px solid #4a5364"}}}>
          <Grid item xs={12} md={6} size={4} >
            <Typography variant="subtitle2" color="text.secondary">
              Name
            </Typography>
            <Typography variant="body1">{complaint?.name}</Typography>
          </Grid>

          <Grid item xs={12} md={6} size={4} >
            <Typography variant="subtitle2" color="text.secondary">
              Email
            </Typography>
            <Typography variant="body1">{complaint?.email}</Typography>
          </Grid>

          <Grid item xs={12} md={6} size={4}>
            <Typography variant="subtitle2" color="text.secondary">
              Phone Number
            </Typography>
            <Typography variant="body1">{complaint?.phoneNo}</Typography>
          </Grid>
          <Grid item xs={12} md={6} size={4}>
            <Typography variant="subtitle2" color="text.secondary">
              Date of Complaint
            </Typography>
            <Typography variant="body1">{complaint?.dateOfComplaint}</Typography>
          </Grid>

          <Grid item xs={12} md={6} size={4}>
            <Typography variant="subtitle2" color="text.secondary">
              Status
            </Typography>
            <Button variant="contained" color={getStatusColor(complaint?.status)}
              sx={{
        width:'fit-content',
        borderRadius:"9px",
        padding:"10px",
        margin:"10px 0",
 
        }}>
     {complaint?.status}
    </Button>
          </Grid>

          {/* Title */}
          <Grid item xs={12} size={12}>
            <Typography variant="subtitle2" color="text.secondary">
              Complaint Title
            </Typography>
            <Typography variant="h6" sx={{ mt: 0.5,color:colors.grey[100] }}>
              {complaint?.title}
            </Typography>
          </Grid>

          {/* Description */}
          <Grid item xs={12} size={12}>
            <Typography variant="subtitle2" color="text.secondary">
              Description
            </Typography>
            <Paper
              variant="outlined"
              sx={{
                p: 2,
                mt: 1,
                backgroundColor:colors.grey[700],
                borderRadius: 2,
                width: "100%",
                span: 7,
              }}
            >
              <Typography variant="body2">{complaint?.complaintDetails}</Typography>
            </Paper>
          </Grid>
        </Grid>


      </Paper>
    </Box> 
    </>
  )
}

export default ViewComplaintDetails
