import { combineReducers } from "redux";

import profileReducer from "./reducers/profileReducer";
import { chatsReducer } from "./reducers/chatsReducer";

const rootReducer = combineReducers( {
    profile: profileReducer,
    chats: chatsReducer,
} );

export default rootReducer;
