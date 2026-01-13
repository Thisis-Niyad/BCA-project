import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Rating,
  Button,
  useTheme,
  Divider,
  Stack,
  Chip
} from "@mui/material";
import {tokens} from '../Theme'
import {Link} from 'react-router-dom'

const ArtistworkCard = ({ cardData }) => {
    const theme= useTheme()
    const colors =tokens(theme.palette.mode)
    
  return (
    <Box
     display="flex"
     flexWrap= "wrap"
    alignContent= "center"
    justifyContent= "center"
    >
        {cardData  && cardData.length > 0 ? 
        cardData.map((work)=>{
        return(
              <Card 
                       key={work._id}
            sx={{
        maxWidth: 400,
        borderRadius: 3,
        boxShadow: 4,
        height: "420px" ,
        width:"350px",
        m:"20px",
        transition: "0.3s",
        backgroundColor:colors.primary[400],
        "&:hover": {
          cursor:"pointer",
          boxShadow: 8,
          transform: "translateY(-4px)",
        },
      }}
      >
        <CardActionArea component={Link} to={`artwork/${work._id}`}>
                          <CardMedia
                            component="img"
                            style={{height:"300px"}}
                            
                            image={`http://localhost:5000/${work.imagePath}`}
                            alt="Artwork"
                          />
            
                          <CardContent>
                            <Typography fontWeight="bold">
                              {work.title}
                            </Typography>
            
                            <Typography color="text.secondary" fontSize={14}>
                              {work? work.description:"Custom handmade artwork"}
                            </Typography>
            
                            <Divider sx={{ my: 1 }} />
            
                            <Stack
                              direction="row"
                              justifyContent="space-between"
                              alignItems="center"
                            >
                              <Typography fontWeight="bold">
                                ₹{work.price}
                              </Typography>
                               <Box display="flex" alignItems="center" gap={1}>
                                <Rating
                                  value={work.rating}
                                  precision={0.5}
                                  readOnly
                                  size="small"
                                />
                                <Typography variant="body2" color="text.secondary">
                                  ({work.rating})
                                </Typography>
                              </Box>
                              <Chip
                                size="small"
                                label="Buy"
                                color="success"
                              />
                            </Stack>
                          </CardContent>
                          </CardActionArea>
                        </Card>
        )
        })
        :
    "no works"}
    </Box>
  );
};

export default ArtistworkCard;
