import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import HomePage from './components/HomePage'
import ContactPage from './components/ContactPage'

// FIXME: responsive font-size for h2
// FIXME: Scroll function on navbar

function App() {

  const [ page, setPage ] = useState(false)
  const [ clickedCategory, setClickedCategory ] = useState('')

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
    <div className="dark">
      <ContactPage/>

      { !page ? <div className='bg-stone-950 h-10 hidden sm:block'></div> : <div></div> } {/* NOTE:  ignore this; this exists so the scroll snaps back to Navbar */}
      <Navbar setPage={setPage} setClickedCategory={setClickedCategory} />

      { page ? 
        <Gallery 
          page={page} setPage={setPage}
          clickedCategory={clickedCategory} setClickedCategory={setClickedCategory}
        /> 
        : <HomePage setPage={setPage} setClickedCategory={setClickedCategory} /> 
      }
      
    </div>
  )
}

export default App