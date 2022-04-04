export function getChatList(state) {
    return state.chats.chatList;
}

export function getChat(id) {
    return state => state.chats.chatList.filter( chat => chat.id === +id )[0];
}
