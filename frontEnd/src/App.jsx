// import { useState } from 'react'
import {Route,Routes,Link} from 'react-router-dom'
import Footer from "../components/Footer"
import Index from '../pages/Index'

function App() {
  

  return (
    <>
     <Routes> 
      <Route path="/" element={<Index hideFooter/>}/>
    </Routes>
     <Footer/>
    </>
  )
}

export default App
