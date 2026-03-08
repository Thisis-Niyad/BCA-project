import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stack,
  Divider,
  useTheme,
  InputAdornment
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import {tokens} from '../../Theme'
import Api from '../../Api'
import { paymentSchema } from '../../schemas/validation';
import AlertPopup from '../../Components/AlertPopup';
import {useNavigate} from 'react-router-dom'
import { Formik } from 'formik'


const PaymentPage = () => {
    const { id ,orderId} = useParams();
    const navigate=useNavigate();
  const [totalAmount,setAmount]=useState();
   const [alert, setAlert] = useState({
      show: false,
      msg: "",
      severity: "error",
    });
    const theme= useTheme()
        const colors =tokens(theme.palette.mode)
            const initialValues={
              cardno:"",
              cardHolder:"",
              expiry:"",
              cvv:""
            }
       const handleSubmit = async (values) => {
    try {
      
      const response= await Api.post(`user/${id}/paymentTransaction/${orderId}`,values)
      if (response.status===201) {
         setAlert({
        show: true,
        msg:"Payment Success full",
        severity: "success",
      });
      setTimeout(()=>{ navigate(`../orders`)},3000)
      }
    } catch (err) {
     console.log(err);
 
    }
  }
        useEffect(() => {
          
          const setTotal = async () => {
            try {
              const response = await Api.get(`/user/${id}/payment/${orderId}`);
              setAmount(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  setTotal();

}, [id, orderId]);

  return (
    <Box sx={{ minHeight: "100vh", py: 5 }}>
      <Box sx={{ maxWidth: 420, mx: "auto" }}>
        {/* Header */}
        <Typography
          variant="h5"
          color={colors.greenAccent[500]}
          style={{fontSize:"32px"}}
          fontWeight={700}
          textAlign="center"
          mb={1}
        >
          Secure Payment
        </Typography>

        <Typography
          variant="body2"
          color={colors.grey[300]}
          textAlign="center"
          mb={3}
        >
          Complete your purchase on PixelPact
        </Typography>

        {/* Payment Card */}
        <Card sx={{ borderRadius: 4, boxShadow: 4, backgroundColor:colors.primary[400],
          "& .MuiInputBase-input": {
                padding: "26px 12px 20px 12px !important",
            }
         }}>
          <CardContent>
            {/* Card Preview */}
            <Box
              sx={{
                background: colors.blueAccent[900],
                backgroundColor: "#1f2937",
                color: colors.grey[200],
                 boxShadow: 4,
                borderRadius: 3,
                p: 4.3,
                mb: 3
              }}
            >
              <Stack direction="row" justifyContent="space-between">
                <CreditCardIcon />
                <Typography variant="body2">PixelPact</Typography>
              </Stack>

              <Typography
                sx={{ color:colors.grey[200],letterSpacing: 2, mt: 3 }}
                variant="h6"
              >
                •••• •••• •••• 1234
              </Typography>

              <Stack
                direction="row"
                justifyContent="space-between"
                mt={2}
              >
                <Typography variant="caption">
                  CARD HOLDER
                </Typography>
                <Typography variant="caption">
                  EXP
                </Typography>
              </Stack>
            </Box>
<Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={paymentSchema}
            validateOnChange={false}
            validateOnBlur={false}
          >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit})=>(
            <form onSubmit={handleSubmit}>
            {/* Card Form */}
            <Stack spacing={2}>
              <TextField
                label="Card Number"
                placeholder="1234 5678 9012 3456"
                fullWidth
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cardno}
                error={!!touched.cardno && !!errors.cardno}
                helperText={touched.cardno && errors.cardno}
                name="cardno"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CreditCardIcon />
                    </InputAdornment>
                  )
                }}
              />

              <TextField
                label="Card Holder Name"
                name="cardHolder"
                onBlur={handleBlur}
                error={!!touched.cardHolder && !!errors.cardHolder}
                helperText={touched.cardHolder && errors.cardHolder}
                onChange={handleChange}
                value={values.cardHolder}
                placeholder="Muhammed Niyad"
                fullWidth
              />

              <Stack direction="row" spacing={2}>
                <TextField
                  label="Expiry"
                  name="expiry"
                  onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.expiry && !!errors.expiry}
                helperText={touched.expiry && errors.expiry}
                  value={values.expiry}
                  placeholder="MM/YY"
                  fullWidth
                />
                <TextField
                  label="CVV"
                  name="cvv"
                  error={!!touched.cvv && !!errors.cvv}
                helperText={touched.cvv && errors.cvv}
                  value={values.cvv}
                  placeholder="123"
                  type="password"
                  onBlur={handleBlur}
                onChange={handleChange}
                  fullWidth
                />
              </Stack>
            </Stack>

            <Divider sx={{ my: 3 }} />
 
            {/* Total */}
            <Stack
              direction="row"
              justifyContent="space-between"
              mb={2}
            >
              <Typography fontWeight={600}>
                Total Amount
              </Typography>
              <Typography fontWeight={700}>
                ₹ {totalAmount}
              </Typography>
            </Stack>

            {/* Pay Button */}
            <Button
              variant="contained"
              type="submit"
              size="large"
              fullWidth
              sx={{
                borderRadius: 2,
                py: 1.2,
                fontWeight: 600
              }}
            >
              Pay ₹ {totalAmount}
            </Button>
                      </form>
           )}
</Formik>
            {/* Security Note */}
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              mt={2}
            >
              <LockIcon fontSize="small" color="success" />
              <Typography variant="caption" color="text.secondary">
                100% Secure • Encrypted Payment
              </Typography>
            </Stack>
          </CardContent>
        </Card>
            <AlertPopup Alertshow={alert.show} msg={alert.msg} severity={alert.severity} setAlert={setAlert}/>
        
      </Box>
    </Box>
  );
};

export default PaymentPage;
