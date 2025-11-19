import React,{useContext} from 'react'
import {Box, IconButton,useTheme} from "@mui/material"
import { ColorModeContext,tokens } from '../../Theme'
import InputBase from '@mui/material/InputBase'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SerchIcon from '@mui/icons-material/Search'
import { Typography } from "@mui/material";
import {Link} from 'react-router-dom'

const Topbar = () => {
    const theme =useTheme();
    const colors =tokens(theme.palette.mode);
    const colorMode= useContext(ColorModeContext)
  return (
      <Box display="flex" justifyContent="space-between"  p={2}>
        {/*  */}
        <Box display="flex" borderRadius="3px">
            {/* <InputBase sx={{ml:2,flex:1}} placeholder="Search" />
            <IconButton type='button' sx={{p:1}}>
                <SerchIcon/>
            </IconButton> */}<Typography variant="h5" sx={{ color: colors.grey[400]}}>
  Pixel Pact
</Typography>
        </Box>
        <Box display='flex'>
             <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode==='dark'?(
                <DarkModeOutlinedIcon />
                ):(
                <LightModeOutlinedIcon />
                )}
            </IconButton>
            <IconButton>
                <NotificationsOutlinedIcon/>
            </IconButton>
             <IconButton>
                <SettingsOutlinedIcon/>
            </IconButton>
            <Link to="profile"> <IconButton>
                <PersonOutlinedIcon />
            </IconButton></Link>
        </Box>
      </Box>

  )
}

export default Topbar
