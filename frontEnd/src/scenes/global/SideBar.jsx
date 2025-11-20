import React ,{useState} from 'react'
import {  Sidebar, Menu, MenuItem} from 'react-pro-sidebar'
import unknownImg from "../../assets/unknown.jpg";
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
      position: "fixed !important",
      top: 0,
      left: 0,
      height: "100vh",
      width:`${!isCollapsed?"250px !important":"55px"}`,
      zIndex: 100,
      transition: "width, left, right, 200ms"
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
                                    <Typography>DashBoard</Typography>
                                    <IconButton onClick={()=> setIsCollapsed(!isCollapsed)}>
                                        <MenuOutlinedIcon />
                                    </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    {/* profile img */}
                    {!isCollapsed &&(
                      <Box m="8px 0 0 0">
                        <Box display="flex" justifyContent="center" alignItems='center'>
                          <Link to='profile'>
                            <img 
                                alt="profile picture"
                                width="100px"
                                src={unknownImg}
                                style={{cursor:"pointer",borderRadius:"50%",height:"100px"}}
                                />
                            </Link>
                        </Box>
                        <Box  display="flex" justifyContent="center" alignItems='center'>
                          <Typography
                              variant='h4'
                              color={colors.grey[100]} 
                              fontWeight="bold"
                              sx={{m:"8px 0 0 0"}}
                          >hello</Typography>
                        </Box>
                      </Box>
                    )}
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
