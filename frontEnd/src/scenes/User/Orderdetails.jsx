import React, { useEffect, useState } from "react";
import Header from '../../Components/Header'
import { Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Divider,
   useTheme,
  LinearProgress} from '@mui/material'
  import Api from '../../Api'
  import {useParams} from 'react-router-dom'
  import {tokens} from '../../Theme'

function Orderdetails() {
  const { id } = useParams();
   const theme= useTheme()
            const colors =tokens(theme.palette.mode)
    const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await Api.get(`/user/${id}/orders`);
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };

    getOrders();
  }, [id]);

  
  if (loading) return( <Box ><LinearProgress color="inherit"/></Box>)
  return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Order Details" subtitle="View, Track, and manage your order information " /> 
        </Box>
        <Box p={3}>

      {orders.map((order) => (
        <Card key={order._id} sx={{ mb: 3,backgroundColor:colors.primary[400], }}>
          <CardContent>

            <Grid container spacing={2}>

              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h6" sx={{color:colors.grey[200]}}>
                  Order Number: {order.orderNumber}
                </Typography>
                <Typography>
                  Amount: ${order.amount}
                </Typography>
                <Typography>
                  Created: {new Date(order.createdAt).toLocaleString()}
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Chip
                  label={`Payment: ${order.payment.status}`}
                  color={
                    order.payment.status === "SUCCESS"
                      ? "success"
                      : order.payment.status === "FAILED"
                      ? "error"
                      : "warning"
                  }
                  sx={{ mr: 1 }}
                />

                <Chip
                  label={`Order: ${order.orderStatus}`}
                  color="primary"
                  sx={{ mr: 1 }}
                />

                <Chip
                  label={`Delivery: ${order.deliveryStatus}`}
                  color="info"
                />
              </Grid>

            </Grid>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle1" sx={{color:colors.grey[200]}}>Items</Typography>

            {order.items.map((item, index) => (
              <Typography key={index}>
                • {item}
              </Typography>
            ))}

            {order.notes && (
              <>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2">
                  Notes: {order.notes}
                </Typography>
              </>
            )}

            {order.orderStatus === "CANCELLED" && (
              <Typography color="error">
                Cancel Reason: {order.cancelledReason}
              </Typography>
            )}

          </CardContent>
        </Card>
      ))}
    </Box>
    </Box>
  )
}

export default Orderdetails
