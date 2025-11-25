import React,{useEffect,useState} from 'react'
import Api from './Api'
import {Outlet,useParams} from 'react-router-dom'
import './sass/main.css'
import Topbar from './scenes/global/Topbar'
import SideBar from './scenes/global/SideBar'

// Icons
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import PaidIcon from '@mui/icons-material/Paid';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import LogoutIcon from '@mui/icons-material/Logout';
function Admin() {
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
    title: "New Artist",
     to: "newartist",
     Icon:<PersonAddAltOutlinedIcon/>
  },
  {
    title: "Comlpaints",
     to: "complaints",
     Icon:<FeedOutlinedIcon/>
  },
    {
      title: "Payments",
       to: "payments",
       Icon:<PaidIcon/>
    },
  {
    title: "Veiw User",
     to: "viewuser",
     Icon:<Groups2OutlinedIcon/>
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
    const response=await Api.get(`/admin/${id}`)
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

export default Admin
