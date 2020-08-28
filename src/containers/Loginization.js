import { connect } from 'react-redux';
import * as sessionOperations from '../redux/operations/app/sessionOperation';
import * as sessionSelectors from '../redux/selectors/app/sessionSelectors';
import Loginization from '../components/Loginization/Loginization';

const mapStateToProps = (state) => ({
  authenticated: sessionSelectors.getIsAuthenticated(state),
});

const mapDispatchToProps = {
  onLogin: sessionOperations.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Loginization);
