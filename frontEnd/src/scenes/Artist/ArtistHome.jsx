 import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Chip,
  Stack,
  Divider,
  CardMedia,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import UploadIcon from "@mui/icons-material/Upload";
import EditIcon from "@mui/icons-material/Edit";

export default function ArtistHome() {
  return (
    <>
    <Box sx={{ p: 3 }}>
      {/* ================= HEADER ================= */}
      <Card sx={{ mb: 3, p: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar
              src="https://i.pravatar.cc/150"
              sx={{ width: 90, height: 90 }}
            />
          </Grid>

          <Grid item xs>
            <Typography variant="h5" fontWeight="bold">
              Muhammed Niyad
            </Typography>
            <Typography color="text.secondary">
              Calligraphy Artist • Kozhikode
            </Typography>

            <Stack direction="row" spacing={1} mt={1}>
              <Chip
                icon={<StarIcon />}
                label="4.8 Rating"
                color="success"
                size="small"
              />
              <Chip label="Verified Artist" color="primary" size="small" />
            </Stack>
          </Grid>

          <Grid item>
            <Stack spacing={1}>
              <Button
                variant="contained"
                startIcon={<UploadIcon />}
              >
                Upload Work
              </Button>
              <Button
                variant="outlined"
                startIcon={<EditIcon />}
              >
                Edit Profile
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Card>

      {/* ================= STATS ================= */}
      <Grid container spacing={2} mb={3}>
        {[
          { title: "Total Works", value: 24 },
          { title: "Total Orders", value: 18 },
          { title: "Total Earnings", value: "₹42,000" },
          { title: "Avg Rating", value: "4.8 ★" },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Typography color="text.secondary">
                  {item.title}
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* ================= RECENT WORKS ================= */}
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Recent Works
      </Typography>

      <Grid container spacing={2}>
        {[1, 2, 3, 4].map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="200"
                image="https://picsum.photos/400/300"
                alt="Artwork"
              />

              <CardContent>
                <Typography fontWeight="bold">
                  Arabic Calligraphy
                </Typography>

                <Typography color="text.secondary" fontSize={14}>
                  Custom handmade artwork
                </Typography>

                <Divider sx={{ my: 1 }} />

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography fontWeight="bold">
                    ₹2,500
                  </Typography>

                  <Chip
                    size="small"
                    label="Available"
                    color="success"
                  />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

    </>
  )
}
