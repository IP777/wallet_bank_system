import React from "react";
import style from "./StatisticsPage.module.css";
import PieChartComponent from "../../components/PieChart/PieChart3";
import PieChartTable from "../../components/PieChartTable/PieChartTable";

const StatisticsPage = () => {
  const chartData = [
    { title: "One", value: 10, color: "#E38127" },
    { title: "Two", value: 15, color: "#C12C37" },
    { title: "Three", value: 10, color: "#6A2335" },
    { title: "Four", value: 12, color: "#E38647" },
    { title: "five", value: 5, color: "#D215F2" },
    { title: "six", value: 5, color: "#C63C37" },
    { title: "seven", value: 5, color: "#D273F2" },
    { title: "eight", value: 8, color: "#C83C37" },
    { title: "eight", value: 8, color: "#D293F2" },
    { title: "eight", value: 8, color: "#6A2135" },
    { title: "eight", value: 8, color: "#C13C37" },
  ];

  return (
    <>
      <div className={style.text}>Statistics Page!!!</div>
      <PieChartComponent data={chartData} />
      <PieChartTable data={chartData} />
    </>
  );
};

export default StatisticsPage;
