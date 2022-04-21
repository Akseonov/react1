import React, { useEffect, useState } from "react";
import Login from "./login";
import { useDispatch, useSelector } from "react-redux";
import { currentUserSelector } from "../../../store/reducers/authRducer/selectors";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../store/reducers/authReducer";

const LoginContainer = () => {
	const [ element ] = useState( React.createRef() );
	const [ email, setEmail ] = useState( '' );
	const [ password, setPassword ] = useState( '' );
	const user = useSelector( currentUserSelector );
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function focusTextField( input ) {
		if ( input ) {
			input.focus();
		}
	}

	useEffect( () => {
		if ( user ) {
			navigate( '/' );
		}
	}, [ user, navigate ] );

	useEffect( () => {
		setTimeout( () => {
			focusTextField( element.current );
		}, 1500 );
	}, [ element ] );

	function handleSubmit( event ) {
		event.preventDefault();

		if ( !email || !password  ) {
			return;
		}

		dispatch( loginUser( email, password ) );
	}

	return (
		<Login
			element={element}
			handleSubmit={handleSubmit}
			email={email}
			password={password}
			setEmail={setEmail}
			setPassword={setPassword}
		/>
	);
};

export default LoginContainer;
