import React from "react";
import style from "./StatisticsPage.module.css";
import PieChart from "../../components/PieChart/PieChart";
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
  ];

  return (
    <>
      <div className={style.text}>Statistics Page!!!</div>
      <PieChart data={chartData} />
      <PieChartTable data={chartData} />
    </>
  );
};

export default StatisticsPage;
