
import React from'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Countries from './components/Countries';
import Feature from './components/Feature';
import Training from './components/Training';
import Testimonial from './components/Testimonial';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Service" element={<Service/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Countries" element={<Countries/>}/>
      <Route path="/Feature"  element={<Feature/>}/>
      <Route path="/Traninig" element={<Training/>}/>
      <Route path="/Testimonail" element={<Testimonial/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
