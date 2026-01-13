import React,{ useState,useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  useTheme,
  Box,
} from "@mui/material";
import ArtistworkCard from "../../components/ArtistworkCard";
import CartCarousel from "../../Components/CartCarousel";
import {tokens} from '../../Theme'
import Api from '../../Api'
import {useParams} from 'react-router-dom'

// const artworksData = [
//   {
//     id: 1,
//     title: "Digital Sunset",
//     artist: "Niyad",
//     price: 2500,
//     image: "https://source.unsplash.com/400x300/?art",
//   },
//   {
//     id: 2,
//     title: "Abstract Flow",
//     artist: "Alex",
//     price: 1800,
//     image: "https://source.unsplash.com/400x300/?painting",
//   },
//   {
//     id: 1,
//     title: "Digital Sunset",
//     artist: "Niyad",
//     price: 2500,
//     image: "https://source.unsplash.com/400x300/?art",
//   },
//   {
//     id: 2,
//     title: "Abstract Flow",
//     artist: "Alex",
//     price: 1800,
//     image: "https://source.unsplash.com/400x300/?painting",
//   },
//   {
//     id: 1,
//     title: "Digital Sunset",
//     artist: "Niyad",
//     price: 2500,
//     image: "https://source.unsplash.com/400x300/?art",
//   },
//   {
//     id: 2,
//     title: "Abstract Flow",
//     artist: "Alex",
//     price: 1800,
//     image: "https://source.unsplash.com/400x300/?painting",
//   },
//   {
//     id: 1,
//     title: "Digital Sunset",
//     artist: "Niyad",
//     price: 2500,
//     image: "https://source.unsplash.com/400x300/?art",
//   },
//   {
//     id: 2,
//     title: "Abstract Flow",
//     artist: "Alex",
//     price: 1800,
//     image: "https://source.unsplash.com/400x300/?painting",
//   },
//   {
//     id: 1,
//     title: "Digital Sunset",
//     artist: "Niyad",
//     price: 2500,
//     image: "https://source.unsplash.com/400x300/?art",
//   },
//   {
//     id: 2,
//     title: "Abstract Flow",
//     artist: "Alex",
//     price: 1800,
//     image: "https://source.unsplash.com/400x300/?painting",
//   },
//   {
//     id: 1,
//     title: "Digital Sunset",
//     artist: "Niyad",
//     price: 2500,
//     image: "https://source.unsplash.com/400x300/?art",
//   },
//   {
//     id: 2,
//     title: "Abstract Flow",
//     artist: "Alex",
//     price: 1800,
//     image: "https://source.unsplash.com/400x300/?painting",
//   },
//   {
//     id: 1,
//     title: "Digital Sunset",
//     artist: "Niyad",
//     price: 2500,
//     image: "https://source.unsplash.com/400x300/?art",
//   },
//   {
//     id: 2,
//     title: "Abstract Flow",
//     artist: "Alex",
//     price: 1800,
//     image: "https://source.unsplash.com/400x300/?painting",
//   },
//   {
//     id: 1,
//     title: "Digital Sunset",
//     artist: "Niyad",
//     price: 2500,
//     image: "https://source.unsplash.com/400x300/?art",
//   },
//   {
//     id: 2,
//     title: "Abstract Flow",
//     artist: "Alex",
//     price: 1800,
//     image: "https://source.unsplash.com/400x300/?painting",
//   },
//   {
//     id: 1,
//     title: "Digital Sunset",
//     artist: "Niyad",
//     price: 2500,
//     image: "https://source.unsplash.com/400x300/?art",
//   },
//   {
//     id: 2,
//     title: "Abstract Flow",
//     artist: "Alex",
//     price: 1800,
//     image: "https://source.unsplash.com/400x300/?painting",
//   },
//   {
//     id: 1,
//     title: "Digital Sunset",
//     artist: "Niyad",
//     price: 2500,
//     image: "https://source.unsplash.com/400x300/?art",
//   },
//   {
//     id: 2,
//     title: "Abstract Flow",
//     artist: "Alex",
//     price: 1800,
//     image: "https://source.unsplash.com/400x300/?painting",
//   },
//   {
//     id: 1,
//     title: "Digital Sunset",
//     artist: "Niyad",
//     price: 2500,
//     image: "https://source.unsplash.com/400x300/?art",
//   },
//   {
//     id: 2,
//     title: "Abstract Flow",
//     artist: "Alex",
//     price: 1800,
//     image: "https://source.unsplash.com/400x300/?painting",
//   },
//   {
//     id: 1,
//     title: "Digital Sunset",
//     artist: "Niyad",
//     price: 2500,
//     image: "https://source.unsplash.com/400x300/?art",
//   },
//   {
//     id: 2,
//     title: "Abstract Flow",
//     artist: "Alex",
//     price: 1800,
//     image: "https://source.unsplash.com/400x300/?painting",
//   },
//   {
//     id: 1,
//     title: "Digital Sunset",
//     artist: "Niyad",
//     price: 2500,
//     image: "https://source.unsplash.com/400x300/?art",
//   },
//   {
//     id: 2,
//     title: "Abstract Flow",
//     artist: "Alex",
//     price: 1800,
//     image: "https://source.unsplash.com/400x300/?painting",
//   },
// ];

const Home = () => {
        const theme= useTheme()
            const { id } = useParams();
        const colors =tokens(theme.palette.mode)
        const [artworksData,setArtworkData]=useState([]);
  const [search, setSearch] = useState("");

  const filteredArtworks = artworksData.filter((art) =>
    art.title.toLowerCase().includes(search.toLowerCase()) ||
    art.artist.toLowerCase().includes(search.toLowerCase())
  );

    useEffect(()=>{
      const fetchArtWorkData=async()=>{
        try {
          const response=await Api.get(`/user/${id}/home`)
            setArtworkData(response.data);  
        } catch (err) {
          console.log(err);
        }
    }
  fetchArtWorkData()},[id])


  
  return (
    <>
    <Box
        sx={{
          py: 8,
          textAlign: "center",
          background: "linear-gradient(135deg, #6366f1, #9333ea)",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Discover & header
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Buy unique artworks from talented artists
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 3, px: 4 }}
        >
          Explore Artworks
        </Button>
      </Box>
    <Box m="40px">
    {/* <Container sx={{ m: 0 }}> */}
      {/* Hero */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h3" fontWeight="bold">
          Discover & Buy Digital Art
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 1 }}>
          Buy, bid, and commission talented artists on PixelPact
        </Typography>
      </Box>

      {/* Search */}
       <Box sx={{ my: 4,width:"70%",m:"auto" }}>
            <TextField
              fullWidth
              placeholder="Search artworks, artists, categories..."
              variant="outlined"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Box>
      </Box>
      <Box width="93%" overFlow="hidden" m="40px">
        <CartCarousel cartItems={filteredArtworks} />
    
    {/* </Container> */}
    
    </Box>
      <Box
        sx={{
          p: 5,
          textAlign: "center",
          bgcolor: "#020617",
        }}
      >
        <Typography variant="h4" fontWeight="bold" color={colors.greenAccent[500]}>
          AI Art Suggestions 🎨
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Get personalized art recommendations using AI
        </Typography>
        <Button variant="contained" sx={{ mt: 3 }}>
          Try AI Suggestion
        </Button>
      </Box>
  
    </>
  );
};

export default Home;
