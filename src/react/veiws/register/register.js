import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Register = ( {
		handleSubmit,
		element,
		name,
		email,
		password,
		passwordConfirm,
		error,
		errorText,
		setName,
		setEmail,
		setPassword,
		setPasswordConfirm,
	} ) => {
	return (
		<div className="container">
			<h1>Регистрация</h1>
			<Box
				component="form"
				noValidate
				autoComplete="off" mt={4} display="flex"
				flexDirection="column" onSubmit={handleSubmit}
			>
				<TextField
					id="name"
					label="Имя"
					variant="outlined"
					sx={{ mb: 2 }}
					name="name"
					autoFocus
					autoComplete="off"
					inputRef={ element }
					value={ name }
					onChange={ event => setName( event.target.value ) }
				/>
				<TextField
					id="email"
					type="email"
					label="Email"
					variant="outlined"
					sx={{ mb: 2 }}
					autoComplete="off"
					name="email"
					value={ email }
					onChange={ event => setEmail( event.target.value ) }
				/>
				<TextField
					id="password"
					type="password"
					label="Пароль"
					variant="outlined"
					sx={{ mb: 2 }}
					autoComplete="off"
					name="password"
					value={ password }
					onChange={ event => setPassword( event.target.value ) }
				/>
				<TextField
					id="passwordConfirm"
					type="password"
					error={error}
					helperText={errorText}
					label="Подтверждение пароля"
					variant="outlined"
					sx={{ mb: 2 }}
					autoComplete="off"
					name="passwordConfirm"
					value={ passwordConfirm }
					onChange={ event => setPasswordConfirm( event.target.value ) }
				/>
				<Button
					variant="outlined"
					color="primary"
					size="small"
					type="submit"
					sx={{ mb: 4 }}
				>
					Отправить
				</Button>
			</Box>
		</div>
	)
}

export default Register;
