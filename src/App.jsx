import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Header from './components/header/Header'
import AboutMe from './components/aboutMe/AboutMe'
import Services from './components/services_sec/Services'
import Projetcs from './components/projects_dev/Projetcs'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
function App() {
  

  return (
    <div>
    <NavBar />
    <Header/>
    <AboutMe />
    <Services />
    <Projetcs />
    <Contact />
    <Footer />
    </div>
  )
}

export default App

