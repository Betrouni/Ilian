import React from 'react';
import { useState } from 'react';
import Home from "./components/Home";
import Gallery from './components/Gallery';
// import 'app.scss'


function App() {

const [onGallery, setOnGallery] = useState(false)




  return (
    <div>
    {onGallery === true ? <Gallery/> : <Home onDirection={setOnGallery} />  }
    
    </div>
  );
}

export default App;
