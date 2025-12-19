import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Button,
  Rating,
  Divider,
  Chip,
  useTheme,
  Stack
} from "@mui/material";
import {tokens} from '../Theme'
import unknownImg from "../assets/unknown.jpg";
import MessageIcon from "@mui/icons-material/Message";
import StarIcon from "@mui/icons-material/Star";
import ArtistworkCard from './ArtistworkCard'

// const artist = {
//   name: "Ameen Calligrapher",
//   profileImg: "https://via.placeholder.com/150",
//   bio: "Professional Arabic & modern calligraphy artist with 6+ years experience.",
//   location: "Kerala, India",
//   rating: 4.5,
//   totalReviews: 128,
//   skills: ["Arabic", "Modern", "Islamic"],
// };

// const works = [
//   {
//     id: 1,
//     title: "Golden Ayah",
//     price: "₹4,500",
//     image: "https://via.placeholder.com/300",
//   },
//   {
//     id: 2,
//     title: "Modern Typography",
//     price: "₹3,000",
//     image: "https://via.placeholder.com/300",
//   },
//   {
//     id: 3,
//     title: "Classic Script",
//     price: "₹5,200",
//     image: "https://via.placeholder.com/300",
//   },
// ];

export default function ArtistProfilePage({artist ,works}) {
     const theme= useTheme()
          const colors =tokens(theme.palette.mode)
  return (
    <Box p={3}>
      {/* ===== PROFILE HEADER ===== */}
      <Card sx={{ mb: 4, p: 4,backgroundColor:colors.primary[400] }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item>
            <Avatar
              src={artist?.profileInfo.profileImg==""||artist?.profileInfo.profileImg==null? unknownImg:`http://localhost:5000/${artist.profileInfo.profileImg}`}
              sx={{ width: 120, height: 120 }}
            />
          </Grid>

          <Grid item xs>
            <Typography variant="h5" fontWeight="bold" color={colors.greenAccent[200]}>
              {artist?.name}
            </Typography>

            <Typography color="text.secondary">
              {artist?.profileInfo.state},India
            </Typography>

            <Typography sx={{ mt: 1 }}>
              {artist?.Bio}
            </Typography>

            {/* <Stack direction="row" spacing={1} mt={1}>
              {artist.skills.map(skill => (
                <Chip key={skill} label={skill} size="small" />
              ))}
            </Stack> */}
          </Grid>

          <Grid item>
            <Stack spacing={1} alignItems="center">
              <Rating
                value={artist?.artistRating}
                precision={0.5}
                readOnly
              />
              <Typography variant="body2">
                {artist?.rating} ({artist?.totalReviews} reviews)
              </Typography>

              <Button
                variant="contained"
                startIcon={<MessageIcon />}
              >
                Message Artist
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Card>

      {/* ===== USER RATE ARTIST ===== */}
      <Card sx={{ mb: 4, p: 3,backgroundColor:colors.primary[400] }}>
        <Typography variant="h6" gutterBottom color={colors.grey[200]}>
          Rate this Artist
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center">
          <Rating
            size="large"
            precision={1}
            icon={<StarIcon fontSize="inherit" />}
            emptyIcon={<StarIcon fontSize="inherit" />}
          />
          <Button variant="outlined" color={colors.blueAccent[400]}>Submit Rating</Button>
        </Stack>
      </Card>

      {/* ===== ARTIST WORKS ===== */}
      <Typography variant="h6" mb={2} color={colors.grey[200]} >
        Artist Works
      </Typography>

      <Box>
        <ArtistworkCard cardData={works}/>
      </Box>
    </Box>
  );
}
