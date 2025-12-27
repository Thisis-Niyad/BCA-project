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
       <Slider {...settings}>
      {groupedItems.map((group, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            gap: 2,

            padding: 2,
          }}
        >
          <ArtistworkCard cardData={group}/>
        </Box>
      ))}
    </Slider>
    </Box>
  );
};

export default CartCarousel;
