import React,{useEffect,useState} from 'react'
import {Outlet,useParams} from 'react-router-dom'
import { UserContext } from './scenes/context/context'
import './sass/main.css'
import Topbar from './scenes/global/Topbar'
import SideBar from './scenes/global/SideBar'
import Api from './Api'
// Icons
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
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
const { id } = useParams();
const [name,setName]=useState()
const [image,setImage]=useState()
const [email,setEmail]=useState()
useEffect(()=>{
const SideBarProflieInfo=async()=>{
  try {
    const response=await Api.get(`/user/${id}`)
    setName(response.data.name)
    setImage(response.data.Image)
    setEmail(response.data.email)
  } catch (err) {
    console.log(err);
    
  }
}
SideBarProflieInfo()},[id])
  return (
    <>
  
              <div className="app">
                <SideBar list={list} Name={name} Image={image}/>
                  <main className="content">
                    <Topbar />
                    <UserContext.Provider value={{name,email}}>
                      <Outlet />              
                    </UserContext.Provider >
                  </main>
              </div>
         
    </>
  )
}

export default User
