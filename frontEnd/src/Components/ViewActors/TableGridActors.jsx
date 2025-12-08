import React from 'react'
import {Box,useTheme,Button} from '@mui/material'
import {DataGrid} from '@mui/x-data-grid'
import AlertPopup from '../AlertPopup'
import {tokens} from '../../Theme'
import Api from '../../Api'
import unknownImg from '../../assets/unknown.jpg'

function TableGridAcotrs({Rows ,toggleUserBlock}) {

  
     const theme= useTheme()
      const colors =tokens(theme.palette.mode)


      const columns=[
    {field:"_id" ,headerName:"ID",flex:1, headerClassName: "super-header",},
    {field:"profileImg" ,headerName:"profile", headerClassName: "super-header",
       sortable: false,
      renderCell:({row})=>{
        const imgPath = row?.profileInfo?.profileImg;

    const finalSrc = !imgPath
      ? unknownImg
      : `http://localhost:5000/${imgPath}`;

    return (
      <img
        alt="Profile"
        src={finalSrc}
        width="40px"
        height="40px"
        style={{
          borderRadius: "50%",
          objectFit: "cover",
          border: "1px solid #888",
        }}
      />
    );
      }
    },
    {field:"name",headerName:"Name",flex:1,cellClassName:"title-column--cell", headerClassName: "super-header",},
    {field:"email",headerName:"E-mail", flex:1,headerClassName: "super-header"},
    {
      field:"isBlocked",
      headerName:"Blocked/unBlocked",
       headerClassName: "super-header",
      flex:1,
      renderCell:({row})=>{
          const { isBlocked, _id } = row;

    return isBlocked ? (
      <Button color="error" variant="contained" onClick={() => toggleUserBlock(_id)}>
        Blocked
      </Button>
    ) : (
      <Button color="success" variant="contained" onClick={() => toggleUserBlock(_id)}>
        Unblocked
      </Button>)
      }}
    ]
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
                 backgroundColor:  `${colors.greenAccent[600]} !important`,
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
                backgroundColor:colors.greenAccent[700],
                borderTop:"none"
              }
            }}
            >
              <DataGrid 
              rows={Rows}
              columns={columns}
               getRowId={(row) => row._id}
              //  onRowClick={(params)=>{
              //  const complaintId=params.row._id;
              //   navigate(complaintId)}}
              />
            </Box>
  )
}

export default TableGridAcotrs
