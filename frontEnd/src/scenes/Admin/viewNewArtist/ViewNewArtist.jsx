import React,{useEffect,useState} from "react";
import { Box } from "@mui/material";
import ViewAritistRegisterationDetails from "../../../Components/ViewAritistRegisterationDetails";
import Api from '../../../Api'
import {useParams,useNavigate} from 'react-router-dom'
import AlertPopup from '../../../Components/AlertPopup'

function ViewNewArtist() {
    const { id } = useParams();
        const { newartistId } = useParams();
     const [artist, setArtist] = useState();
     const [status, setStatus] = useState("pending");
         const navigate=useNavigate();
 const [alert, setAlert] = useState({
                         show: false,
                         msg: "",
                         severity: "error",
                       });     
  useEffect(()=>{
   const fetchNewArtist=async()=>{
           try {
              const response=await Api.get(`/admin/${id}/newartist/${newartistId}`)
              setArtist(response.data);  
              setStatus(response.data.status)
            } catch (err) {
              console.log(err);
             }
           }
   fetchNewArtist()},[id,newartistId])
  
 const onApprove= async(newartistId)=>{  
            try {
                     const response= await Api.put(`/admin/${id}/approve/${newartistId}`)
                     if (response.status) {
                         setAlert({
                       show: true,
                       msg:response.data.msg,
                       severity: "success",
                     });
                     setStatus("Approve");
                     }
                   } catch (err) {
                         setAlert({
                       show: true,
                       msg:err.status +" : "+ err.response?.data?.msg || "Login failed",
                       severity: "warning",
                     });
                   }; 
       }
   const onReject= async(newartistId)=>{  
              try {
                       const response= await Api.put(`/admin/${id}/reject/${newartistId}`)
                       if (response.status===200) {
                           setAlert({
                         show: true,
                         msg:response.data.msg,
                         severity: "success",
                       });
                     setStatus("Reject");
                       }
                     } catch (err) {
                           setAlert({
                         show: true,
                         msg:err.status +" : "+ err.response?.data?.msg || "Login failed",
                         severity: "warning",
                       });
                     }; 
         }
    

  return (
   <Box>
      <ViewAritistRegisterationDetails
       artist={artist}
       onBack={()=>{navigate(-1)}}
       onApprove={onApprove}
       status={status}
       onReject={onReject}/>
        <AlertPopup Alertshow={alert.show} msg={alert.msg} severity={alert.severity} setAlert={setAlert}/>
            
   </Box>
  );
}
export default ViewNewArtist