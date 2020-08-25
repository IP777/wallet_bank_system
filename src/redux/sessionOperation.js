import { loginRequest, loginSuccess, loginError } from "./sessionAction";
import sessionApi from "../services/session-api";

export const login = (credentials) => (dispatch) => {
	dispatch(loginRequest());

	sessionApi
		.login(credentials)
		.then((response) => {
			console.log(response);

			dispatch(loginSuccess(response));
		})
		.catch((error) => {
			console.log(error);

			dispatch(loginError(error));
		});
};
