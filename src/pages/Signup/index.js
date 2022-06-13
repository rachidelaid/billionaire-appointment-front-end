import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import style from './style.module.css';
import { signup } from '../../redux/users';

const Signup = () => {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.id) {
      toast.success("You've signed up!");
      navigate('/');
    }
  }, [user]);

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    setError('');
    e.preventDefault();

    const {
      name, username, email, password, confirmPassword,
    } = e.target.elements;

    if (confirmPassword.value.trim() !== password.value.trim()) {
      setError('password do not match');
      return;
    }

    const user = {
      name: name.value.trim(),
      username: username.value.trim(),
      email: email.value.trim(),
      password: password.value.trim(),
      client_id: process.env.REACT_APP_CLIENT_ID,
    };

    dispatch(signup(user));
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <form className={style.card} onSubmit={handleSubmit}>
          <h1>Signup</h1>

          {error && <p role="alert" className={style.error}>{error}</p>}
          {(user && user.error)
            && (user.error.map((err) => <p role="alert" key={err.length} className={style.error}>{err}</p>))}

          <label htmlFor="name">
            Name
            <input type="text" id="name" placeholder="Name" required />
          </label>
          <label htmlFor="username">
            Username
            <input type="text" id="username" placeholder="Username" required />
          </label>
          <label htmlFor="email">
            Email
            <input type="email" id="email" placeholder="Email" required />
          </label>
          <label htmlFor="password">
            Password
            <input type="password" id="password" placeholder="Password" min={6} required />
          </label>
          <label htmlFor="confirmPassword">
            Confirm Password
            <input type="password" id="confirmPassword" placeholder="Confirm Password" min={6} required />
          </label>

          <button type="submit" className={style.btn}>Sign Up</button>
        </form>
        <small className={style.option}>
          Already have an account?
          {' '}
          <Link to="/login">Sign In</Link>
        </small>
      </div>
    </div>
  );
};

export default Signup;
