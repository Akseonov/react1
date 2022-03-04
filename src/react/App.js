import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messageList: [],
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.botAnswer = this.botAnswer.bind(this);
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
            <div className="App">
                <div className="container">
                    <form onSubmit={this.handleSubmit} className="form">
                        <label className="form__label">
                            <span className="form__span">Имя:</span>
                            <input className="form__input" type="text" name="author"/>
                        </label>
                        <label className="form__label">
                            <span className="form__span">Сообщение:</span>
                            <input className="form__input" type="textarea" name="text"/>
                        </label>
                        <input className="form__button" type="submit" value="Отправить"/>
                    </form>
                    <div className="message-list">
                        {this.state.messageList.map(message => <div className="message-list__item" key={message.id}>
                            {message.author && <p className="message-list__p"><span>Автор:</span> {message.author}</p>}
                            <p className="message-list__p">{message.author && <span>Текст:</span>} {message.text}</p>
                        </div>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
