import React from "react";
import css from "./PieChartTable.module.css";

const PieChartTable = ({ data }) => (
  <table className={css.table}>
    <tbody>
      <tr className={css.row}>
        <th className={css.cell}>Категории</th>
        <th className={css.cell}>Сумма</th>
      </tr>
      {data.map((item) => (
        <tr key={item.title} className={css.row}>
          <td className={css.colorCell}>
            <span
              className={css.span}
              style={{
                backgroundColor: item.color,
              }}
            ></span>
            {item.title}
          </td>
          <td className={css.valueCell}> {item.value} </td>
        </tr>
      ))}

      <tr className={css.row}>
        <td className={css.cell}>Расходы</td>
        <td className={css.cell}>
          {data
            .map((item) => item.value)
            .reduce((acc, reducer) => acc + reducer)}
        </td>
      </tr>
      <tr className={css.row}>
        <td className={css.cell}>Доходы</td>
        <td className={css.cell}>Доходы должны приходить пропсом</td>
      </tr>
    </tbody>
  </table>
);

export default PieChartTable;
