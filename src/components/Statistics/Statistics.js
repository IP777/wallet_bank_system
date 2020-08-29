import React from 'react';
import {
  MonthSelect,
  YearSelect,
} from '../TransactionsFilter/TransactionsFilter';
import PieChart from '../PieChart/PieChart';
import PieChartTable from '../PieChartTable/PieChartTable';
import style from './Statistics.module.css';

export default function Statistics() {
  const chartData = [
    { title: 'One', value: 10, color: '#E38127' },
    { title: 'Two', value: 15, color: '#C12C37' },
    { title: 'Three', value: 10, color: '#6A2335' },
    { title: 'Four', value: 12, color: '#E38647' },
    { title: 'five', value: 5, color: '#D215F2' },
    { title: 'six', value: 5, color: '#C63C37' },
    { title: 'seven', value: 5, color: '#D273F2' },
    { title: 'eight', value: 8, color: '#C83C37' },
  ];
  return (
    <React.Fragment>
      <div className={style.mainWrapper}>
        <div className={style.header}>Статистика</div>
        <div className={style.wrapper}>
          <div className={style.wrapperDiagramme}>
            <div className={style.diagramme}>diagramme Component here</div>
          </div>
          <div className={style.wrapperFS}>
            <div className={style.filterWrapper}>
              <MonthSelect />
              <YearSelect />
            </div>
            <div className={style.statistic}>statistics Component here</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
