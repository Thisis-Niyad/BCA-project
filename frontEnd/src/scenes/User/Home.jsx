import React,{ useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import SearchBar from "../../Components/SearchBar";
import ArtistworkCard from "../../components/ArtistworkCard";
import CartCarousel from "../../Components/CartCarousel";

const artworksData = [
  {
    id: 1,
    title: "Digital Sunset",
    artist: "Niyad",
    price: 2500,
    image: "https://source.unsplash.com/400x300/?art",
  },
  {
    id: 2,
    title: "Abstract Flow",
    artist: "Alex",
    price: 1800,
    image: "https://source.unsplash.com/400x300/?painting",
  },
  {
    id: 1,
    title: "Digital Sunset",
    artist: "Niyad",
    price: 2500,
    image: "https://source.unsplash.com/400x300/?art",
  },
  {
    id: 2,
    title: "Abstract Flow",
    artist: "Alex",
    price: 1800,
    image: "https://source.unsplash.com/400x300/?painting",
  },
  {
    id: 1,
    title: "Digital Sunset",
    artist: "Niyad",
    price: 2500,
    image: "https://source.unsplash.com/400x300/?art",
  },
  {
    id: 2,
    title: "Abstract Flow",
    artist: "Alex",
    price: 1800,
    image: "https://source.unsplash.com/400x300/?painting",
  },
  {
    id: 1,
    title: "Digital Sunset",
    artist: "Niyad",
    price: 2500,
    image: "https://source.unsplash.com/400x300/?art",
  },
  {
    id: 2,
    title: "Abstract Flow",
    artist: "Alex",
    price: 1800,
    image: "https://source.unsplash.com/400x300/?painting",
  },
  {
    id: 1,
    title: "Digital Sunset",
    artist: "Niyad",
    price: 2500,
    image: "https://source.unsplash.com/400x300/?art",
  },
  {
    id: 2,
    title: "Abstract Flow",
    artist: "Alex",
    price: 1800,
    image: "https://source.unsplash.com/400x300/?painting",
  },
  {
    id: 1,
    title: "Digital Sunset",
    artist: "Niyad",
    price: 2500,
    image: "https://source.unsplash.com/400x300/?art",
  },
  {
    id: 2,
    title: "Abstract Flow",
    artist: "Alex",
    price: 1800,
    image: "https://source.unsplash.com/400x300/?painting",
  },
  {
    id: 1,
    title: "Digital Sunset",
    artist: "Niyad",
    price: 2500,
    image: "https://source.unsplash.com/400x300/?art",
  },
  {
    id: 2,
    title: "Abstract Flow",
    artist: "Alex",
    price: 1800,
    image: "https://source.unsplash.com/400x300/?painting",
  },
  {
    id: 1,
    title: "Digital Sunset",
    artist: "Niyad",
    price: 2500,
    image: "https://source.unsplash.com/400x300/?art",
  },
  {
    id: 2,
    title: "Abstract Flow",
    artist: "Alex",
    price: 1800,
    image: "https://source.unsplash.com/400x300/?painting",
  },
  {
    id: 1,
    title: "Digital Sunset",
    artist: "Niyad",
    price: 2500,
    image: "https://source.unsplash.com/400x300/?art",
  },
  {
    id: 2,
    title: "Abstract Flow",
    artist: "Alex",
    price: 1800,
    image: "https://source.unsplash.com/400x300/?painting",
  },
  {
    id: 1,
    title: "Digital Sunset",
    artist: "Niyad",
    price: 2500,
    image: "https://source.unsplash.com/400x300/?art",
  },
  {
    id: 2,
    title: "Abstract Flow",
    artist: "Alex",
    price: 1800,
    image: "https://source.unsplash.com/400x300/?painting",
  },
  {
    id: 1,
    title: "Digital Sunset",
    artist: "Niyad",
    price: 2500,
    image: "https://source.unsplash.com/400x300/?art",
  },
  {
    id: 2,
    title: "Abstract Flow",
    artist: "Alex",
    price: 1800,
    image: "https://source.unsplash.com/400x300/?painting",
  },
  {
    id: 1,
    title: "Digital Sunset",
    artist: "Niyad",
    price: 2500,
    image: "https://source.unsplash.com/400x300/?art",
  },
  {
    id: 2,
    title: "Abstract Flow",
    artist: "Alex",
    price: 1800,
    image: "https://source.unsplash.com/400x300/?painting",
  },
  {
    id: 1,
    title: "Digital Sunset",
    artist: "Niyad",
    price: 2500,
    image: "https://source.unsplash.com/400x300/?art",
  },
  {
    id: 2,
    title: "Abstract Flow",
    artist: "Alex",
    price: 1800,
    image: "https://source.unsplash.com/400x300/?painting",
  },
];

const Home = () => {
  const [search, setSearch] = useState("");

  const filteredArtworks = artworksData.filter((art) =>
    art.title.toLowerCase().includes(search.toLowerCase()) ||
    art.artist.toLowerCase().includes(search.toLowerCase())
  );

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
      <Box>
        <CartCarousel cartItems={filteredArtworks} />
      </Box>
    {/* </Container> */}
    
    </Box>
      <Box
        sx={{
          p: 5,
          textAlign: "center",
          bgcolor: "#020617",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
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
