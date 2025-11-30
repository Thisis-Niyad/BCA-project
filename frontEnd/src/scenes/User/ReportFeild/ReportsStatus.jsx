import React,{useState,useEffect} from 'react'
import Header from '../../../Components/Header'
import Api from '../../../Api'
import {Link} from 'react-router-dom'
import TableGridComplaint from '../../../Components/TableGridComplaint'
import {Box,Button, Typography,useTheme} from '@mui/material'
import {useParams} from 'react-router-dom'
import {tokens} from '../../../Theme'
// icons
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
function ReportsStatus() {
    const theme= useTheme()
    const colors =tokens(theme.palette.mode)
   const [statusRows, setStatusRow] = useState();
    const { id } = useParams();
    const statusColors={
        pending:"#FFEE8C",
        "In progress":"#fcd12a",
        resolved:"#98fb98",
        rejected:"#fa8072",
    }

     useEffect(()=>{
            const fetchtStatusRows=async()=>{
              try {
                const response=await Api.get(`/user/${id}/reports`)
               setStatusRow(response.data);  
      
              } catch (err) {
                console.log(err);
              }
            }
    fetchtStatusRows()},[id])

   const columns=[
    {field:"_id" ,headerName:"ID",flex:1, headerClassName: "super-header",},
    {field:"title",headerName:"Title",flex:1,cellClassName:"title-column--cell", headerClassName: "super-header",},
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
            <Header title="Report Status" subtitle="Track, review, and resolve complaints" /> 
    </Box>
    <Box display="flex" justifyContent="end" mt="10px">
        <Link to="new">
        <Button color="secondary" variant="contained">Raise a new complaint</Button>
        </Link>
    </Box>
     <TableGridComplaint columns={columns} Rows={statusRows}/>
    </Box>
  )
}

export default ReportsStatus
