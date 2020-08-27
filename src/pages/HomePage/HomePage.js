import React from "react";
import style from "./HomePage.module.css";

import Header from "../../components/header/Header";
import TableTransactions from "../../components/TableTransactions/TableTransactions";
import ModalPage from "../modalPage/ModalPage";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className={style.text}>Home Page!!!</div>
      <TableTransactions />
      <ModalPage />
    </>
  );
};

export default HomePage;
