import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
  Stack,
  Avatar
} from "@mui/material";
import { useNavigate,useLocation } from "react-router-dom";

const CheckoutPage = () => {
    const Location =useLocation()
    const {cartItems}= Location.state||{}
    console.log(cartItems);
    
    const userProfile = {
  name: "Muhammed Niyad",
  address: {
    street: "Mavoor Road",
    city: "Kozhikode",
    state: "Kerala",
    pincode: "673001"
  }
};

// const cartItems = [
//   {
//     artworkId: "123",
//     title: "Arabic Calligraphy",
//     image: "/uploads/art1.jpg",
//     price: 1200,
//     quantity: 1
//   }
// ];
const totalPrice=2000;
  const navigate = useNavigate();

  const hasAddress =
    userProfile?.address &&
    userProfile.address.street &&
    userProfile.address.city;

  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", p: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        Checkout
      </Typography>

      <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
        {/* LEFT SIDE */}
        <Box flex={2}>
          {/* Delivery Address */}
          <Card sx={{ mb: 3, borderRadius: 3 }}>
            <CardContent>
              <Typography fontWeight={600} mb={1}>
                Delivery Address
              </Typography>

              {hasAddress ? (
                <>
                  <Typography variant="body2">
                    {userProfile.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {userProfile.address.street}, {userProfile.address.city}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {userProfile.address.state} - {userProfile.address.pincode}
                  </Typography>

                  <Button
                    size="small"
                    sx={{ mt: 1 }}
                    onClick={() => navigate("/profile")}
                  >
                    Change Address
                  </Button>
                </>
              ) : (
                <>
                  <Typography color="error" variant="body2">
                    Delivery address not found
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ mt: 1 }}
                    onClick={() => navigate("/profile")}
                  >
                    Complete Your Profile
                  </Button>
                </>
              )}
            </CardContent>
          </Card>

          {/* Order Items */}
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography fontWeight={600} mb={2}>
                Order Summary
              </Typography>

              {cartItems?.map((item) => (
                <Box key={item.artworkId} mb={2}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                      variant="rounded"
                      src={item.image}
                      sx={{ width: 64, height: 64 }}
                    />
                    <Box flex={1}>
                      <Typography fontWeight={500}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Qty: {item.quantity}
                      </Typography>
                    </Box>
                    <Typography fontWeight={600}>
                      ₹ {item.price * item.quantity}
                    </Typography>
                  </Stack>
                  <Divider sx={{ mt: 2 }} />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Box>

        {/* RIGHT SIDE */}
        <Box flex={1}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography fontWeight={600} mb={2}>
                Price Details
              </Typography>

              <Stack spacing={1}>
                <PriceRow label="Subtotal" value={totalPrice} />
                <PriceRow label="Delivery" value="FREE" />
                <Divider />
                <PriceRow
                  label="Total Amount"
                  value={`₹ ${totalPrice}`}
                  bold
                />
              </Stack>

              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{ mt: 3, borderRadius: 2 }}
                disabled={!hasAddress}
                onClick={() => navigate("/payment")}
              >
                Proceed to Payment
              </Button>

              {!hasAddress && (
                <Typography
                  variant="caption"
                  color="error"
                  display="block"
                  mt={1}
                >
                  Add delivery address to continue
                </Typography>
              )}
            </CardContent>
          </Card>
        </Box>
      </Stack>
    </Box>
  );
};

export default CheckoutPage;

/* Helper component */
const PriceRow = ({ label, value, bold }) => (
  <Stack direction="row" justifyContent="space-between">
    <Typography fontWeight={bold ? 600 : 400}>
      {label}
    </Typography>
    <Typography fontWeight={bold ? 700 : 400}>
      {value}
    </Typography>
  </Stack>
);
