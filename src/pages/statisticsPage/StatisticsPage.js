import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/header/Header";
import style from "./StatisticsPage.module.css";

const StatisticsPage = () => {
  return (
    <>
      <Header />
      <div className={style.mainContainer}>
        <div className={style.SideBar}>
          <SideBar />
        </div>
        <div>Statistics Page!!!</div>
      </div>
    </>
  );
};

export default StatisticsPage;
