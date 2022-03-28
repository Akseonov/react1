import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const Chat = () => {
    const { id } = useParams();

    const [messageList, setMessageList] = useState([]);
    const [element] = useState(React.createRef());

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
        <div className="container">
            <h1>Чат №{id}</h1>
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
    );
};

export default Chat;
