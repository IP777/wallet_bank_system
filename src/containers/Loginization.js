import { connect } from 'react-redux';
import { login } from '../redux/operations/app/sessionOperation';
import { getIsAuthenticated } from '../redux/selectors/app/sessionSelectors';
import Loginization from '../components/Loginization/Loginization';

const mapStateToProps = (state) => ({
  authenticated: getIsAuthenticated(state),
});

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Loginization);
