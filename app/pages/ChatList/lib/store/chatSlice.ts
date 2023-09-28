import { createSlice } from "@reduxjs/toolkit";

import type { Chat } from "../types/interfaces";
import type { PayloadAction } from "@reduxjs/toolkit";

//Все должно быть типизированным, если добавляешь параметры к пользователю,
//то сначала описывай их в интерфейсе
const initialState: Chat[] = [
  {
    userID: "1",
    userName: "User1",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    isArchived: false,
  },
  {
    userID: "2",
    userName: "User2",
    message:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    isArchived: false,
  },
];

export const chatsSlice = createSlice({
  initialState,
  name: "chats",
  reducers: {
    addChatHandler: (
      state,
      action: PayloadAction<{ id: string; userName: string; message: string }>
    ) => {
      state.push({
        userID: action.payload.id,
        userName: action.payload.userName,
        message: action.payload.message,
        isArchived: false,
      });
    },
    deleteChatHandler: (state, action: PayloadAction<{ id: string }>) =>
      state.filter((item) => item.userID !== action.payload.id),
    archiveChatHandler: (state, action: PayloadAction<{ id: string }>) =>
      state.map((item) => {
        if (item.userID === action.payload.id) {
          return { ...item, archived: !item.isArchived };
        }
        return item;
      }),
  },
});

export const chatsActions = chatsSlice.actions;
export const chatsReducer = chatsSlice.reducer;
