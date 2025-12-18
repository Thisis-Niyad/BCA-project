import React,{useState,useEffect} from 'react'
import Header from '../../Components/Header'
import {Box,Button,Rating,Typography} from '@mui/material'
import Api from '../../Api'
import {useParams} from 'react-router-dom'
import AlertPopup from '../../Components/AlertPopup'
import TableGridAcotrs from '../../Components/ViewActors/TableGridActors'
import unknownImg from '../../assets/unknown.jpg'

function Viewartist() {
 const { id } = useParams();
 const [usersRows, setUsersRows] = useState();
 const [alert, setAlert] = useState({show: false,msg: "",severity: "error",});
 
  useEffect(()=>{
                const fetchUsersRows=async()=>{
                  try {
                    const response=await Api.get(`/admin/${id}/viewactors?actor=artist`)
                   setUsersRows(response.data);  
                    
                  } catch (err) {
                    console.log(err);
                  }
                }
              fetchUsersRows()},[id])

      const columns=[
             {field:"profileImg" ,headerName:"profile", headerClassName: "super-header",
                sortable: false,
                 align:"center",
                 headerAlign:"center",
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
             {field:"name",headerName:"Name",flex:1,cellClassName:"title-column--cell", headerClassName: "super-header", align:"left",
                 headerAlign:"left",},
             {
               field:"artistRating",
               headerName:"Rating",
              headerClassName: "super-header",
               align:"center",
                 headerAlign:"center",
               flex:1,
               renderCell:({row})=>{
             return (
                      <Box display="flex" alignItems="center" justifyCntent="center" gap={1}>
                        <Rating
                          value={row.rating}
                          precision={0.5}
                          readOnly
                          size="small"
                        />
                        <Typography variant="body2" color="text.secondary">
                          ({row.rating})
                        </Typography>
                      </Box>
             ) 
               }}
             ]  
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Artits" subtitle="Track, review, and resolve complaints" /> 
        </Box>
          <TableGridAcotrs Rows={usersRows} columns={columns}/>
                <AlertPopup Alertshow={alert.show} msg={alert.msg} severity={alert.severity} 
                setAlert={setAlert}/>
                
    </Box>
  )
}

export default Viewartist
