import React from 'react';
import style from './HomePage.module.css';

import { Balance } from '../../components/Balance/Balance';
import Header from '../../containers/Header';
import TableTransactions from '../../components/TableTransactions/TableTransactions';

const HomePage = () => {
  return (
    <>
      <Header />
      <div className={style.text}>Home Page!!!</div>
      <TableTransactions />
      <Balance />
    </>
  );
};

export default HomePage;
