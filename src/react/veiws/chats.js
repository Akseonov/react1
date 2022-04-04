import React, {useState} from "react";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import { shallowEqual } from "react-redux";
import { getChatList } from "../../store/reducers/chatsReducer/selectors";

const Chats = () => {
    const dispatch = useDispatch();
    const chatList = useSelector( getChatList, shallowEqual );
    const [name, setName] = useState('');

    function handleInputChange(event) {
        setName(event.target.value);
    }

    const addNewChat = event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        return dispatch( { type: 'addChat', payload: formData.get('name') });
    }
    const deleteChat = ( event, id ) => {
        event.preventDefault();
        return dispatch( { type: 'deleteChat', payload: id });
    }

    return (
        <>
            <div style={{
                position: 'absolute',
                left: 0,
                top: 0, }}>
                <List subheader={<ListSubheader>Чаты</ListSubheader>}
                      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {
                        chatList.map( chat => <div key={chat.id} style={{ display: 'flex' }}>
                            <ListItem component={NavLink} to={`/${chat.id}`} >
                                <ListItemButton>
                                    <Typography color="primary" textAlign="center">{chat.title}</Typography>
                                </ListItemButton>
                            </ListItem>
                            <IconButton aria-label="delete" color="primary"
                                        onClick={ event => deleteChat(event, chat.id) }>
                                X
                            </IconButton>
                        </div>)
                    }
                    <Box component="form"
                         sx={{ display: 'flex', flexDirection: 'column' }}
                         noValidate
                         onSubmit={ (event) => addNewChat(event) }
                         autoComplete="off">
                        <TextField
                            id="name"
                            name="name"
                            label="Имя нового чата"
                            multiline
                            value={name}
                            onChange={handleInputChange}
                        />
                        <Button type='submit' variant="outlined">Добавить чат</Button>
                    </Box>
                </List>
            </div>
            <Outlet />
        </>
    );
};

export default Chats;
