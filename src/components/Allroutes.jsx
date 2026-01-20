import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import Blogs from '../pages/Blogs'
import Career from '../pages/Career'
import Signup from '../pages/auth/SignUp'
import Login from '../pages/auth/Login'
import UpdatePassword from '../pages/auth/UpdatePassword'
import ForgotPassword from '../pages/auth/ForgotPassword'
import Contact from '../pages/Contact'
import VerifyOtp from '../pages/auth/VerifyOtp'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='/career' element={<Career />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
        <Route path='update-password' element={<UpdatePassword />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='verify-otp' element={<VerifyOtp />} />
        {/* <Route path='signup' element={<Login/>}/>
      <Route path='login' element={<Login/>}/> */}
      </Routes>
    </div>
  )
}

export default Allroutes