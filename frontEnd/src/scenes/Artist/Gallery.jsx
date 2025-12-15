import React,{useEffect,useState} from 'react'
import Header from '../../Components/Header'
import {Box} from '@mui/material'
import ArtistworkCard from '../../Components/ArtistworkCard'
import Api from '../../Api'
import {useParams} from 'react-router-dom'


function Gallery() {
  const { id } = useParams();
      const [cardData, setCards] = useState();
    useEffect(()=>{
      const fetchGallery=async()=>{
        try {
          const response=await Api.get(`/artist/${id}/gallery`)
            setCards(response.data);  
        } catch (err) {
          console.log(err);
        }
    }
  fetchGallery()},[id])
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Gallery" subtitle="Browse, review and organize your uploaded creations" />
        </Box>
            <ArtistworkCard cardData={cardData}/> 
    </Box>
  )
}

export default Gallery
