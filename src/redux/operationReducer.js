import { combineReducers } from "redux";
import { Type } from "./type";

const operationReducer = (state = [], { type, payload }) => {
	switch (type) {
		case Type.FETCH_POSTS_SUCCESS:
			return payload.posts;
		default:
			return state;
	}
};

export const rootReducer = combineReducers({
	operation: operationReducer,
});
