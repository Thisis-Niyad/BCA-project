// import { useState } from 'react'
import {Route,Routes,Link} from 'react-router-dom'
import Home from './Home'
import Contact from '../pages/contact'
import Index from '../pages'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import Registeration from '../pages/Registeration'
function App() {
  

  return (
    <>
     <Routes> 
      <Route path="/" element={<Home />}>
          <Route path="" element={<Index/>}/>
          <Route path="contact" element={<Contact/>}/>
      </Route>
       <Route path="signup" element={<SignUp/>}/>
          <Route path="signin" element={<SignIn/>}/>
          <Route path="registeration" element={<Registeration/>}/>
    </Routes>
  
    </>
  )
}

export default App
