import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Appointment from './pages/Appointment';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<Appointment />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
