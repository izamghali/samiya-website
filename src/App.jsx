import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import HomePage from './components/HomePage'
import ContactPage from './components/ContactPage'

// FIXME: key for each component we're mapping
// FIXME: check react dom client error on the console

function App() {

  const [ page, setPage ] = useState(false)
  const [ category, setCategory ] = useState('')

  function snapScroll() {
    const the = document.getElementById('the-html');
    let classes = ['scroll-smooth', 'snap-y', 'snap-mandatory', 'overflow-scroll']
    
    if (!page) {
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

      { !page ? <div className='bg-stone-950 h-10 hidden sm:block'></div> : <div></div> } {/* NOTE:  ignore this; this exists so the scroll snaps back to Navbar */}
      <Navbar 
        page={page} setPage={setPage}
        setCategory={setCategory} 
      />

      { page ? <Gallery /> : <HomePage setPage={setPage} /> }
      
    </div>
    </>
  )
}

export default App
