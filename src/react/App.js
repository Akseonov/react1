import React, {useEffect, useState} from "react";
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import Chats from "./veiws/chats";
import Profile from "./veiws/profile";
import Main from "./veiws/layouts/main";
import NotFound from "./veiws/notFound";
import Chat from "./veiws/chat";
import ChatDef from "./veiws/chatDef";

const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Routes>
                    <Route path='/' element={<Main />}>
                        <Route path='/' element={<Chats />}>
                            <Route path='/:id' element={<Chat />} />
                            <Route index element={<ChatDef />} />
                        </Route>
                        <Route path='/profile' element={<Profile />} />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
