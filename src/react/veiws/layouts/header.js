import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from "react-redux";
import { currentUserSelector } from "../../../store/reducers/authRducer/selectors";
import { logoutUser } from "../../../store/reducers/authReducer";

const Header = () => {
    const user = useSelector( currentUserSelector );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = ( event ) => {
        event.preventDefault();

        if ( user ) {
            dispatch( logoutUser() );
        }

        setTimeout( () => {
            navigate('/registration');
        } )
    }

    if ( !user ) {
        return (
            <AppBar position="static">
                <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Toolbar disableGutters>
                        <MenuItem component={NavLink} to={ '/' }>
                            <Typography textAlign="center">Регистрация</Typography>
                        </MenuItem>
                        <MenuItem component={NavLink} to={ '/login' }>
                            <Typography textAlign="center">Войти</Typography>
                        </MenuItem>
                    </Toolbar>
                </Container>
            </AppBar>
        )
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center' }}>
                <Toolbar disableGutters>
                    <MenuItem component={NavLink} to={ '/' }>
                        <Typography textAlign="center">Чаты</Typography>
                    </MenuItem>
                    <MenuItem component={NavLink} to={ '/profile' }>
                        <Typography textAlign="center">Профиль</Typography>
                    </MenuItem>
                    <MenuItem component={NavLink} to={ '/todos' }>
                        <Typography textAlign="center">Задачи</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                        <Typography textAlign="center">Выйти</Typography>
                    </MenuItem>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
