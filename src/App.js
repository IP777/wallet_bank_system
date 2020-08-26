import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import style from "./App.module.css";
import NotFoundPage from "./pages/NotFoundPage";

//Асинхронная подгрузка страниц + разделение на чанки
const AsyncHome = lazy(() =>
  import("./pages/homePage/HomePage.js" /* webpackChunkName: "Home-page" */)
);
const AsyncStatistics = lazy(() =>
  import(
    "./pages/statisticsPage/StatisticsPage.js" /* webpackChunkName: "Statistics-page" */
  )
);
const AsyncRegistration = lazy(() =>
  import(
    "./pages/registrationPage/RegistrationPage.js" /* webpackChunkName: "Registration-page" */
  )
);
const AsyncLogin = lazy(() =>
  import("./pages/loginPage/LoginPage" /* webpackChunkName: "Login-page" */)
);

const App = () => {

	return (
		<Suspense
			fallback={
				<div className={style.loader}>Please wait Loading...</div>
			}
		>
			<Switch>
				<Route path="/" exact component={AsyncHome} />
				<Route path="/statistics" component={AsyncStatistics} />
				<Route path="/registration" component={AsyncRegistration} />
				<Route path="/login" component={AsyncLogin} />
				<Route component={NotFoundPage} />
			</Switch>
		</Suspense>
	);

};

export default App;
