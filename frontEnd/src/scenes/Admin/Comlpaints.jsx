import React,{useEffect,useState} from 'react'
import Header from '../../Components/Header'
import {Box, Typography,useTheme} from '@mui/material'
import {DataGrid} from '@mui/x-data-grid'
import Api from '../../Api'
import {useParams} from 'react-router-dom'
import {tokens} from '../../Theme'

function Comlpaints() {
  const theme= useTheme()
  const colors =tokens(theme.palette.mode)
  const [complaintRows, setComplaintRows] = useState();
  const { id } = useParams();
  const statusColors={
    pending:"#FFEE8C",
    "In progress":"#fcd12a",
    resolved:"#98fb98",
    rejected:"#fa8072",
  }
      useEffect(()=>{
        const fetchComplaintRows=async()=>{
          try {
            const response=await Api.get(`/admin/${id}/complaints`)
           setComplaintRows(response.data.complaints);  
  
          } catch (err) {
            console.log(err);
          }
        }
fetchComplaintRows()},[id])
      console.log(complaintRows);
  const columns=[
    {field:"_id" ,headerName:"ID",flex:1},
    {field:"title",headerName:"Title",flex:1},
    {field:"email",headerName:"E-mail",flex:1},
    {field:"name",headerName:"Name",flex:1},
    {field:"role",headerName:"Role"},
    {field:"dateOfComplaint", headerName:"Date",flex:1},
    {
      field:"status",
      headerName:"Status",
      flex:1,
      renderCell:({row:{status}})=>{
          return(
            <Box
            display="flex"
            alignItems="center"
            m="0 auto"
            p="5px"
            height="100%"
            justifyContent="center"  
           color={colors.primary[500]}
            backgroundColor={ statusColors[status]}>
            <Typography>{status}</Typography>
            </Box>
          )
      }
    },


  ]
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Complaints" subtitle="Track, review, and resolve complaints" /> 
        </Box>
        <Box m="20px 0 0 0" height="70vh">
          <DataGrid 
          rows={complaintRows}
          columns={columns}
           getRowId={(row) => row._id}
          />
        </Box>
    </Box>
  )
}

export default Comlpaints
