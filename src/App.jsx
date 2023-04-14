import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Components/Hero.jsx'
import Header from './Components/Header.jsx'
import Info from './Components/Info.jsx'
import Footer from './Components/Footer.jsx'


function App() {
  return (
    <div className="App">
       <Header/>
   <Hero/>
   <Info/>
   <Footer/>
    </div>
  )
}

export default App
