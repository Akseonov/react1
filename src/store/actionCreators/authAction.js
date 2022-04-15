import {
	LOGIN_ERROR,
	LOGIN_START,
	LOGIN_SUCCESS, LOGOUT_ERROR, LOGOUT_START, LOGOUT_SUCCESS,
	REGISTER_ERROR,
	REGISTER_START,
	REGISTER_SUCCESS
} from "../actions/authAction";

export const registerStart = () => {
	return {
		type: REGISTER_START
	}
}

export const registerSuccess = ( user ) => {
	return {
		type: REGISTER_SUCCESS,
		payload: user,
	}
}

export const registerError = ( error ) => {
	return {
		type: REGISTER_ERROR,
		payload: error
	}
}

export const loginStart = () => {
	return {
		type: LOGIN_START
	}
}

export const loginSuccess = ( user ) => {
	return {
		type: LOGIN_SUCCESS,
		payload: user,
	}
}

export const loginError = ( error ) => {
	return {
		type: LOGIN_ERROR,
		payload: error
	}
}

export const logoutStart = () => {
	return {
		type: LOGOUT_START
	}
}

export const logoutSuccess = () => {
	return {
		type: LOGOUT_SUCCESS,
	}
}

export const logoutError = ( error ) => {
	return {
		type: LOGOUT_ERROR,
		payload: error
	}
}
