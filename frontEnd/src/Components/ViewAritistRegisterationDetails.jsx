import React from "react";
import {
  Box,
  useTheme,
  Paper,
  Grid,
  Typography,
  Avatar,
  Chip,
  Button,
  Link,
  List,
  ListItem,
  Divider,
  ImageList,
  ImageListItem,
  Stack,
} from "@mui/material";
import {tokens} from '../Theme'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ViewAritistRegisterationDetails({
  artist = null,
  onBack = () => {},
  onApprove = (id) => console.log("Approve", id),
  onReject = (id) => console.log("Reject", id),
}) {
    const theme= useTheme()
    const colors =tokens(theme.palette.mode)

     const mockArtist = {
    _id: "64f2a1b2c3d4e5f678901234",
    name: "loading",
    email: "....@gmail.com",
    phoneNo: "+91-99999999",
    DOB: "1997-05-18T00:00:00.000Z",
    gender: "Female",
    address: "12 Green Lane, Near Art Park",
    state: "Kerala",
    town: "Kozhikode",
    pin: "673001",
    artPortfolioLinks: [
      "https://instagram.com/aaliya_art",
      "https://behance.net/aaliya",
    ],
    certificate: {
      filename: "certificate.pdf",
      path: "/uploads/certificates/certificate.pdf",
    },
    workImages: [
      { filename: "work1.jpg", path: "/uploads/workImages/work1.jpg" },
      { filename: "work2.jpg", path: "/uploads/workImages/work2.jpg" },
      { filename: "work3.jpg", path: "/uploads/workImages/work3.jpg" },
    ],
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  const data = artist ?? mockArtist;

  const formattedDate = (d) =>
    d ? new Date(d).toLocaleString("en-IN", { dateStyle: "medium" }) : "-";

    const statusColor = {
    pending: "warning",
    Approved: "success",
    Rejected: "error",
  }[data.status] || "default";
  return (
    <>
     <Box sx={{ p: { xs: 2, md: 4 }}}>
      <Paper sx={{ p: 2, maxWidth: 1100, mx: "auto", color:`${colors.blueAccent[400]}`, backgroundColor:`${colors.primary[400]}` }} elevation={3}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={() => onBack()}
              size="small"
              sx={{color:colors.grey[200]}}
            >
              Back
            </Button>
            <Typography sx={{color:colors.grey[200]}} variant="h6">Artist Registration Details</Typography>
            <Chip
              label={data.status}
              color={statusColor}
              sx={{ ml: 2, textTransform: "capitalize" }}
            />
          </Stack>

          <Stack direction="row" spacing={1}>
            <Button
              variant="contained"
              startIcon={<CheckCircleIcon />}
              color="success"
              onClick={() => onApprove(data._id)}
              disabled={data.status === "Approved"}
            >
              Approve
            </Button>

            <Button
              variant="outlined"
              startIcon={<CancelIcon />}
              color="error"
              onClick={() => onReject(data._id)}
              disabled={data.status === "Rejected"}
            >
              Reject
            </Button>
          </Stack>
        </Stack>

        <Divider sx={{ mb: 2 }} />

        <Grid container spacing={3}>
          {/* Left column: main info */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Avatar sx={{ width: 96, height: 96 }}>
                {data.name ? data.name[0].toUpperCase() : "unknown"}
              </Avatar>

              <Box>
                <Typography sx={{color:colors.greenAccent[300]}} variant="h5">{data.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Registered on: {formattedDate(data.createdAt)}
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  <strong>Email:</strong>{" "}
                  <Link href={`mailto:${data.email}`} sx={{color:colors.grey[300]}}>{data.email}</Link>
                </Typography>
                <Typography>
                  <strong>Phone:</strong>{" "}
                  <Link href={`tel:${data.phoneNo}`} sx={{color:colors.grey[300]}}>{data.phoneNo}</Link>
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1" sx={{color:colors.greenAccent[300],padding:0}}>
                Personal Info
              </Typography>

              <List dense>
                <ListItem>
                  <strong>DOB:&nbsp;</strong> {formattedDate(data.DOB)}
                </ListItem>
                <ListItem>
                  <strong>Gender:&nbsp;</strong> {data.gender || "-"}
                </ListItem>
                <ListItem>
                  <strong>Address:&nbsp;</strong> {data.address || "-"}
                </ListItem>
                <ListItem>
                  <strong>Town / State / PIN:&nbsp;</strong>{" "}
                  {data.town || "-"} / {data.state || "-"} / {data.pin || "-"}
                </ListItem>
              </List>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1"  sx={{color:colors.greenAccent[300],padding:0}} gutterBottom>
                Portfolio Links
              </Typography>
              <List>
                {Array.isArray(data.artPortfolioLinks) &&
                data.artPortfolioLinks.length ? (
                  data.artPortfolioLinks.map((url, idx) => (
                    <ListItem key={idx}>
                      <Link
                        sx={{color:colors.blueAccent[300]}}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                      >
                        {url}
                      </Link>
                    </ListItem>
                  ))
                ) : (
                  <ListItem >No links provided</ListItem>
                )}
              </List>
            </Box>
          </Grid>

          {/* Right column: certificate and images */}
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1"  sx={{color:colors.greenAccent[300]}} gutterBottom>
              Certificate
            </Typography>

            {data.certificate && data.certificate.path ? (
              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  backgroundColor:colors.blueAccent[700],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography>{data.certificate.filename}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Uploaded
                  </Typography>
                </Box>

                {/* certificate download / view */}
                <Box>
                  <Button
                    component="a"
                    href={`http://localhost:5000/${data.certificate.path}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{ mr: 1 ,color:colors.grey[100]}}
                  >
                    View
                  </Button>
                  <Button
                    component="a"
                    href={`http://localhost:5000/download/${data.certificate.path}`}
                    download
                    size="small"
                    variant="outlined"
                    sx={{color:colors.grey[100]}}
                  >
                    Download
                  </Button>
                </Box>
              </Paper>
            ) : (
              <Typography color="text.secondary">No certificate</Typography>
            )}

            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1"  sx={{color:colors.greenAccent[300]}} gutterBottom>
                Work Images
              </Typography>

              {Array.isArray(data.workImages) && data.workImages.length ? (
                <ImageList cols={3} gap={8}>
                  {data.workImages.map((img, i) => (
                    <ImageListItem key={i}>
                        <a href={`http://localhost:5000/${img.path}`} target="_blank">
                      <img
                        src={`http://localhost:5000/${img.path}`}
                        alt={img.filename}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: 140,
                          objectFit: "cover",
                          borderRadius: 6,
                        }}
                      /></a>
                      <Box sx={{ mt: 0.5, px: 0.5 }}>
                        <Typography variant="caption" display="block" noWrap>
                          {img.filename}
                        </Typography>
                      </Box>
                    </ImageListItem>
                  ))}
                </ImageList>
              ) : (
                <Typography color="text.secondary">No work images</Typography>
              )}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
          <Button onClick={() => onBack()} color="inherit">
            Close
          </Button>

          <Button
            variant="contained"
            color="success"
            onClick={() => onApprove(data._id)}
            disabled={data.status === "Approved"}
          >
            Approve
          </Button>

          <Button
            variant="outlined"
            color="error"
            onClick={() => onReject(data._id)}
            disabled={data.status === "Rejected"}
          >
            Reject
          </Button>
        </Box>
      </Paper>
    </Box>
    </>
  )
}

export default ViewAritistRegisterationDetails
