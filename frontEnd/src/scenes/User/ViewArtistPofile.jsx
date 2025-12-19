import React,{useState,useEffect} from 'react'
import {Box} from '@mui/material'
import ArtistProfilePage from '../../Components/ArtistProfilePage'
import Api from '../../Api'
import {useParams} from 'react-router-dom'



function ViewArtistProfile() {
    const { id } = useParams();
    const { artistId } = useParams();
    const [works ,setWorks]=useState()
    const [artist ,setArtist]=useState()

      useEffect(()=>{
        const fetchData=async()=>{
          try {
            const response=await Api.get(`/user/${id}/viewartist/${artistId}`)
              setArtist(response.data.artist);  
              setWorks(response.data.works);  
          } catch (err) {
            console.log(err);
          }
      }
    fetchData()},[id,artistId])
    
  return (
    <>
      <Box>
        <ArtistProfilePage artist={artist} works={works}/>
      </Box>    
    </>
  )
}

export default ViewArtistProfile
