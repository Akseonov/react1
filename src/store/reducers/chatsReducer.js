import { ADD_MESSAGE, DELETE_CHAT, ADD_CHAT } from "../actions/chatsAction";

const initialState = {
    chatList: [
        {
            id: 0,
            title: 'Друзья',
            messages: []
        },
        {
            id: 1,
            title: 'Семья',
            messages: []
        },
        {
            id: 2,
            title: 'Работа',
            messages: []
        }
    ]
}

export function chatsReducer( state = initialState, action ) {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [...state.chatList, {
                    id: state.chatList[state.chatList.length - 1].id + 1,
                    title: action.payload,
                    messages: [],
                }]
            }
        case DELETE_CHAT:
            return {
                ...state,
                chatList: state.chatList.filter( chat => chat.id !== action.payload )
            }
        case ADD_MESSAGE:
            const arr = [...state.chatList];
            const chat = arr.find( chat => chat.id === +action.payload.chatId );
            chat.messages = [...chat.messages, {
                id: chat.messages.length ? chat.messages[chat.messages.length - 1].id + 1 : 0,
                author: action.payload.author ? action.payload.author : '',
                text: action.payload.text,
            } ];
            return {
                ...state,
                chatList: arr,
            }
        default:
            return state;
    }
}

export const botMessage = store => next => action => {
    if ( action.type === ADD_MESSAGE ) {
        if ( action.payload.author ) {
            setTimeout( () => {
                store.dispatch( { type: ADD_MESSAGE, payload: {
                        chatId: action.payload.chatId,
                        author: false,
                        text: `Сообщение автора ${action.payload.author} отправлено`,
                    } } );
            }, 1500 )
        }
    }

    return next( action );
}

