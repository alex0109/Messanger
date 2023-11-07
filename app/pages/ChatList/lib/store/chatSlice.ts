import { createSlice } from "@reduxjs/toolkit";

import type { Chat } from "../types/interfaces";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: Chat[] = [
  {
    userID: "1",
    userName: "Andrew",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    isArchived: false,
    isRequestApproved: true,
  },
  {
    userID: "2",
    userName: "Sam",
    message:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    isArchived: false,
    isRequestApproved: true,
  },
  {
    userID: "3",
    userName: "Nicole",
    message:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    isArchived: false,
    isRequestApproved: true,
  },
  {
    userID: "4",
    userName: "Jul",
    message:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    isArchived: false,
    isRequestApproved: false,
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
        isRequestApproved: false,
      });
    },
    deleteChatHandler: (state, action: PayloadAction<{ id: string }>) =>
      state.filter((item) => item.userID !== action.payload.id),
    archiveChatHandler: (state, action: PayloadAction<{ userID: string }>) =>
      state.map((item) => {
        if (item.userID === action.payload.userID) {
          return { ...item, archived: !item.isArchived };
        }
        return item;
      }),
  },
});

export const chatsActions = chatsSlice.actions;
export const chatsReducer = chatsSlice.reducer;
