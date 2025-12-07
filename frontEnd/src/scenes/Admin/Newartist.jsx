import React,{useEffect,useState} from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
import NewArtistTable from '../../Components/NewArtistTable'
import Api from '../../Api'
import {useParams} from 'react-router-dom'

function Newartist() {
const [newArtistRows, setNewArtistRows] = useState();
  const { id } = useParams();

    useEffect(()=>{
          const fetchNewArtistRows=async()=>{
            try {
              const response=await Api.get(`/admin/${id}/newartist`)
             setNewArtistRows(response.data);  
    
            } catch (err) {
              console.log(err);
            }
          }
        fetchNewArtistRows()},[id])
        console.log(newArtistRows);
        
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Artist Verification" subtitle="Validates Talents Joining the Platform" /> 
        </Box>
        <NewArtistTable Rows={newArtistRows}/>
    </Box>
  )
}

export default Newartist
