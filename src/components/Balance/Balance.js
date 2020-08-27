import React from 'react';
import style from './Balance.module.css';

console.log(style);

export const Balance = () => {
  return (
    <>
      <div className={style.balance}>
        <p>Баланс</p>
        <span>24 000.00 грн</span>
      </div>
    </>
  );
};
