import React from "react";
import "./RegisterComponent.css";
import { NavLink } from "react-router-dom";

const RegisterComponent  = () => {
  return (
    <div class= 'sign-up-wrapper'>
      {/* <div class= 'logo-bar'>
        <a class="logo bounce" href="/"> 
          <img class="logo-img bounce" src="https://i.ibb.co/DpJMt9M/mobile-logo1.png" alt="Wallet" />
          <span class="logo-name bounce">Wallet</span>
         </a>
      </div> */}
      <div className="form-container">
        <form className="sign-up-form">
          <input type="email" name="email" placeholder="E-mail" className="email-input"/>
          <input name="password" type="password" minLength="3" placeholder="Пароль" className="password-input"/>
          <input type="password" name="applyPassword" placeholder="Подтвердить пароля" className="applyPassword-input" />
          <input type="name" name="name" placeholder="Имя" className="name-input"/>
          <button label="Регистрация" type="submit" className="sign-up-button">
             Регистрация
          </button>
          <span className="login">
             <NavLink to="/login" className="login-link">Войти</NavLink>
          </span>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;