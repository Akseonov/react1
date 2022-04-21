import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getChatList } from "../../../store/reducers/chatsReducer/selectors";
import Chat from "./chat";
import { addMessageAction } from "../../../store/actionCreators/chatsAction";

export const addMessage = ( dispatch, message ) => {
    return dispatch( addMessageAction( message ) );
}

export const ChatContainer = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [ element ] = useState( React.createRef() );
    const chatList = useSelector( getChatList );
    const chat = chatList.filter( chat => chat.id === +id )[ 0 ];
    const messageList = chat.messages;

    // function addMessage( message ) {
    //     return dispatch( addMessageAction( message ) );
    // }

    function focusTextField( input ) {
        if ( input ) {
            input.focus();
        }
    }

    function handleSubmit( event ) {
        event.preventDefault();
        const formData = new FormData( event.target );

        addMessage( dispatch, {
            chatId: +id,
            author: formData.get( 'author' ),
            text: formData.get( 'text' ),
        } );
    }

    useEffect( () => {
        setTimeout( () => {
            focusTextField( element.current );
        }, 1500 );
    }, [ messageList, element ] );

    return (
        <Chat
            title={ chat.title }
            handleSubmit={ handleSubmit }
            element={ element }
            messageList={ messageList }
        />
    );
};
