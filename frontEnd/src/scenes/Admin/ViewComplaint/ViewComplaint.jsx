import React,{useEffect,useState} from 'react'
import {Box,Typography,Button,TextField,MenuItem,useTheme} from '@mui/material'
import {tokens} from '../../../Theme'
import Api from '../../../Api'
import { Formik } from 'formik'
import {useParams} from 'react-router-dom'
import ViewComplaintDetails from '../../../Components/ViewComplaintDetails';
import AlertPopup from '../../../Components/AlertPopup'


function ViewComplaint() {
      const { id } = useParams();
      const { complaintId } = useParams();
      const theme= useTheme()
        const colors =tokens(theme.palette.mode)
      const [complaint, setComplaint] = useState();
       const [status, setStatus] = useState( "pending" );
        const [alert, setAlert] = useState({
                         show: false,
                         msg: "",
                         severity: "error",
                       });
    const handleSubmit= async(values)=>{
      console.log(values);
      
            try {
                     const response= await Api.post(`/admin/${id}/complaints/${complaintId}`,values)
                     if (response.status===200) {
                         setAlert({
                       show: true,
                       msg:response.data.msg,
                       severity: "success",
                     });
                     }
                   } catch (err) {
                         setAlert({
                       show: true,
                       msg:err.status +" : "+ err.response?.data?.msg || "Login failed",
                       severity: "warning",
                     });
                   }; 
       }
  
    
      useEffect(()=>{
            const fetchComplaint=async()=>{
              try {
                const response=await Api.get(`/admin/${id}/complaints/${complaintId}`)
               setComplaint(response.data);  
               setStatus(response.data.status)
               
              } catch (err) {
                console.log(err);
              }
            }
        fetchComplaint()},[id,complaintId])

  return (
    <>
    <Box m="40px 20px">
        <ViewComplaintDetails  complaint={complaint}/>
         <Formik
                              onSubmit={handleSubmit}
                              initialValues={{status:status}}
                              enableReinitialize={true}
                            >
                              {({ values, handleChange, handleSubmit})=>(
                                <form onSubmit={handleSubmit}>
           <Box
              display="flex"
              flexDirection="column"
              gap={2} 
              p={3}
              m="15px 0"
              bgcolor={colors.primary[400]}
              borderRadius="12px"
            >
              <Typography variant="h6"  sx={{ color:colors.grey[100]}} >
                Update Complaint Status
              </Typography>
        
              {/* Status Select */}
              <TextField
              name="status"
                select
                label="Select Status"
                  value={values.status}
                  onChange={handleChange}
                fullWidth
                sx={{ color:colors.grey[100], borderRadius: "6px" }}
              >
                 <MenuItem value="pending">pending</MenuItem>
  <MenuItem value="In Progress">In Progress</MenuItem>
  <MenuItem value="Resolved">Resolved</MenuItem>
  <MenuItem value="Rejected">Rejected</MenuItem>
              </TextField>
        
           
        
              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                sx={{ height: "45px", fontWeight: "bold" }}
              >
                Update Status
              </Button>
            </Box>
            </form>
             )}
          </Formik>
        <AlertPopup Alertshow={alert.show} msg={alert.msg} severity={alert.severity} setAlert={setAlert}/>
            
    </Box>
    </>
  )
}

export default ViewComplaint
