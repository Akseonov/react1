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

export default function chatsReducer( state = initialState, action ) {
    switch (action.type) {
        case 'addChat':
            return {
                ...state,
                chats: [...state.chatList, {
                    id: state.chatList[state.chatList.length - 1].id + 1,
                    title: action.payload,
                    messages: [],
                }]
            }
        case 'deleteChat':
            return {
                ...state,
                chats: state.chatList.filter( chat => chat.id !== action.payload )
            }
        case 'addMessage':
            // const chatIndex = state.chatList.indexOf(+action.payload.chatId);
            // console.log(chatIndex, +action.payload.chatId);
            const arr = state.chatList
            const chat = arr.find( chat => chat.id === +action.payload.chatId );
            chat.messages = [...chat.messages, {
                id: chat.messages.length ? chat.messages[chat.messages.length - 1].id + 1 : 0,
                author: action.payload.author ? action.payload.author : '',
                text: action.payload.text,
            } ]
            console.log(chat);
            return {
                ...state,
                chats: arr,
            }
        default:
            return state;
    }
}
