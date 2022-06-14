import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import style from './style.module.css';

import { login } from '../../redux/users';

const Login = () => {
  const { user } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.id) {
      toast.success("You're logged in!");
      navigate('/');
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      username, password,
    } = e.target.elements;

    const user = {
      grant_type: 'password',
      username: username.value.trim(),
      password: password.value.trim(),
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
    };

    dispatch(login(user));
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <form className={style.card} onSubmit={handleSubmit}>
          <h1>Login</h1>
          {(user && user.error)
            && <p role="alert" className={style.error}>{user.error}</p>}
          <label htmlFor="username">
            Username
            <input type="text" id="username" placeholder="Username" required />
          </label>

          <label htmlFor="password">
            Password
            <input type="password" id="password" placeholder="Password" required />
          </label>

          <button type="submit" className={style.btn}>Sign In</button>
        </form>
        <small className={style.option}>
          Don&rsquo;t have an account?
          {' '}
          <Link to="/signup">Sign Up</Link>
        </small>
      </div>
    </div>
  );
};

export default Login;
