import React from 'react'
import { ColorModeContext,useMode } from './Theme'
import { CssBaseline, ThemeProvider }from "@mui/material"
import './sass/main.css'
import Topbar from './scenes/global/Topbar'
import SideBar from './scenes/global/SideBar'
import Index from './scenes/dasboard'

function Admin() {
    const [theme,colorMode]=useMode();
    var list = [
  {
    title: "Home",
     to: "/",
  },
  {
    title: "View Artist",
     to: "/viewartist",
  },
  {
    title: "New Artist",
     to: "/newartist",
  },
  {
    title: "Comlpaints",
     to: "/complaints",
  },
  {
    title: "Veiw User",
     to: "/viewuser",
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
