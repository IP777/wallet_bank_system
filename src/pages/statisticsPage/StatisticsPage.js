import React from "react";
import style from "./StatisticsPage.module.css";
import PieChartComponent from "../../components/PieChart/PieChart3";

const StatisticsPage = () => {
  const chartData = [
    ["Категории", "Сумма"],
    ["a", 12],
    ["b", 5.5],
    ["c", 10],
    ["d", 10],
    ["e", 10],
    ["f", 10],
  ];

  const data = [
    { title: "One", value: 10, color: "#E38627" },
    { title: "Two", value: 15, color: "#C13C37" },
    { title: "Three", value: 10, color: "#6A2135" },
    { title: "Four", value: 12, color: "#E38627" },
    { title: "five", value: 5, color: "#D213F2" },
    { title: "six", value: 5, color: "#C13C37" },
    { title: "seven", value: 5, color: "#D213F2" },
    { title: "eight", value: 8, color: "#C13C37" },
    { title: "eight", value: 8, color: "#D213F2" },
    { title: "eight", value: 8, color: "#6A2135" },
    { title: "eight", value: 8, color: "#C13C37" },
  ];

  return (
    <>
      <div className={style.text}>Statistics Page!!!</div>
      <PieChartComponent data={data} />
    </>
  );
};

export default StatisticsPage;
