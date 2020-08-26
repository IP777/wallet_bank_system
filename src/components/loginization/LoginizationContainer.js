import { connect } from "react-redux";
import * as sessionOperations from "../../redux/sessionOperation";
import * as sessionSelectors from "../../redux/sessionSelectors";
import Loginization from "./Loginization";

const mapStateToProps = (state) => ({
	authenticated: sessionSelectors.getIsAuthenticated(state),
});

const mapDispatchToProps = {
	onLogin: sessionOperations.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Loginization);
