import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { botMessage } from "./reducers/chatsReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage
}

const persistRed = persistReducer( persistConfig, rootReducer )

export const store = createStore(
    persistRed,
    composeWithDevTools( applyMiddleware(
        thunk,
        botMessage
    ) ),
);

export const persistor = persistStore( store );
