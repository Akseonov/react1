import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Chat = ( { title, handleSubmit, element, messageList } ) => {
    return (
        <div className="container">
            <h1>Чат: {title}</h1>
            <Box component="form" noValidate
                 autoComplete="off" mt={4} display="flex"
                 flexDirection="column" onSubmit={handleSubmit}>
                <TextField id="name"
                           label="Имя"
                           variant="outlined"
                           sx={{ mb: 2 }}
                           autoComplete="off"
                           name="author"
                           autoFocus
                           inputRef={element} />
                <TextField id="message"
                           label="Сообщение"
                           variant="outlined"
                           sx={{ mb: 2 }}
                           autoComplete="off"
                           name="text" />
                <Button variant="outlined"
                        color="primary"
                        size="small"
                        type="submit"
                        sx={{ mb: 4 }}>Отправить</Button>
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
