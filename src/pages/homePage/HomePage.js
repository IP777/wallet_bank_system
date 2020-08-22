import React from "react";
import style from "./HomePage.module.css";
import Header from "../../components/header/Header";

const HomePage = () => {
	return (
		<>
			<Header />
			<div className={style.text}>Home Page!!!</div>
		</>
	);
};

export default HomePage;
