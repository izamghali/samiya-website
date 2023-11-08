import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import HomePage from './components/HomePage'

function App() {

  let test = true;

  return (
    <>
    <div className='dark'>
      <Navbar/>

      { test ? <Gallery/> : <HomePage/> }
      
    </div>
    </>
  )
}

export default App
