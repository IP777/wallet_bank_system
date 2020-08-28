import { connect } from 'react-redux';
import * as sessionSelectors from '../redux/selectors/app/sessionSelectors';
import App from '../App';

const mapStateToProps = (state) => ({
  authenticated: sessionSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(App);
