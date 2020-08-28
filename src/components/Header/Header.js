import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = ({ userName, isLoggedIn, logout }) => {
  const handelLogout = () => {
    console.log('Click');
    logout();
  };
  return (
    <div className={style.wrapper}>
      <NavLink className={style.logo} to="/" />

      {isLoggedIn && (
        <div className={style.btnBlock}>
          <NavLink className={style.loginBtn} to="/login">
            Имя
          </NavLink>
          <button
            className={style.logoutBtn}
            to="/login"
            onClick={handelLogout}
          />
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  userName: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  logout: PropTypes.func,
};

Header.defaultProps = {
  userName: '',
  isLoggedIn: true,
  logout: () => {},
};

export default Header;
