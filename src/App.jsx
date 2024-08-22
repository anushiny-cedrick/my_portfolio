import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Header from './components/header/Header'
import AboutMe from './components/aboutMe/AboutMe'
import Services from './components/services_sec/Services'
import Projetcs from './components/projects_dev/Projetcs'
function App() {
  

  return (
    <div>
    <NavBar />
    <Header/>
    <AboutMe />
    <Services />
    <Projetcs />
    </div>
  )
}

export default App
