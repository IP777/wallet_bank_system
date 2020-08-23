import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import style from "./StatisticsPage.module.css";

const StatisticsPage = () => {
  return (
    <div className={style.container}>
      <div className={style.SideBar}>
        <SideBar />
      </div>
      <div>Statistics Page!!!</div>
    </div>
  );
};

export default StatisticsPage;
