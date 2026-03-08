import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
  Stack,
  Avatar,
  useTheme
} from "@mui/material";
import {tokens} from '../../Theme'
import { useNavigate,useLocation } from "react-router-dom";
import Header from '../../Components/Header'
import Api from '../../Api'
import {useParams} from 'react-router-dom'

const CheckoutPage = () => {
  const theme= useTheme()
      const colors =tokens(theme.palette.mode)
    const Location =useLocation()
    const {cart,userProfile}= Location.state||{}
const { id } = useParams();
  const navigate = useNavigate();

  const hasAddress =
    userProfile?.address &&
    userProfile?.phone &&
    userProfile.address.street &&
    userProfile.address.city;

    const onCheckOut=async () => {
      try {
        console.log(cart);
         const response= await Api.post(`/user/${id}/checkout`,{cart}) 
         
         if (response.status===201) {
          console.log(response.data.id)
         navigate(`../payment/${response.data.id}`)
         }
      } catch (error) {
        console.log(error);
        
      }
    }
  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", p: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Header title="CheckOut" subtitle="_____________________________" /> 
              </Box>

      <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
        {/* LEFT SIDE */}
        <Box flex={2}>
          {/* Delivery Address */}
          <Card sx={{ mb: 3, borderRadius: 3,backgroundColor:colors.primary[400] }}>
            <CardContent>
              <Typography fontWeight={600} mb={1}>
                Delivery Address
              </Typography>

              {hasAddress ? (
                <>
                  <Typography variant="body2">
                    {userProfile.name}
                  </Typography>
                  <Typography variant="body3">
                    Phone No:{userProfile.phone}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {userProfile.address.street}, {userProfile.address.city}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {userProfile.address.state} - {userProfile.address.pincode}
                  </Typography>

                  <Button
                    size="small"
                    sx={{ mt: 1 ,color:colors.greenAccent[400]}}
                    onClick={() => navigate("../profile")}
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
                    onClick={() => navigate("../profile")}
                  >
                    Complete Your Profile
                  </Button>
                </>
              )}
            </CardContent>
          </Card>

          {/* Order Items */}
          <Card sx={{ borderRadius: 3 ,backgroundColor:colors.primary[400]}}>
            <CardContent>
              <Typography fontWeight={600} mb={2}>
                Order Summary
              </Typography>

              {cart?.items.map((item) => (
                <Box key={item.artworkId} mb={2}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                      variant="rounded"
                      src={`http://localhost:5000/${item.image}`}
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
          <Card sx={{ borderRadius: 3 ,backgroundColor:colors.primary[400]}}>
            <CardContent>
              <Typography fontWeight={600} mb={2}>
                Price Details
              </Typography>

              <Stack spacing={1}>
                <PriceRow label="Subtotal" value={cart?.totalPrice} />
                <PriceRow label="Delivery" value="20" />
                <Divider />
                <PriceRow
                  label="Total Amount"
                  value={`₹ ${cart?.totalPrice +20}`}
                  bold
                />
              </Stack>

              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{ mt: 3, borderRadius: 2 }}
                disabled={!hasAddress}
                onClick={onCheckOut}
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
