import { combineReducers } from "redux";
import { Type } from "./type";

const user = (state = {}, { type, payload }) => {
	switch (type) {
		default:
			return state;
	}
};
const token = (state = null, { type, payload }) => {
	switch (type) {
		default:
			return state;
	}
};
const error = (state = null, { type, payload }) => {
	switch (type) {
		default:
			return state;
	}
};

export const rootReducer = combineReducers({
	user,
	token,
	error,
});
