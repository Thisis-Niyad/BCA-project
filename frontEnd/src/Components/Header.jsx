import React from 'react'
import { Typography,Box,useTheme } from "@mui/material";
import {tokens} from "../Theme";

function Header({title, subtitle}) {
    const theme =useTheme();
    const colors =tokens(theme.palette.mode);

  return (
    <Box mb="30px">
        <Typography variant="h3" 
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{mb:"5px"}}
        >{title}</Typography>
        <Typography
        variant="h6" 
        color={colors.greenAccent[400]}
        >{subtitle}</Typography>
    </Box>
  )
}

export default Header
