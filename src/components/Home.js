import React from 'react'
import Footer from './Footer'


function Home(props) {
  return(
<div>
<div className='main-img'>
  <div className='main-navbar' >
    <div className='main-navbar-left'>Ilian Bounaceur</div>
    <div className='main-navbar-right' >
      <div onClick={()=>{props.onAbout()}}>À PROPOS</div>
      <div>TRAVAUX</div>
      <div> <i class="fa-brands fa-instagram"></i> </div>
      <div>FR</div>
    </div>
  </div>
</div>

<div className='main-menu'>
  <div onClick={props.onGallery} className='menu-1'>
    <div className='menu-footer'> 
    <p>LOGOS</p>
     
    </div>
  </div>

  <div onClick={props.onGallery} className='menu-2'>
  <div className='menu-footer'> 
    <p>SKETCHES</p>
     
    </div>
  </div>
  
  <div onClick={()=>{props.onGallery()}} className='menu-3'>
  <div className='menu-footer'> 
    <p>DIGITAL ILLUSTRATION</p>
     
    </div>
  </div>
</div>
<Footer />
</div>
    

  )    

}

export default Home