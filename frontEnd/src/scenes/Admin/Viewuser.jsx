import React,{useEffect,useState} from 'react'
import Header from '../../Components/Header'
import {Box,Button} from '@mui/material'
import Api from '../../Api'
import {useParams} from 'react-router-dom'
import TableGridAcotrs from '../../Components/ViewActors/TableGridActors'
import AlertPopup from '../../Components/AlertPopup'
import unknownImg from '../../assets/unknown.jpg'

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
              const response=await Api.get(`/admin/${id}/viewactors?actor=user`)
             setUsersRows(response.data);  
              
            } catch (err) {
              console.log(err);
            }
          }
        fetchUsersRows()},[id])
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
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Users" subtitle="list of all regisered users" /> 
        </Box>
        <TableGridAcotrs Rows={usersRows} columns={columns}/>
        <AlertPopup Alertshow={alert.show} msg={alert.msg} severity={alert.severity} setAlert={setAlert}/>
    </Box>
  )
}

export default Viewuser
