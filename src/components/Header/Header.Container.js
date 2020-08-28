import { connect } from "react-redux";
import * as sessionAction from "../../redux/session/sessionAction";
import Header from "./Header";

const mapDispatchToProps = {
	onLogOut: sessionAction.logOut,
};

export default connect(null, mapDispatchToProps)(Header);
