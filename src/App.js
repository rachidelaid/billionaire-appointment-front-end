import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshToken } from './redux/users';
import Details from './pages/Details';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
