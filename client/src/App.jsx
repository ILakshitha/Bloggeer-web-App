import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import About from "./pages/About"
import Signup from './pages/SignUp'
import Dashborad from './pages/Dashbord'
import Projects from './pages/Projects'
import Header from './component/Header'
import  Footer from './component/Footer'
import PrivateRoute from './component/PrivateRoute'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route element = {<PrivateRoute/>}>
        <Route path='/dashboard' element={<Dashborad />} />
        </Route>
        <Route path='/project' element={<Projects />} />

      </Routes>
      <Footer />

    </BrowserRouter>
  )
}
