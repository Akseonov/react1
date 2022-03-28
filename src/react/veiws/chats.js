import React, {useState} from "react";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import {NavLink, Outlet} from "react-router-dom";

const Chats = () => {
    const [chatList] = useState([
        {
            id: 1,
            name: "Друзья",
        },
        {
            id: 2,
            name: "Семья",
        },
        {
            id: 3,
            name: "Работа",
        },
    ]);

    return (
        <>
            <div style={{
                position: 'absolute',
                left: 0,
                top: 0, }}>
                <List subheader={<ListSubheader>Чаты</ListSubheader>}
                      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {
                        chatList.map( chat => <ListItem key={chat.id}>
                            <ListItemButton>
                                <NavLink to={`/${chat.id}`}>{chat.name}</NavLink>
                            </ListItemButton>
                        </ListItem> )
                    }
                </List>
            </div>
            <Outlet />
        </>
    );
};

export default Chats;
