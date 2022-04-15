import { ADD_MESSAGE, ADD_CHAT, DELETE_CHAT } from "../actions/chatsAction";

export const addMessageAction = payload => {
	return {
		type: ADD_MESSAGE,
		payload,
	}
};

export const addNewChatAction = payload => {
	return {
		type: ADD_CHAT,
		payload,
	}
}

export const deleteChatAction = payload => {
	return {
		type: DELETE_CHAT,
		payload
	}
}

