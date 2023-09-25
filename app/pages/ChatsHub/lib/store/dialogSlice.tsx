import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    messages: [
      {
        id: "1",
        sender: "@Liroy",
        message:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        readed: false,
      },
    ],
  },
];

const dialogSlice = createSlice({
  initialState,
  name: "dialogs",
  reducers: {
    addMessageHendler: (
      state,
      action: PayloadAction<{
        id: string;
        sender: string;
        message: string;
        readed: boolean;
      }>
    ) => {
      state.push({
        id: action.payload.id,
        sender: action.payload.sender,
        message: action.payload.message,
        readed: false,
      });
    },
    deleteMessage: () => {},
    editMessage: () => {},
  },
});
export const dialogActions = dialogSlice.actions;
export const dialogReducer = dialogSlice.reducer;
