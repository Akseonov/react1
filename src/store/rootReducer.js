import { combineReducers } from "redux";

import profileReducer from "./reducers/profileReducer";
import { chatsReducer } from "./reducers/chatsReducer";
import { todosReducer } from "./reducers/todosReducer";
import { authReducer } from "./reducers/authReducer";

const rootReducer = combineReducers( {
    profile: profileReducer,
    chats: chatsReducer,
    todos: todosReducer,
    auth: authReducer,
} );

export default rootReducer;
