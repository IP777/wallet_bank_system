import { connect } from "react-redux";
import * as sessionOperations from "../../redux/session/sessionOperation";
import * as sessionSelectors from "../../redux/session/sessionSelectors";
import Loginization from "./Loginization";

const mapStateToProps = (state) => ({
	authenticated: sessionSelectors.getIsAuthenticated(state),
});

const mapDispatchToProps = {
	onLogin: sessionOperations.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Loginization);
