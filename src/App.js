import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';
import NewBillionaire from './pages/NewBillionaire';
import DeleteBillionaire from './pages/DeleteBillionaire';
import Signup from './pages/Signup';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-billionaire" element={<NewBillionaire />} />
        <Route path="/delete-billionaire" element={<DeleteBillionaire />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
