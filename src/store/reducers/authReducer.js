import {
	LOGIN_ERROR,
	LOGIN_START,
	LOGIN_SUCCESS, LOGOUT_ERROR, LOGOUT_START, LOGOUT_SUCCESS,
	REGISTER_ERROR,
	REGISTER_START,
	REGISTER_SUCCESS
} from "../actions/authAction";
import {
	loginError,
	loginStart,
	loginSuccess, logoutError, logoutStart, logoutSuccess,
	registerError,
	registerStart,
	registerSuccess
} from "../actionCreators/authAction";
import { auth } from '../../services/firebase';

const initialState = {
	loading: false,
	error: null,
	currentUser: null,
}

export function authReducer ( state = initialState, action ) {
	switch ( action.type ) {
		case REGISTER_START:
		case LOGIN_START:
		case LOGOUT_START:
			return {
				...state,
				loading: true,
			}
		case LOGOUT_SUCCESS:
			return {
				...state,
				currentUser: null,
			}
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				loading: false,
			}
		case REGISTER_ERROR:
		case LOGIN_ERROR:
		case LOGOUT_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false,
			}

		default:
			return state;
	}
}

export const registerUser = ( name, email, password ) => {
	return ( dispatch ) => {
		dispatch( registerStart() );

		auth
			.createUserWithEmailAndPassword( email, password )
			.then( ( { user } ) => {
				user.updateProfile( {
					displayName: name,
				} )

				dispatch( registerSuccess(user) );
			} )
			.catch( error => {
				dispatch( registerError(error) );
			} )
	}
}

export const loginUser = ( email, password ) => {
	return ( dispatch ) => {
		dispatch( loginStart() );

		auth
			.signInWithEmailAndPassword( email, password )
			.then( ( { user } ) => {
				dispatch( loginSuccess( user ) );
			} )
			.catch( error => {
				dispatch( loginError( error ) );
			} )
	}
}

export const logoutUser = () => {
	return ( dispatch ) => {
		dispatch( logoutStart() );
		auth
			.signOut()
			.then( res => {
				dispatch( logoutSuccess() );
			} )
			.catch( error => {
				dispatch( logoutError( error ) );
			} )
	}
}
