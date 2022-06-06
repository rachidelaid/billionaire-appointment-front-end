import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';
import Signup from './pages/Signup';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
