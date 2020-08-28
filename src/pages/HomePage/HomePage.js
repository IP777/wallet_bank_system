import React from 'react';
//import style from "./HomePage.module.css";
import Header from '../../containers/Header';
import TableTransactions from '../../components/TableTransactions/TableTransactions';

const HomePage = () => {
  return (
    <>
      <Header />
      <TableTransactions />
    </>
  );
};

export default HomePage;
