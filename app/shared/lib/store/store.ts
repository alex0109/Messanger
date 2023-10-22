import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import thunk from "redux-thunk";

import { chatsReducer } from "@/pages/ChatList/lib/store/chatSlice";

import { userReducer } from "./user-slice";

const rootReducer = combineReducers({
  chats: chatsReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export { store };
