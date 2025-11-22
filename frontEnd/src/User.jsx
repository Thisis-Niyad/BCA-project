import React from 'react'
import {Outlet} from 'react-router-dom'
import './sass/main.css'
import Topbar from './scenes/global/Topbar'
import SideBar from './scenes/global/SideBar'

// Icons
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

import PaidIcon from '@mui/icons-material/Paid';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
function User() {
  
    var list = [
  {
    title: "Home",
     to: "",
     Icon:<SpaceDashboardIcon/>
  },
  {
    title: "View Artist",
     to: "viewartist",
     Icon:<RecentActorsOutlinedIcon/>
  },
  {
    title: "Image Generation",
     to: "imagegeneration",
     Icon:<SmartToyOutlinedIcon/>
  },
  {
    title: "Chats",
     to: "chats",
     Icon:<CommentIcon/>
  },
  {
    title: "Order Details",
     to: "orders",
     Icon:<LocalShippingOutlinedIcon/>
  },
  {
    title: "Cart",
     to: "carts",
     Icon:<AddShoppingCartOutlinedIcon/>
  },
  {
    title: "Payments",
     to: "payments",
     Icon:<PaidIcon/>
  },
  {
    title: "Report Issue",
     to: "report",
     Icon:<FeedOutlinedIcon/>
  },
    {
    title: "LogOut",
     to: "/",
     Icon:<LogoutIcon/>
  },
];
  return (
    <>
  
              <div className="app">
                <SideBar list={list}/>
                  <main className="content">
                    <Topbar />
                    <Outlet />              
                  </main>
              </div>
         
    </>
  )
}

export default User
