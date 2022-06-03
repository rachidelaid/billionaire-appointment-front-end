import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewBillionaire from './pages/NewBillionaire';
import DeleteBillionaire from './pages/DeleteBillionaire';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-billionaire" element={<NewBillionaire />} />
        <Route path="/delete-billionaire" element={<DeleteBillionaire />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
