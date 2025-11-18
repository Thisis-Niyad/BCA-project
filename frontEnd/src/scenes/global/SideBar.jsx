import React ,{useState} from 'react'
import {  Sidebar, Menu, MenuItem} from 'react-pro-sidebar'
// import 'react-pro-sidebar/dist/styles/'
import {Box,IconButton,Select,useTheme} from '@mui/material'
import {Link} from 'react-router-dom'
import {tokens} from '../../Theme'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import { Typography } from "@mui/material";

const Item=({title, to,Icon, selected , setSelected})=>{
    const theme =useTheme();
    const colors =tokens(theme.palette.mode);
    return (
        <MenuItem
        icon={Icon}
            active={selected === title}
            style={{ color: colors.grey[300] }}
            onClick={() => setSelected(title)}
            component={<Link to={to} />}
            >
            <Typography>{title}</Typography>
        </MenuItem>

    )
}

const SideBar = ({list}) => {
    const theme =useTheme();
    const colors =tokens(theme.palette.mode);
    const [isCollapsed,setIsCollapsed]=useState(false);
    const [selected,setSelected]=useState("dashboard");


  return (
    <>
     <Box
  sx={{
    "& .ps-sidebar-root": {
      borderColor: "#777777",
      height:"100vh"     // <--- REMOVE BORDER
    },
    ".ps-sidebar-container": {
      backgroundColor: `${colors.primary[400]} !important`,
    },
    ".ps-menu-button": {
      padding: "8px 20px !important",
      height:"65px !important", 
          justifyContent: "center",
    },
    ".ps-menu-button:hover": {
       backgroundColor: `${colors.grey[700]} !important`,
    },
    ".ps-active": {
      color: "#6870fa !important",
    },
    ".ps-collapsed":{  
    width:"55px !important",
    minWidth:"55px !important",
    },
    ".ps-menu-icon":{
      margin:"0",
    },
  }}
>

            <Sidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem  
                    onClick={()=>{setIsCollapsed(!isCollapsed)}}
                    icon={isCollapsed ? <MenuOutlinedIcon sx={{fontSize:"30px"}}/>:undefined}
                      style={{
              color: colors.grey[100] ,
              margin:"0",
              padding: "20px",
              height:"65px !important",
          }}
                    >
                        {!isCollapsed &&(
                            <Box display="flex"
                                justifyContent="space-between"
                               style={{ color: colors.grey[100] }}
                                alignItems="center"
                                ml='15px'>
                                    <Typography>Admins DashBoard</Typography>
                                    <IconButton onClick={()=> setIsCollapsed(!isCollapsed)}>
                                        <MenuOutlinedIcon />
                                    </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    <Box padding={isCollapsed?undefined:"5px"}>
                           { list.map((prop, key) => (
                                <Item
                                    key={key}
                                    Icon={prop.Icon}
                                    title={prop.title}
                                    to={prop.to}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                                ))}

                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    </>
  )
}

export default SideBar
