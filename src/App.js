import React from 'react';
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Portfolio from './pages/Portoflio';
import About from './pages/About';
// import Error from './pages/Error';
// import Header from './components/Header'
// import Footer from './components/Footer';
// import Test from './components/Test';


// import 'app.scss'


function App() {

  return (
    <div>
          
            <Routes>
                <Route path='/' element={<Home/>} />

                <Route path='/about' element={<About/>} />

                <Route path='/portfolio/:category' element={<Portfolio/>} />

            </Routes> 
    </div>
   // <About /> 
  );
}

export default App;
