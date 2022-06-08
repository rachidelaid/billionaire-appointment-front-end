import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import style from './style.module.css';
import links from './links';
import { logout } from '../../redux/users';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  const [width, setWidth] = useState({
    transform: 'translateX(0%)',
  });
  const currentUser = useSelector((state) => (state.users.user || { role: 'everyone' }));
  const dispatch = useDispatch();

  const activeStyle = {
    backgroundColor: 'var(--green)',
    color: 'white',
  };

  const toggleMenu = () => {
    if (isNavExpanded) {
      setWidth({
        transform: 'translateX(-100%)',
      });
      setTimeout(() => {
        setIsNavExpanded(!isNavExpanded);
      }, 400);
    } else {
      setIsNavExpanded(!isNavExpanded);
      setTimeout(() => {
        setWidth({
          transform: 'translateX(0)',
        });
      }, 1);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    toggleMenu();
  };

  return (
    <div className={style.container}>
      <button
        type="button"
        style={{ opacity: !isNavExpanded ? 1 : 0 }}
        onClick={toggleMenu}
        data-testid="showNav"
        className={style.hamburger}
      >
        <i className="bi bi-list" />
      </button>
      <nav style={width} className={`${style.nav} ${style['flex-center']} ${!isNavExpanded && style.hidden}`}>
        <button
          type="button"
          onClick={toggleMenu}
          className={style['nav-hide']}
        >
          <i className="bi bi-caret-left" />
        </button>
        <div className={style['logo-container']}>
          <img
            className={style.logo}
            src="https://raw.githubusercontent.com/orozCoding/billionares-pictures/main/logo/billionaires_logo.png"
            alt="Billionaires Appointments logo"
          />
          {currentUser.username && (
          <p className={style.user}>
            Welcome
            <br />
            { currentUser.username }
          </p>
          )}
        </div>
        <ul className={`${style.links} ${style['flex-center']} ${style.list}`}>
          {links.map(({ path, description, permission }) => (
            permission.includes(currentUser.role) && (
            <li key={description}>
              <NavLink
                className={style.link}
                to={path}
                onClick={toggleMenu}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {description}
              </NavLink>
            </li>
            )
          ))}
        </ul>
        <div className={style['nav-footer']}>
          <ul className={`${style.links} ${style['flex-center']} ${style.list}`}>
            {currentUser.name ? (
              <li>
                <button
                  type="button"
                  className={`${style.link} ${style.logout}`}
                  onClick={handleLogout}
                >
                  LOGOUT
                </button>
              </li>
            ) : (
              <li>
                <NavLink
                  className={style.link}
                  to="/login"
                  onClick={toggleMenu}
                >
                  Sign In
                </NavLink>
              </li>
            )}

          </ul>
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
    </div>
  );
};
export default Navbar;
