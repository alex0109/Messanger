import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import { chatsReducer } from "../../../pages/ChatsHub/lib/store/chatSlice";
import { dialogReducer } from "@/pages/ChatsHub/lib/store/dialogSlice";

const rootReducer = combineReducers({
  //slice: sliceReducer
  chats: chatsReducer,
  dialogs: dialogReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export { store };
