import { combineReducers } from "redux";
import { Type } from "./type";

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

const error = (state = null, { type, payload }) => {
	switch (type) {
		case Type.LOGIN_ERROR:
			return payload.error;
		default:
			return state;
	}
};

export const rootReducer = combineReducers({
	user,
	token,
	error,
	authenticated,
});
