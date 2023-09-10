import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    userName: "User1",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: "2",
    userName: "User2",
    message:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
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
        id: action.payload.id,
        userName: action.payload.userName,
        message: action.payload.message,
      });
    },
    deleteChatHandler: () => {},
    archiveChatHandler: () => {},
  },
});

export const chatsActions = chatsSlice.actions;
export const chatsReducer = chatsSlice.reducer;
