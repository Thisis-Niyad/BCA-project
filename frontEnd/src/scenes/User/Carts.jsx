import React,{useEffect,useState} from 'react'
import Header from '../../Components/Header'
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Button,
  Divider,
  useTheme,
  Stack
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {tokens} from '../../Theme';
import Api from '../../Api';
import {useParams,Link} from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';

// const cartItems = [
//   {
//     id: 1,
//     title: "Arabic Calligraphy Art",
//     artist: "Afsal Rahman",
//     price: 1500,
//     quantity: 1,
//     image: "https://via.placeholder.com/150"
//   },
//   {
//     id: 2,
//     title: "Modern Islamic Calligraphy",
//     artist: "Niyad Studio",
//     price: 2200,
//     quantity: 2,
//     image: "https://via.placeholder.com/150"
//   }
// ];


function Carts() {
      const theme= useTheme()
      const [cartItems,setCartItem]=useState()
          const { id } = useParams();
      const colors =tokens(theme.palette.mode)
  const subtotal = cartItems ?cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  ):0;
const incrementQty = (id) => {
  setCartItem(prevItems =>
    prevItems.map(item =>
      item.artworkId === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};
const decrementQty = (id) => {
  setCartItem(prevItems =>
    prevItems.map(item =>
      item.artworkId === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  );
};


    useEffect(()=>{
    const fetchCarts=async()=>{
      try {
        const response=await Api.get(`/user/${id}/carts`)
          setCartItem(response.data.items);  
      } catch (err) {
        console.log(err);
      }
  }
fetchCarts()},[id])
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Cart Lists" subtitle="Review, update and procced with selected Items" /> 
        </Box>
        <Box sx={{ p: 3 }}>


      <Grid container spacing={3} justifyContent="space-around">
        {/* Cart Items */}
        <Grid item xs={12} md={8}>
          {cartItems?.map((item) => (
            <Card key={item.id} sx={{ mb: 2 ,backgroundColor:colors.primary[400], }}>
              <Grid container>
                <Grid item xs={12} sm={4}>
                  <CardMedia
                    component="img"
                    style={{width:"350px"}}
                    image={`http://localhost:5000/${item.image}`}
                    alt={item.title}
                  />
                </Grid>

                <Grid item xs={12} sm={8}>
                  <CardContent style={{display: "flex",
    flexDirection: "column",height: "100%",justifyContent: "center"}}>
                    <Typography variant="h6" color={colors.greenAccent[500]}>
                      {item.title}
                    </Typography>

                    <Typography variant="subtitle1" fontWeight="bold" color={colors.blueAccent[500]} mt={1}>
                      ₹ {item.price}
                    </Typography>

                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1}
                      mt={2}
                    >
                      <IconButton size="small" onClick={()=>{decrementQty(item.artworkId)}}>
                        <RemoveIcon />
                      </IconButton>

                      <Typography>{item.quantity}</Typography>

                      <IconButton size="small" onClick={()=>{incrementQty(item.artworkId)}}>
                        <AddIcon />
                      </IconButton>

                      <Box flexGrow={1} />

                      <IconButton color="error">
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                    <Button
                      variant="contained"
                      component={Link}
                      to={`../artwork/${item.artworkId}`}
                      color="success"
                      size="small"
                      startIcon={< VisibilityIcon/>}
                    >
                      View
                    </Button>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          ))}
        </Grid>

        {/* Cart Summary */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2,backgroundColor:colors.primary[400] }}>
            <Typography variant="h6" fontWeight="bold" color={colors.greenAccent[500]}>
              Order Summary
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Stack direction="row" justifyContent="space-between" mb={1}>
              <Typography>Subtotal</Typography>
              <Typography>₹ {subtotal}</Typography>
            </Stack>

            <Stack direction="row" justifyContent="space-between" mb={1}>
              <Typography>Delivery</Typography>
              <Typography>Free</Typography>
            </Stack>

            <Divider sx={{ my: 2 }} />

            <Stack direction="row" justifyContent="space-between" mb={2}>
              <Typography fontWeight="bold">Total</Typography>
              <Typography fontWeight="bold">
                ₹ {subtotal}
              </Typography>
            </Stack>

            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 1 }}
            >
              Proceed to Checkout
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
    </Box>
  )
}

export default Carts








