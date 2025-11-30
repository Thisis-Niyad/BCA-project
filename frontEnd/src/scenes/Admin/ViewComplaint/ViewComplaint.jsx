import React,{useEffect,useState} from 'react'
import {Box} from '@mui/material'
import Api from '../../../Api'
import {useParams} from 'react-router-dom'
import ViewComplaintDetails from '../../../Components/ViewComplaintDetails';

function ViewComplaint() {
      const { id } = useParams();
      const { complaintId } = useParams();
      const [complaint, setComplaint] = useState();
      
    
      useEffect(()=>{
            const fetchComplaint=async()=>{
              try {
                const response=await Api.get(`/admin/${id}/complaints/${complaintId}`)
               setComplaint(response.data);  
      
              } catch (err) {
                console.log(err);
              }
            }
        fetchComplaint()},[id,complaintId])
console.log(complaint.name);

  return (
    <>
    <Box m="40px 20px">
        <ViewComplaintDetails  complaint={complaint}/>
    </Box>
    </>
  )
}

export default ViewComplaint
