// import { useState } from 'react'
import {Route,Routes,Link} from 'react-router-dom'
import Home from './Home'
import Contact from '../pages/contact'
import Index from '../pages'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'

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
    </Routes>
  
    </>
  )
}

export default App
