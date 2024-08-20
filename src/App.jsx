import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Header from './components/header/Header'
import AboutMe from './components/aboutMe/AboutMe'
function App() {
  

  return (
    <div>
    <NavBar />
    <Header/>
    <AboutMe />
    </div>
  )
}

export default App
