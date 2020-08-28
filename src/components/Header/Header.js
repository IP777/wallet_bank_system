import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = ({ onLogOut, onLogin }) => {
	const handelLogout = () => {
		onLogOut();
	};
	return (
		<div className={style.wrapper}>
			<NavLink className={style.logo} to="/" />
			<div className={style.btnBlock}>
				<NavLink className={style.loginBtn} to="/login">
					Имя
				</NavLink>
				<NavLink
					className={style.logoutBtn}
					to="/login"
					onClick={handelLogout}
				/>
			</div>
		</div>
	);
};

export default Header;
