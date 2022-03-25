import React, {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
    },
});

function App() {
    const [messageList, setMessageList] = useState([]);
    const [element, setElement] = useState(React.createRef());
    const [chatList, setChatList] = useState([
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

    function focusTextField(input) {
        if (input) {
            input.focus();
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        const target = event.target;
        const author = target.author.value;
        const text = target.text.value;

        setMessageList(prev => [...prev, {
            id: giveLastId(prev),
            author: author,
            text: text,
        }]);
    }

    function giveLastId(array) {
        return array.length ? array[array.length - 1].id + 1 : 0;
    }

    useEffect( () => {
        setTimeout( () => {
            botAnswer(messageList);
            focusTextField(element.current);
        }, 1500 );
    }, [messageList] );

    function botAnswer() {
        const lastAuthor = messageList[messageList.length - 1];
        if (lastAuthor && lastAuthor.author) {
            setMessageList(prev => [...prev, {
                id: giveLastId(prev),
                text: `Сообщение автора ${lastAuthor.author} отправлено`,
            }]);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0, }}>
                    <List subheader={<ListSubheader>Чаты</ListSubheader>}
                          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {
                            chatList.map( chat => <ListItem key={chat.id}>
                                <ListItemButton>
                                    <ListItemText primary={chat.name} />
                                </ListItemButton>
                            </ListItem> )
                        }
                    </List>
                </div>
                <div className="container">
                    <Box component="form" noValidate
                         autoComplete="off" mt={4} display="flex"
                         flexDirection="column" onSubmit={handleSubmit}>
                        <TextField id="name" label="Имя"
                                   variant="outlined" sx={{ mb: 2 }}
                                   name="author" autoFocus
                                   inputRef={element} />
                        <TextField id="message" label="Сообщение"
                                   variant="outlined" sx={{ mb: 2 }}
                                   name="text" />
                        <Button variant="outlined" color="primary"
                                size="small" type="submit" sx={{ mb: 4 }}>Отправить</Button>
                    </Box>
                    <div className="message-list">
                        {messageList.map( message => <div className="message-list__item" key={message.id}>
                            { message.author && <p className="message-list__p"><span>Автор:</span> {message.author}</p>}
                            <p className="message-list__p">{ message.author && <span>Текст:</span>} {message.text}</p>
                        </div> )}
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
