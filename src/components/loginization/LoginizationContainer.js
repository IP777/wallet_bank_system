import { connect } from "react-redux";
import * as sessionOperations from "../../redux/sessionOperation";
import Loginization from "./Loginization";

const mapDispatchToProps = {
	onLogin: sessionOperations.login,
};

export default connect(null, mapDispatchToProps)(Loginization);
