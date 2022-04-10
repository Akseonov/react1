import { combineReducers } from "redux";

import profileReducer from "./reducers/profileReducer";
import { chatsReducer } from "./reducers/chatsReducer";
import { todosReducer } from "./reducers/todosReducer";

const rootReducer = combineReducers( {
    profile: profileReducer,
    chats: chatsReducer,
    todos: todosReducer,
} );

export default rootReducer;
