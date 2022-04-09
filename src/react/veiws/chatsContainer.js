import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { shallowEqual } from "react-redux";
import { getChatList } from "../../store/reducers/chatsReducer/selectors";
import Chats from "./chats";

const ChatsContainer = () => {
    const dispatch = useDispatch();
    const chatList = useSelector( getChatList, shallowEqual );
    const [name, setName] = useState('');

    function handleInputChange(event) {
        setName(event.target.value);
    }

    const addNewChat = event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        return dispatch( { type: 'addChat', payload: formData.get('name') });
    }
    const deleteChat = ( event, id ) => {
        event.preventDefault();
        return dispatch( { type: 'deleteChat', payload: id });
    }

    return (
        <Chats
            chatList={chatList}
            deleteChat={deleteChat}
            addNewChat={addNewChat}
            handleInputChange={handleInputChange}
            name={name}
        />
    );
};

export default ChatsContainer;
