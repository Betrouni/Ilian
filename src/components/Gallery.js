import React from 'react'
import Footer from './Footer'

function Gallery(props) {
  return (
    <div>
    <div className='gallery-navbar'>
    <div className='main-navbar' >
    <div className='main-navbar-left' onClick={()=>{props.onMain()}}>Ilian Bounaceur</div>
    <div className='main-navbar-right' >
      <div onClick={()=>{props.onAbout()}}>À PROPOS</div>
      <div>TRAVAUX</div>
      <div> <i class="fa-brands fa-instagram"></i> </div>
      <div>FR</div>
    </div>
  </div>
  <div className='under-navbar' >
  <div className='under-navbar-text'><div>TOUT</div>
  <div>SKETCHES</div>
  <div>LOGOS</div>
  <div>DIGITAL</div>
  <div>ILLUSTRATION</div></div>
  
        
  </div>
    </div>



    <div className='gallery'>
        <div className='gallery-element'></div>
        <div className='gallery-element'></div>
        <div className='gallery-element'></div>
        <div className='gallery-element'></div>
        <div className='gallery-element'></div>
        <div className='gallery-element'></div>
        <div className='gallery-element'></div>
        <div className='gallery-element'></div>
        <div className='gallery-element'></div>
        <div className='gallery-element'></div>
        <div className='gallery-element'></div>

    </div>




    <Footer />
    </div>
  )
}

export default Gallery