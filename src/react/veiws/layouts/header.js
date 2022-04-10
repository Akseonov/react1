import React from 'react';
import {NavLink} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
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
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
