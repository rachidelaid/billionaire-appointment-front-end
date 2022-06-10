import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { refreshToken } from './redux/users';
import { fetchBillionaires } from './redux/billionaires';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';

import Details from './pages/Details';
import Home from './pages/Home';
import NewBillionaire from './pages/NewBillionaire';
import DeleteBillionaire from './pages/DeleteBillionaire';
import Appointment from './pages/Appointment';
import Signup from './pages/Signup';
import Login from './pages/Login';
import UserAppointments from './pages/UserAppointments';
import NotFound from './pages/NotFound';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshToken());
    dispatch(fetchBillionaires());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-billionaire" element={<NewBillionaire />} />
        <Route path="/delete-billionaire" element={<DeleteBillionaire />} />
        <Route path="/new-appointment" element={<Appointment />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/appointments" element={<UserAppointments />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
