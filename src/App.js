import React from 'react';
import { useState } from 'react';
import Home from "./components/Home";
import Gallery from './components/Gallery';
import About from './components/About';
// import 'app.scss'


function App() {
const [onMain, setOnMain] = useState(true)
const [onGallery, setOnGallery] = useState(false)
const [onAbout, setOnAbout] = useState(false)

function toMain(){
  setOnGallery(false);
  setOnAbout(false);
  setOnMain(true);
}

function toGallery(){
  setOnAbout(false);
  setOnMain(false);
  setOnGallery(true);
}

function toAbout(){
  setOnMain(false);
  setOnGallery(false);
  setOnAbout(true);
}




  return (
    <div>
    {onMain === true ? <Home onGallery={()=>{toGallery()} }  onAbout={()=>{toAbout()} } /> : onGallery === true ? <Gallery onAbout={()=>{toAbout()} } onMain={()=>{toMain()}} /> 
    : onAbout === true ? <About onMain={()=>{toMain()}} onGallery={()=>{toGallery()} } /> : 
    <Home onGallery={()=>{toGallery()} }  />  }
    
    </div>
   // <About /> 
  );
}

export default App;
