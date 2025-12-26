import React from "react";
import Slider from "react-slick";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  useTheme,
  Box,
} from "@mui/material";
import ArtistworkCard from "./ArtistworkCard";
import {tokens} from '../Theme'

const CartCarousel = ({ cartItems }) => {
      const theme= useTheme()
      const colors =tokens(theme.palette.mode)
  const chunkArray = (array, size) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

const PrevButton = (props) => {
  const { onClick } = props;

  return (
    <Button     
      style={{   position: "absolute",bottom: 0,left: 0,zIndex: 2}}
      onClick={onClick}
      sx={{ mr: 2,color: colors.grey[200],backgroundColor: colors.primary[400],}}
    >
      Prev
    </Button>
  );
};


const NextButton = (props) => {
  const {  onClick } = props;
  return (
    <Button
      style={{position: "absolute",zIndex: "2", bottom: 0, right: 0,}}
      onClick={onClick}
      sx={{color: colors.grey[200],backgroundColor: colors.primary[400],}}
    >
      Next
    </Button>
  );
};

 const groupedItems = chunkArray(cartItems, 20);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,        // desktop
    slidesToScroll: 1,
    afterChange: () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
      prevArrow: <PrevButton />,
  nextArrow: <NextButton />,
    appendDots:dots=>(
      <Box >
        <ul>
          {dots}
        </ul>
      </Box>
    ),
    customPaging:i=>(
      <Box color={colors.grey[200]} backgroundColor={colors.primary[400]}>
        {i+1}
      </Box>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box sx={{ mt: 4 }}>
      {/* <Slider {...settings}>
        {groupedItems.map((item, index) => (
          <Box key={index} sx={{ p: 1 }}>
            <Card sx={{ borderRadius: 3 }}>
              <CardMedia
                component="img"
                height="180"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography color="text.secondary">
                  ₹{item.price}
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ mt: 1 }}
                >
                  View
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider> */}
       <Slider {...settings}>
      {groupedItems.map((group, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            padding: 2,
          }}
        >
          {/* {group.map((item) => (
            <Card
              key={item._id}
              sx={{
                minWidth: 180,
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.title}
              />
              <Box sx={{ p: 1 }}>
                <Typography variant="subtitle2">
                  {item.title}
                </Typography>
                <Typography variant="caption">
                  ₹{item.price}
                </Typography>
              </Box>
            </Card>
          ))} */}
          <ArtistworkCard cardData={group}/>
        </Box>
      ))}
    </Slider>
    </Box>
  );
};

export default CartCarousel;
