import { combineReducers } from 'redux';
import { Type } from '../../type';

const user = (state = null, { type, payload }) => {
  switch (type) {
    case Type.LOGIN_SUCCESS:
      return payload.response.user;
    case Type.LOGOUT:
      return null;
    default:
      return state;
  }
};

const authenticated = (state = false, { type, payload }) => {
  switch (type) {
    case Type.LOGIN_SUCCESS:
      return true;
    case Type.LOGOUT:
      return false;
    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case Type.LOGIN_SUCCESS:
      return payload.response.token;
    case Type.LOGOUT:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  user,
  token,
  authenticated,
});
