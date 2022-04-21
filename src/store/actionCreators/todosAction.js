import { ERROR, GET_TODOS, LOADING } from "../actions/todosActions";

export const loadingAction = () => {
	return {
		type: LOADING,
	}
}

export const errorAction = () => {
	return {
		type: ERROR,
	}
}

export const getTodosAction = payload => {
	return {
		type: GET_TODOS,
		payload,
	}
}
