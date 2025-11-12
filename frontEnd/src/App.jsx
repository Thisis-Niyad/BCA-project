// import { useState } from 'react'
import {Route,Routes,Link} from 'react-router-dom'
import Home from './Home'
import Contact from '../pages/contact'
import Index from '../pages'

function App() {
  

  return (
    <>
     <Routes> 
      <Route path="/" element={<Home />}>
          <Route path="" element={<Index/>}/>
          <Route path="contact" element={<Contact/>}/>
      </Route>
    </Routes>
  
    </>
  )
}

export default App
