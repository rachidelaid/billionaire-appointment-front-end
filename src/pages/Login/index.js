import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import style from './style.module.css';

const Login = () => {
  const { user } = useSelector((state) => state.users);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.id) {
      navigate('/');
    }
  }, [user]);

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.card}>
          <h1>Login</h1>
          {(user && user.error)
            && (user.error.map((err) => <p key={err.length} className={style.error}>{err}</p>))}

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button type="button" className={style.btn}>Sign In</button>
        </div>
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
