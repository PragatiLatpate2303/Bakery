import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Categories from './pages/Categories';

import Nonveg from './pages/Nonveg';
import Veg from './pages/Veg';
import HealthFreak from './pages/HealthFreak';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home property="Home"/>}/>
          <Route path='/Categories' element={<Categories property="Categories"/>}/>
          <Route path='/About' element={<About property="About"/>}/>
          <Route path='/ContactUs' element={<ContactUs property="ContactUs"/>}/>
          
          <Route path='/Veg' element={<Veg property="Veg"/>}/>
          <Route path='/Nonveg' element={<Nonveg property="Nonveg"/>}/>
          <Route path='/HealthFreak' element={<HealthFreak property="HealthFreak"/>}/>

        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
