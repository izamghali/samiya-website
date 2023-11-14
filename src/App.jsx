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
    <div className='dark'>
      <ContactPage/>
      <Navbar/>

      { test ? <Gallery/> : <HomePage/> }
      
    </div>
    </>
  )
}

export default App
