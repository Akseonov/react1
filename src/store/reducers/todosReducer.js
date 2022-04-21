import { ERROR, GET_TODOS, LOADING } from "../actions/todosActions";
import { errorAction, getTodosAction, loadingAction } from "../actionCreators/todosAction";

const initialState = {
    todos: [],
    loading: false,
    error: false,
}

export function todosReducer( state = initialState, action ) {
    switch (action.type) {
        case GET_TODOS: {
            return {
                ...state,
                todos: action.payload,
                loading: false,
                error: false,
            }
        }
        case LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case ERROR: {
            return {
                ...state,
                error: true
            }
        }
        default:
            return state;
    }
}

export const todosThunk = () => {
    return async ( dispatch ) => {
        dispatch( loadingAction() );
        try {
            const result = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20');
            const todos = await result.json();
            dispatch( getTodosAction( todos ) )
        } catch (e) {
            dispatch( errorAction() );
        }
    }
}
