import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import HomePage from './components/HomePage'
import ContactPage from './components/ContactPage'

function App() {

  let test = false;

  return (
    <>
    <div className="dark">
      <ContactPage/>
      {/* { test ? 
        <Navbar/>
        : 
        <Navbar/>
      } */}
      <div className='bg-stone-950 h-10'></div> {/* NOTE:  ignore this; this exists so the scroll snaps back to Navbar */}
      <Navbar/>

      { test ? <Gallery/> : <HomePage/> }
      
    </div>
    </>
  )
}

export default App
