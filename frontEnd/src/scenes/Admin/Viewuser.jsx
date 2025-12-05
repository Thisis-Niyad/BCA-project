import React,{useEffect,useState} from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
import Api from '../../Api'
import {useParams} from 'react-router-dom'
import TableGridAcotrs from '../../Components/ViewActors/TableGridActors'
import AlertPopup from '../../Components/AlertPopup'
function Viewuser() {
    const { id } = useParams();
      const [usersRows, setUsersRows] = useState();
      
            const [alert, setAlert] = useState({
                    show: false,
                    msg: "",
                    severity: "error",
                  });
    const toggleUserBlock = async(userId) => {
     try {
      
      const response= await Api.post(`/admin/${id}/toggleuseraccess`,{userId:userId})
              if (response.status===200) {
                  setAlert({ show: true,msg:response.data.msg,severity: "success",});
                 setUsersRows(prev =>
                    prev.map(user =>
                      user._id === userId
                        ? { ...user, isBlocked: !user.isBlocked }
                        : user
                    )
                  );
              }
            } catch (err) {
                  setAlert({
                show: true,
                msg:err.status +" : "+ err.response?.data?.msg || "Login failed",
                severity: "warning",
              });
            };  
      
    };
   useEffect(()=>{
          const fetchUsersRows=async()=>{
            try {
              const response=await Api.get(`/admin/${id}/viewuser`)
             setUsersRows(response.data);  
              
            } catch (err) {
              console.log(err);
            }
          }
        fetchUsersRows()},[id])
      
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Users" subtitle="list of all regisered users" /> 
        </Box>
        <TableGridAcotrs Rows={usersRows} toggleUserBlock={toggleUserBlock}/>
        <AlertPopup Alertshow={alert.show} msg={alert.msg} severity={alert.severity} setAlert={setAlert}/>
    </Box>
  )
}

export default Viewuser
