import React from "react";
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import ProfileContainer from "./veiws/prifile/profileContainer";
import Main from "./veiws/layouts/main";
import NotFound from "./veiws/notFound";
import ChatContainer from "./veiws/chat/chatContainer";
import ChatDef from "./veiws/chat/chatDef";
import ChatsContainer from "./veiws/chats/chatsContainer";
import TodosContainer from "./veiws/todos/todosContainer";

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
                        <Route path='/' element={<ChatsContainer />}>
                            <Route path='/:id' element={<ChatContainer />} />
                            <Route index element={<ChatDef />} />
                        </Route>
                        <Route path='/profile' element={<ProfileContainer />} />
                        <Route path='/todos' element={<TodosContainer />} />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
