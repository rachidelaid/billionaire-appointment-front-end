import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.module.css';

const Navbar = () => {
  const activeStyle = {
    backgroundColor: 'var(--green)',
    color: 'white',
  };

  return (
    <nav className={`${style.nav} ${style['flex-center']}`}>
      <div>
        <img
          className={style.logo}
          src="https://raw.githubusercontent.com/orozCoding/billionares-pictures/main/logo/billionaires_logo.png"
          alt="Billionaires Appointments logo"
        />
      </div>
      <ul className={`${style.links} ${style['flex-center']} ${style.list}`}>
        <li>
          <NavLink
            className={style.link}
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            BILLIONAIRES
          </NavLink>
        </li>
        <li>
          <NavLink
            className={style.link}
            to="/new/appointments"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            RESERVE BILLIONAIRE
          </NavLink>
        </li>
        <li>
          <NavLink
            className={style.link}
            to="/appointments"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            MY APPOINTMENTS
          </NavLink>
        </li>
        <li>
          <NavLink
            className={style.link}
            to="/new/billionaire"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            ADD BILLIONAIRE
          </NavLink>
        </li>
        <li>
          <NavLink
            className={style.link}
            to="/delete/billionaire"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            DELETE BILLIONAIRE
          </NavLink>
        </li>
        <li>
          <a className={style.link} href="/hello">LOGOUT</a>
        </li>
      </ul>
      <div className={style['nav-footer']}>
        <ul className={`${style.social} ${style.list}`}>
          <li>
            <a href="https://twitter.com">
              <i className="bi bi-twitter" />
            </a>
          </li>
          <li>
            <a href="https://about.facebook.com/meta/">
              <i className="bi bi-meta" />
            </a>
          </li>
          <li>
            <a href="https://myaccount.google.com/">
              <i className="bi bi-google" />
            </a>
          </li>
          <li>
            <a href="https://vimeo.com/">
              <i className="bi bi-vimeo" />
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/">
              <i className="bi bi-pinterest" />
            </a>
          </li>
        </ul>
        <small className={style.copyright}>© 2022 BOAS & R.A.M.P - RAMP</small>
      </div>

    </nav>
  );
};
export default Navbar;
