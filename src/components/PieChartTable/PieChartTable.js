import React from "react";
import css from "./PieChartTable.css";

const PieChartTable = ({ data }) => (
  <table className={css.table}>
    <tbody>
      <tr className={css.table}>
        <th className={css.table}>Категории</th>
        <th className={css.table}>Сумма</th>
      </tr>
      {data.map((item) => (
        <tr className={css.table}>
          <td
            style={{
              width: "15px",
              height: "15px",
              backgroundColor: item.color,
            }}
          ></td>
          <td className={css.table}>{item.title}</td>
          <td className={css.table}> {item.value} </td>
        </tr>
      ))}

      <tr className={css.table}>
        <td className={css.table}>Расходы</td>
        <td className={css.table}>
          {data
            .map((item) => item.value)
            .reduce((acc, reducer) => acc + reducer)}
        </td>
      </tr>
      <tr className={css.table}>
        <td className={css.table}>Доходы</td>
        <td className={css.table}>Доходы должны приходить пропсом</td>
      </tr>
    </tbody>
  </table>
);

export default PieChartTable;
