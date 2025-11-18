import React from 'react'
import { ColorModeContext,useMode } from './Theme'
import { CssBaseline, ThemeProvider }from "@mui/material"
import './sass/main.css'
import Topbar from './scenes/global/Topbar'
import SideBar from './scenes/global/SideBar'
import Index from './scenes/dasboard'
// Icons
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import LogoutIcon from '@mui/icons-material/Logout';
function Admin() {
    const [theme,colorMode]=useMode();
    var list = [
  {
    title: "Home",
     to: "/",
     Icon:<SpaceDashboardIcon/>
  },
  {
    title: "View Artist",
     to: "/viewartist",
     Icon:<RecentActorsOutlinedIcon/>
  },
  {
    title: "New Artist",
     to: "/newartist",
     Icon:<PersonAddAltOutlinedIcon/>
  },
  {
    title: "Comlpaints",
     to: "/complaints",
     Icon:<FeedOutlinedIcon/>
  },
  {
    title: "Veiw User",
     to: "/viewuser",
     Icon:<Groups2OutlinedIcon/>
  },
    {
    title: "LogOut",
     to: "/",
     Icon:<LogoutIcon/>
  },
];
  return (
    <>
    <div className="dashboardBody">
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="app">
                <SideBar list={list}/>
                  <main className="content">
                    <Topbar />
                    <Index/>
                  </main>
              </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
    </div>
    </>
  )
}

export default Admin
