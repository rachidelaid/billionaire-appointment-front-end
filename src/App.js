import React, { useEffect } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { refreshToken } from './redux/users';
import { fetchBillionaires } from './redux/billionaires';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Loading from './components/Loading';

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

  const { user, loading } = useSelector((state) => state.users);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      {loading ? (<Loading />) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-billionaire" element={user && user.role === 'admin' ? <NewBillionaire /> : <Navigate to="/" />} />
            <Route path="/delete-billionaire" element={user && user.role === 'admin' ? <DeleteBillionaire /> : <Navigate to="/" />} />
            <Route path="/new-appointment" element={user ? <Appointment /> : <Navigate to="/login" />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/appointments" element={user ? <UserAppointments /> : <Navigate to="/login" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
