import React from 'react';
import Header from '../../components/Header/Header';
import TableTransactions from '../../components/TableTransactions/TableTransactions';
import ModalPage from '../ModalPage/ModalPage';

const HomePage = () => {
  return (
    <>
      <Header />
      <TableTransactions />
      <ModalPage />
    </>
  );
};

export default HomePage;
