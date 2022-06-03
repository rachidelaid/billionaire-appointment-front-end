import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';

const Signup = () => (
  <div className={style.container}>
    <div className={style.wrapper}>
      <div className={style.card}>
        <h1>Signup</h1>

        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <button type="button" className={style.btn}>Sign Up</button>
      </div>
      <small className={style.option}>
        Already have an account?
        {' '}
        <Link to="/login">Sign In</Link>
      </small>
    </div>
  </div>
);

export default Signup;
