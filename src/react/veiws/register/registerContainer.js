import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Register from "./register";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../store/reducers/authReducer";
import { currentUserSelector } from "../../../store/reducers/authRducer/selectors";

const RegisterContainer = () => {
	const [ element ] = useState( React.createRef() );
	const [ name, setName ] = useState( '' );
	const [ email, setEmail ] = useState( '' );
	const [ password, setPassword ] = useState( '' );
	const [ passwordConfirm, setPasswordConfirm ] = useState( '' );
	const [ error, setError ] = useState( false );
	const [ errorText, setErrorText ] = useState( '' );
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

		if ( password !== passwordConfirm ) {
			setError( true );
			setErrorText( 'Ваши пароли не совпадают' );
			return;
		}

		setError( false );
		setErrorText( '' );
		dispatch( registerUser( name, email, password ) );
	}

	return (
		<Register
			element={element}
			handleSubmit={handleSubmit}
			name={name}
			email={email}
			password={password}
			passwordConfirm={passwordConfirm}
			error={error}
			errorText={errorText}
			setName={setName}
			setEmail={setEmail}
			setPassword={setPassword}
			setPasswordConfirm={setPasswordConfirm}
		/>
	);
};

export default RegisterContainer;
