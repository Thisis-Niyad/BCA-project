import React from 'react'
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

const cartItems = [
  {
    id: 1,
    title: "Arabic Calligraphy Art",
    artist: "Afsal Rahman",
    price: 1500,
    quantity: 1,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    title: "Modern Islamic Calligraphy",
    artist: "Niyad Studio",
    price: 2200,
    quantity: 2,
    image: "https://via.placeholder.com/150"
  }
];

function Carts() {
      const theme= useTheme()
      const colors =tokens(theme.palette.mode)
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Cart Lists" subtitle="Review, update and procced with selected Items" /> 
        </Box>
        <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold" color={colors.blueAccent[500]} mb={3}>
        My Cart
      </Typography>

      <Grid container spacing={3} justifyContent="space-around">
        {/* Cart Items */}
        <Grid item xs={12} md={8}>
          {cartItems.map((item) => (
            <Card key={item.id} sx={{ mb: 2 ,backgroundColor:colors.primary[400] }}>
              <Grid container>
                <Grid item xs={12} sm={4}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt={item.title}
                  />
                </Grid>

                <Grid item xs={12} sm={8}>
                  <CardContent>
                    <Typography variant="h6" color={colors.greenAccent[500]}>
                      {item.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      Artist: {item.artist}
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
                      <IconButton size="small">
                        <RemoveIcon />
                      </IconButton>

                      <Typography>{item.quantity}</Typography>

                      <IconButton size="small">
                        <AddIcon />
                      </IconButton>

                      <Box flexGrow={1} />

                      <IconButton color="error">
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
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








