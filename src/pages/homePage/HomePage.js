import React from "react";
import style from "./HomePage.module.css";
import BaseLayout from '../../components/baseLayout/baseLayout';
import { MonthSelect, YearSelect } from '../../components/transactionsFilter/transactionsFilter'

const HomePage = () => {
	return <BaseLayout>

		<MonthSelect />
		<YearSelect />

	</BaseLayout>;
};

export default HomePage;
