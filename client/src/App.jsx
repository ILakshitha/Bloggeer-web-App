import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import About from "./pages/About"
import Signup from './pages/SignUp'
import Dashborad from './pages/Dashbord'
import Projects from './pages/Projects'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/dashboard' element={<Dashborad />} />
        <Route path='/project' element={<Projects />} />

      </Routes>

    </BrowserRouter>
  )
}
