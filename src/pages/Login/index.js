import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import style from './style.module.css';

import { login } from '../../redux/users';

const Login = () => {
  const { user } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.id) {
      navigate('/');
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      email, password,
    } = e.target.elements;

    const user = {
      grant_type: 'password',
      email: email.value.trim(),
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
            && (user.error.map((err) => <p key={err.length} className={style.error}>{err}</p>))}

          <input type="email" id="email" placeholder="Email" required />
          <input type="password" id="password" placeholder="Password" required />

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
