import React from "react";
import style from "./SideBar.module.css";
import { ReactComponent as HomeIcon } from "../../assets/svg/home.svg";
import { ReactComponent as StatisticsIcon } from "../../assets/svg/statistcis.svg";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className={style.sideBar}>
      <div className={style.linkItem}>
        <Link
          className={style.link}
          to={{
            pathname: `/`,
          }}
        >
          <HomeIcon className={style.linkSvg} />
          Главная
        </Link>
      </div>
      <div className={style.linkItem}>
        <Link
          className={style.link}
          to={{
            pathname: `/statistics`,
          }}
        >
          <StatisticsIcon className={style.linkSvg} />
          Статистика
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
