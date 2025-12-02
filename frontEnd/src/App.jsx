// import { useState } from 'react'
import {Route,Routes,Link} from 'react-router-dom'
import { ColorModeContext,useMode } from './Theme'
import { CssBaseline, ThemeProvider }from "@mui/material"
import Home from './Home'
import Contact from '../pages/contact'
import Index from '../pages'
import SignUp from './scenes/signup/signUp'
import SignIn from './scenes/Login/SignIn'
import RegisterationArtist from './scenes/Registeration/RegisterationArtist'
import Admin from './Admin'
import Artist from './Artist'
import User from './User'
// Admin
import AdminViewartist from './scenes/Admin/Viewartist'
import Viewuser from './scenes/Admin/Viewuser'
import Newartist from './scenes/Admin/Newartist'
import Complaints from './scenes/Admin/Comlpaints'
import ViewComplaint from './scenes/Admin/ViewComplaint/ViewComplaint'
import AdminPayments from './scenes/Admin/Payments'
import AdminProfile from './scenes/Admin/Profile'
// artist
import ArtistChats from './scenes/Artist/Chats'
import Gallery from './scenes/Artist/Gallery'
import Addpost from './scenes/Artist/Addpost'
import Request from './scenes/Artist/Request'
import ArtistPayments from './scenes/Artist/Payments'
import ArtistReport from './scenes/Artist/Report'
import ArtistNewReport from './scenes/Artist/ReportField/NewReport'
import ArtistReportsStatus from './scenes/Artist/ReportField/ReportStatus'
import ArtistProfile from './scenes/Artist/Profile'
import ArtistViewReport from './scenes/Artist/ReportField/ViewReport'
// User
import UserViewartist from './scenes/User/Viewartist'
import Imagegeneration from './scenes/User/Imagegeneration'
import UserChats from './scenes/User/Chats'
import Orderdetails from './scenes/User/Orderdetails'
import Carts from './scenes/User/Carts'
import UserPayments from './scenes/User/Payments'
import Report from './scenes/User/Report'
import UserProfile from './scenes/User/Profile'
import UserNewReport from './scenes/User/ReportFeild/NewReport'
import UserReportsStatus from './scenes/User/ReportFeild/ReportsStatus'
import UserViewReport from './scenes/User/ReportFeild/ViewReport'

function App() {
  

    const [theme,colorMode]=useMode();
  return (
    <>
     <div className="dashboardBody">
            <ColorModeContext.Provider value={colorMode}>
              <ThemeProvider theme={theme}>
                  <CssBaseline />
     <Routes> 
      <Route path="/" element={<Home />}>
          <Route path="" element={<Index/>}/>
          <Route path="contact" element={<Contact/>}/>
      </Route>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/registeration" element={<RegisterationArtist/>}/>
      <Route path="/admin/:id" element={<Admin/>}>
          <Route path="viewartist" element={<AdminViewartist/>}/>
          <Route path="complaints" element={<Complaints/>}/>
          <Route path="complaints/:complaintId" element={<ViewComplaint/>}/>
          <Route path="viewuser" element={<Viewuser/>}/>
          <Route path="newartist" element={<Newartist/>}/>
          <Route path="payments" element={<AdminPayments/>}/>
          <Route path="profile" element={<AdminProfile/>}/>
      </Route>
      <Route path="/artist/:id" element={<Artist/>}>
          <Route path="chats" element={<ArtistChats/>}/>
          <Route path="gallery" element={<Gallery/>}/>
          <Route path="addpost" element={<Addpost/>}/>
          <Route path="request" element={<Request/>}/>
          <Route path="payments" element={<ArtistPayments/>}/>
          <Route path="report" element={<ArtistReport/>}>
                <Route index  element={<ArtistReportsStatus/>}/>
                <Route path="new" element={<ArtistNewReport/>}/>
                <Route path=":complaintId" element={<ArtistViewReport/>}/>
          </Route>
          <Route path="profile" element={<ArtistProfile/>}/>
      </Route>
      <Route path="/user/:id" element={<User/>}>
          <Route path="viewartist" element={<UserViewartist/>}/>
          <Route path="imagegeneration" element={<Imagegeneration/>}/>
          <Route path="chats" element={<UserChats/>}/>
          <Route path="orders" element={<Orderdetails/>}/>
          <Route path="carts" element={<Carts/>}/>
          <Route path="payments" element={<UserPayments/>}/>
          <Route path="report" element={<Report/>}>
              <Route index  element={<UserReportsStatus/>}/>
              <Route path="new" element={<UserNewReport/>}/>
              <Route path=":complaintId" element={<UserViewReport/>}/>
          </Route>
          <Route path="profile" element={<UserProfile/>}/>
      </Route>
    </Routes>
     </ThemeProvider>
            </ColorModeContext.Provider>
        </div>
    </>
  )
}

export default App
