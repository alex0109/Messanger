import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import thunk from "redux-thunk";

import { chatsReducer } from "@/pages/ChatList/lib/store/chatSlice";

const rootReducer = combineReducers({
  chats: chatsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export { store };
