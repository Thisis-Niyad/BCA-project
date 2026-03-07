import React,{useEffect,useState} from 'react'
import Api from './Api'
import {Outlet,useParams,useNavigate} from 'react-router-dom'
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

function Admin() {
  const navigate=useNavigate();
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
];
const { id } = useParams();
const [name,setName]=useState()
const [image,setImage]=useState()
useEffect(() => {
  const SideBarProfileInfo = async () => {

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/signin");
      return;
    }

    try {
      const response = await Api.get(`/admin/${id}`);

      setName(response.data.name);
      setImage(response.data.Image);
      // setEmail(response.data.email);

    } catch (err) {
      console.log(err);
    }
  };

  SideBarProfileInfo();

}, [id, navigate]);

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
