import React, { useEffect } from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshToken());
    dispatch(fetchBillionaires());
  }, [dispatch]);

  const user = useSelector((state) => state.users.user);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-billionaire" element={user && user.role === 'admin' ? <NewBillionaire /> : <Home />} />
        <Route path="/delete-billionaire" element={user && user.role === 'admin' ? <DeleteBillionaire /> : <Home />} />
        <Route path="/new-appointment" element={user ? <Appointment /> : <Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/appointments" element={user ? <UserAppointments /> : <Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
