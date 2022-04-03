import { createStore } from 'redux';
import { profileReducer } from "./reducers/profileReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
    profileReducer,
    composeWithDevTools(),
);
