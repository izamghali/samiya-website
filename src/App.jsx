import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import HomePage from './components/HomePage'
import ContactPage from './components/ContactPage'

function App() {

  let test = false;

  function snapScroll() {
    const the = document.getElementById('the-html');
    let classes = ['scroll-smooth', 'snap-y', 'snap-mandatory', 'overflow-scroll']
    
    if (!test) {
      classes.map(data => { the.classList.add(data) })
    } else {
      classes.map(data => { the.classList.remove(data) })
    }
  }

  snapScroll();
    
  return (
    <>
    <div className="dark">
      <ContactPage/>
      {/* { test ? 
        <Navbar/>
        : 
        <Navbar/>
      } */}
      { !test ? <div className='bg-stone-950 h-10'></div> : <div></div> } {/* NOTE:  ignore this; this exists so the scroll snaps back to Navbar */}
      <Navbar/>

      { test ? <Gallery/> : <HomePage/> }
      
    </div>
    </>
  )
}

export default App
