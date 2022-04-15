import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Login = ( {
		element,
		handleSubmit,
		email,
		password,
		setEmail,
		setPassword,
	} ) => {
	return (
		<div className="container">
			<h1>Войти</h1>
			<Box
				component="form"
				noValidate
				autoComplete="off" mt={4} display="flex"
				flexDirection="column" onSubmit={handleSubmit}
			>
				<TextField
					id="email"
					type="email"
					label="Email"
					variant="outlined"
					sx={{ mb: 2 }}
					autoComplete="off"
					inputRef={ element }
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

export default Login;
