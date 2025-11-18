// import { useState } from 'react'
import {Route,Routes,Link} from 'react-router-dom'
import Home from './Home'
import Contact from '../pages/contact'
import Index from '../pages'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import Registeration from '../pages/Registeration'
import Admin from './Admin'
import Artist from './Artist'
import User from './User'
// Admin
import AdminViewartist from './scenes/Admin/Viewartist'
import Viewuser from './scenes/Admin/Viewuser'
import Newartist from './scenes/Admin/Newartist'
import Complaints from './scenes/Admin/Comlpaints'
import AdminPayments from './scenes/Admin/Payments'
import AdminProfile from './scenes/Admin/Profile'
// artist
import ArtistChats from './scenes/Artist/Chats'
import Gallery from './scenes/Artist/Gallery'
import Addpost from './scenes/Artist/Addpost'
import Request from './scenes/Artist/Request'
import ArtistPayments from './scenes/Artist/Payments'
import ArtistReport from './scenes/Artist/Report'
// User
import UserViewartist from './scenes/User/Viewartist'
import Imagegeneration from './scenes/User/Imagegeneration'
import UserChats from './scenes/User/Chats'
import Orderdetails from './scenes/User/Orderdetails'
import Carts from './scenes/User/Carts'
import UserPayments from './scenes/User/Payments'
import Report from './scenes/User/Report'
function App() {
  

  return (
    <>
     <Routes> 
      <Route path="/" element={<Home />}>
          <Route path="" element={<Index/>}/>
          <Route path="contact" element={<Contact/>}/>
      </Route>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/registeration" element={<Registeration/>}/>
      <Route path="/admin" element={<Admin/>}>
          <Route path="viewartist" element={<AdminViewartist/>}/>
          <Route path="complaints" element={<Complaints/>}/>
          <Route path="viewuser" element={<Viewuser/>}/>
          <Route path="newartist" element={<Newartist/>}/>
          <Route path="payments" element={<AdminPayments/>}/>
          <Route path="profile" element={<AdminProfile/>}/>
      </Route>
      <Route path="/artist" element={<Artist/>}>
          <Route path="chats" element={<ArtistChats/>}/>
          <Route path="gallery" element={<Gallery/>}/>
          <Route path="addpost" element={<Addpost/>}/>
          <Route path="request" element={<Request/>}/>
          <Route path="payments" element={<ArtistPayments/>}/>
          <Route path="report" element={<ArtistReport/>}/>
      </Route>
      <Route path="/user" element={<User/>}>
          <Route path="viewartist" element={<UserViewartist/>}/>
          <Route path="imagegeneration" element={<Imagegeneration/>}/>
          <Route path="chats" element={<UserChats/>}/>
          <Route path="orders" element={<Orderdetails/>}/>
          <Route path="carts" element={<Carts/>}/>
          <Route path="payments" element={<UserPayments/>}/>
          <Route path="report" element={<Report/>}/>
      </Route>
    </Routes>
  
    </>
  )
}

export default App
