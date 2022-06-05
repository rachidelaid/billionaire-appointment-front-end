import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.module.css';
import links from './links';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const activeStyle = {
    backgroundColor: 'var(--green)',
    color: 'white',
  };

  const currentUserRole = 'admin';

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
        className={
          isNavExpanded ? style.hidden : style.hamburger
        }
      >
        <i className="bi bi-list" />
      </button>
      <nav className={`${style.nav} ${style['flex-center']} ${!isNavExpanded && style.hidden}`}>
        <button
          type="button"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
          className={style['nav-hide']}
        >
          <i className="bi bi-caret-left" />
        </button>
        <div>
          <img
            className={style.logo}
            src="https://raw.githubusercontent.com/orozCoding/billionares-pictures/main/logo/billionaires_logo.png"
            alt="Billionaires Appointments logo"
          />
        </div>
        <ul className={`${style.links} ${style['flex-center']} ${style.list}`}>
          {links.map(({ path, description, permission }) => (
            permission.includes(currentUserRole) && (
            <li key={description}>
              <NavLink
                className={style.link}
                to={path}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {description}
              </NavLink>
            </li>
            )
          ))}
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
    </>
  );
};
export default Navbar;
