import React from "react";
import style from "./HomePage.module.css";
import Header from "../../components/header/Header";
import Modal from "../modalPage/ModalPage";

const HomePage = () => {
  return (
    <>
      <Header />
      <Modal />
      <div className={style.text}>Home Page!!!</div>
    </>
  );
};

export default HomePage;
