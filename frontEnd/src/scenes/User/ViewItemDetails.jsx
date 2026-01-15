import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  useTheme,
  Divider,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BoltIcon from "@mui/icons-material/Bolt";
import {tokens} from '../../Theme'


const VeiwItemDetails = ({ work }) => {
    const theme= useTheme()
    const colors =tokens(theme.palette.mode)
  // temporary mock data (replace with API data)
  const data = work || {
    title: "Arabic Calligraphy – Bismillah",
    description:
      "Hand-crafted Arabic calligraphy artwork created using premium ink on archival paper. Suitable for wall framing and gifting.",
    createdAt: "2025-01-10",
    workRating: 4.6,
    ratingCount: 124,
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013",
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* IMAGE SECTION */}
        <Grid item size={12}>
          <Card sx={{width:"100%", borderRadius: 3 }}>
            <CardMedia
              component="img"
              image={data.image}
              alt={data.title}
              sx={{
                
                height: { xs: 300, md: 450 },
                objectFit: "cover",
              }}
            />
          </Card>
        </Grid>

        {/* DETAILS SECTION */}
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            {/* TITLE */}
            <Typography variant="h4" fontWeight={600} color={colors.greenAccent[500]}>
              {data.title}
            </Typography>

            {/* RATING */}
            <Stack direction="row" alignItems="center" spacing={1}>
              <Rating
                value={data.workRating}
                precision={0.1}
                readOnly
              />
              <Typography variant="body2" color="text.secondary">
                ({data.ratingCount} ratings)
              </Typography>
            </Stack>

            {/* PRICE */}
            <Typography variant="h4" color="success.main" fontWeight={700}>
              ₹ {data.price}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Created on:{" "}
              {new Date(data.createdAt).toLocaleDateString()}
            </Typography>

            <Divider />

            {/* DESCRIPTION */}
            <Typography variant="h6" fontWeight={600} color={colors.grey[300]}>
              Description
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {data.description}
            </Typography>

            <Divider />

            {/* ACTION BUTTONS */}
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color="success"
                size="large"
                startIcon={<BoltIcon />}
                sx={{ px: 4 }}
              >
                Buy Now
              </Button>

              <Button
                variant="outlined"
                color={colors.grey[400]}
                size="large"
                startIcon={<ShoppingCartIcon />}
              >
                Add to Cart
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default VeiwItemDetails;
