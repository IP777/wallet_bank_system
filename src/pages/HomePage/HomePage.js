import React from 'react';
//import style from "./HomePage.module.css";
import Header from '../../components/Header/Header.Container';
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
