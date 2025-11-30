import React,{useEffect,useState} from 'react'
import Header from '../../Components/Header'
import {Box, Typography,useTheme} from '@mui/material'
import Api from '../../Api'
import {useParams} from 'react-router-dom'
import {tokens} from '../../Theme'
// icons
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import TableGridComplaint from '../../Components/TableGridComplaint'

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
           setComplaintRows(response.data);  
  
          } catch (err) {
            console.log(err);
          }
        }
      fetchComplaintRows()},[id])
     
  const columns=[
    {field:"_id" ,headerName:"ID",flex:1, headerClassName: "super-header",},
    {field:"title",headerName:"Title",flex:1,cellClassName:"title-column--cell", headerClassName: "super-header",},
    {field:"email",headerName:"E-mail",flex:1, headerClassName: "super-header",},
    {field:"role",headerName:"Role", headerClassName: "super-header",},
    {field:"dateOfComplaint", headerName:"Date",flex:1, headerClassName: "super-header",},
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
            backgroundColor={ statusColors[status]}>
              {status==="pending"&&<HourglassTopIcon/>}
              {status==="In progress"&&<ShowChartIcon/>}
              {status==="Resolved"&&<TaskAltIcon/>}
              {status==="Rejected"&&<HighlightOffRoundedIcon/>}
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
        <TableGridComplaint columns={columns} Rows={complaintRows}/>
    </Box>
  )
}

export default Comlpaints
