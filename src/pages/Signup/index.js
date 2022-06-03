import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';

const Signup = () => {
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
      confirmPassword: confirmPassword.value.trim(),
      client_id: '5HQ7dTk0E19iqnVKOq54AS9q5R97-dyNw3vdnhXBpos',
    };

    const resp = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await resp.json();
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <form className={style.card} onSubmit={handleSubmit}>
          <h1>Signup</h1>

          {error && <p className={style.error}>{error}</p>}

          <input type="text" id="name" placeholder="Name" required />
          <input type="text" id="username" placeholder="Username" required />
          <input type="email" id="email" placeholder="Email" required />
          <input type="password" id="password" placeholder="Password" min={6} required />
          <input type="password" id="confirmPassword" placeholder="Confirm Password" min={6} required />

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
