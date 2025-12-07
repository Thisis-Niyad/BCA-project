import React from 'react'
import {Box,useTheme,Typography} from '@mui/material'
import {DataGrid} from '@mui/x-data-grid'
import {useNavigate} from 'react-router-dom'
import {tokens,NewArtistStatusColors} from '../Theme'
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
function NewArtistTable({Rows}) {
  const navigate=useNavigate();
     const theme= useTheme()
      const colors =tokens(theme.palette.mode)

   const   columns=[
            {field:"email" ,headerName:"E mail",flex:1, headerClassName: "super-header",},
            {field:"name" ,headerName:"Name",flex:1, headerClassName: "super-header",},
 {
      field:"status",
      headerName:"Status",
       headerClassName: "super-header",
      flex:1,
      renderCell:({row:{status}})=>{
          return(
            <Box
            display="flex"
            alignItems="center"
            borderRadius="4px"
            m="0 auto"
            p="5px"
            height="100%"
            justifyContent="center"  
           color={colors.primary[500]}
            backgroundColor={ NewArtistStatusColors[status]}>
              {status==="pending"&&<HourglassTopIcon/>}
              {status==="Resolved"&&<TaskAltIcon/>}
              {status==="Rejected"&&<HighlightOffRoundedIcon/>}
            <Typography>{status}</Typography>
            </Box>
          )
      }
    },      ]
  return (
    <Box m="20px 0 0 0" height="70vh"
            sx={{
              "& .MuiDataGrid-root":{
                border:"none",
                borderRadius:"7px",
                boxShadow:'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px'
              },
              "& .MuiDataGrid-cell":{
                borderBottom:"none"
              },
              "& .title-column--cell":{
                colors:colors.grey[300]
              },
              "& .MuiDataGrid-columnHeader, .super-header": {
                 backgroundColor:  `${colors.redAccent[700]} !important`,
              },
              "& .MuiDataGrid-columnSeparator":{
                color:`${colors.grey[400]} !important`
              },
              "& .MuiDataGrid-virtualScroller":{
                backgroundColor:colors.primary[400]
              },
              "& .MuiDataGrid-menuIcon":{
                visibility:"visible",
                width:"fit-content"
              },
              "& .MuiDataGrid-footerContainer":{
                backgroundColor:colors.redAccent[700],
                borderTop:"none"
              }
            }}
            >
              <DataGrid 
              rows={Rows}
              columns={columns}
               getRowId={(row) => row._id}
               onRowClick={(params)=>{
               const complaintId=params.row._id;
                navigate(complaintId)}}
              />
            </Box>
  )
}

export default NewArtistTable
