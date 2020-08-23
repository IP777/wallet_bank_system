import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import style from "./HomePage.module.css";
import Header from "../../components/header/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className={style.text}>Home Page!!!</div>
      <div className={style.container}>
        <div className={style.SideBar}>
          <SideBar />
        </div>
        <div>HomePage</div>
      </div>
    </>
  );
};

export default HomePage;
