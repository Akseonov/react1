const initialState = {
    todos: [],
    loading: false,
    error: false,
}

export function todosReducer( state = initialState, action ) {
    switch (action.type) {
        case 'getTodos': {
            console.log(action.payload);
            return {
                ...state,
                todos: action.payload,
                loading: false,
                error: false,
            }
        }
        case 'loading': {
            return {
                ...state,
                loading: true
            }
        }
        case 'error': {
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
        dispatch( {
            type: 'loadingStart',
        } );
        try {
            const result = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20');
            const todos = await result.json();
            dispatch( {
                type: 'getTodos',
                payload: todos,
            } )
        } catch (e) {
            dispatch( {
                type: 'error',
            } );
        }
    }
}
