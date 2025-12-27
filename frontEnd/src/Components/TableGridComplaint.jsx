import React from 'react'
import {Box,useTheme} from '@mui/material'
import {DataGrid} from '@mui/x-data-grid'
import {useNavigate} from 'react-router-dom'
import {tokens} from '../Theme'

function TableGridComplaint({Rows,columns}) {
  const navigate=useNavigate();
     const theme= useTheme()
      const colors =tokens(theme.palette.mode)
  return (
    <Box m="20px auto " height="70vh"
            sx={{
              maxWidth:"1080px",
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
                 backgroundColor:  `${colors.blueAccent[700]} !important`,
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
                backgroundColor:colors.blueAccent[700],
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

export default TableGridComplaint
