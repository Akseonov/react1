import React from "react";
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

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messageList: [],
            element: React.createRef(),
            chatList: [
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
            ]
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.botAnswer = this.botAnswer.bind(this);
    }

    focusTextField(input) {
        if (input) {
            input.focus();
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const target = event.target;
        const author = target.author.value;
        const text = target.text.value;

        this.setState((state) => {
            return {
                messageList: [...state.messageList, {
                    id: this.giveLastId(state.messageList),
                    author: author,
                    text: text,
                }]
            }
        })
    }

    giveLastId(array) {
        return array.length ? array[array.length - 1].id + 1 : 0;
    }

    componentDidUpdate() {
        setTimeout( () => {
            this.focusTextField(this.state.element.current);
            this.botAnswer(this.state.messageList);
        }, 1500 );
    }

    botAnswer() {
        const lastAuthor = this.state.messageList[this.state.messageList.length - 1];
        if (lastAuthor && lastAuthor.author) {
            this.setState((state) => {
                return {
                    messageList: [...state.messageList, {
                        id: this.giveLastId(state.messageList),
                        text: `Сообщение автора ${lastAuthor.author} отправлено`,
                    }]
                }
            })
        }
    }

    render() {
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
                                this.state.chatList.map( chat => <ListItem key={chat.id}>
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
                             flexDirection="column" onSubmit={this.handleSubmit}>
                            <TextField id="name" label="Имя"
                                       variant="outlined" sx={{ mb: 2 }}
                                       name="author" autoFocus
                                       inputRef={this.state.element} />
                            <TextField id="message" label="Сообщение"
                                       variant="outlined" sx={{ mb: 2 }}
                                       name="text" />
                            <Button variant="outlined" color="primary"
                                    size="small" type="submit" sx={{ mb: 4 }}>Отправить</Button>
                        </Box>
                        {/*<form onSubmit={this.handleSubmit} className="form">*/}
                        {/*    <label className="form__label">*/}
                        {/*        <span className="form__span">Имя:</span>*/}
                        {/*        <input className="form__input" type="text" name="author"/>*/}
                        {/*    </label>*/}
                        {/*    <label className="form__label">*/}
                        {/*        <span className="form__span">Сообщение:</span>*/}
                        {/*        <input className="form__input" type="textarea" name="text"/>*/}
                        {/*    </label>*/}
                        {/*    <input className="form__button" type="submit" value="Отправить"/>*/}
                        {/*</form>*/}
                        <div className="message-list">
                            {this.state.messageList.map(message => <div className="message-list__item" key={message.id}>
                                {message.author && <p className="message-list__p"><span>Автор:</span> {message.author}</p>}
                                <p className="message-list__p">{message.author && <span>Текст:</span>} {message.text}</p>
                            </div>)}
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
