import React,{useEffect,useState} from 'react'
import {Outlet,useParams} from 'react-router-dom'
import './sass/main.css'
import Topbar from './scenes/global/Topbar'
import SideBar from './scenes/global/SideBar'
import Api from './Api'
// Icons
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import CommentIcon from '@mui/icons-material/Comment';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import PaidIcon from '@mui/icons-material/Paid';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import WorkIcon from '@mui/icons-material/Work';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
function Artist() {
    var list = [
  {
    title: "Home",
     to: "",
     Icon:<SpaceDashboardIcon/>
  },
  {
    title: "Chat",
     to: "Chats",
     Icon:<CommentIcon/>
  },
  {
    title: "Gallery",
     to: "gallery",
     Icon:<PhotoLibraryIcon/>
  },
  {
    title: "Add Post",
     to: "addpost",
     Icon:<AddPhotoAlternateIcon/>
  },
  {
    title: "Requests",
     to: "request",
     Icon:<WorkIcon/>
  },
  {
    title: "Payments",
     to: "payments",
     Icon:<PaidIcon/>
  },
  {
    title: "Report",
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
useEffect(()=>{
const SideBarProflieInfo=async()=>{
  try {
    const response=await Api.get(`/artist/${id}`)
    setName(response.data.name)
    setImage(response.data.Image)
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
                       <Outlet />
                     </main>
                 </div>
             
       </>
  )
}

export default Artist
