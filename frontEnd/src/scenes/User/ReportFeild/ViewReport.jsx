import React,{useEffect,useState} from 'react'
import ViewComplaintDetails from '../../../Components/ViewComplaintDetails'
import Api from '../../../Api'
import {useParams} from 'react-router-dom'

function ViewReport() {
    const { id } = useParams();
    const { complaintId } = useParams();
    const [complaint, setComplaint] = useState();

    useEffect(()=>{
                const fetchComplaint=async()=>{
                  try {
                    const response=await Api.get(`/user/${id}/report/${complaintId}`)
                   setComplaint(response.data);  
                  
                   
                  } catch (err) {
                    console.log(err);
                  }
                }
            fetchComplaint()},[id,complaintId])
  return (
    <>
        <ViewComplaintDetails  complaint={complaint}/>
    </>
  )
}

export default ViewReport
