import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Rating,
  Button,
  useTheme
} from "@mui/material";
import {tokens} from '../Theme'

const ArtistworkCard = ({ cardData }) => {
    const theme= useTheme()
    const colors =tokens(theme.palette.mode)
    console.log(cardData);
    
  return (
    <Box
     display="flex"
     flexWrap= "wrap"
    alignContent= "center"
    justifyContent= "space-around"
    >
        {cardData  && cardData.length > 0 ? 
        cardData.map((work)=>{
        return(
            
            <Card 
            key={work._id}
            sx={{
        maxWidth: 320,
        borderRadius: 3,
        boxShadow: 4,
        transition: "0.3s",
        backgroundColor:colors.primary[400],
        "&:hover": {
          boxShadow: 8,
          transform: "translateY(-4px)",
        },
      }}
    >
      {/* Artwork Image */}
      <CardMedia
        component="img"
        height="220"
        image={`http://localhost:5000/${work.imagePath}`}
        alt={work.title}
        sx={{ objectFit: "contain" ,height:"320px" }}
      />

      <CardContent>
        {/* Title */}
        <Typography
          variant="h6"
          color={colors.grey[200]}
          fontWeight={600}
          gutterBottom
          noWrap
        >
          {work.title}
        </Typography>

        {/* Rating */}
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

        {/* Price */}
        <Typography
          variant="h6"
          color="success"
          fontWeight={700}
          mt={1}
        >
          Buy ₹ {work.price}
        </Typography>
      </CardContent>
    </Card>
        )
        })
        :
    "no works"}
    </Box>
  );
};

export default ArtistworkCard;
