import { createSlice } from "@reduxjs/toolkit";

import {
  getUsersThunk,
  loginThunk,
  logoutThunk,
  registrationThunk,
  requestFriendThunk,
  updateSocketThunk,
} from "./user-thunks";

import type { IUser } from "../models/IUser";
import type { IUserState } from "../models/IUserState";

const initialState: IUserState = {
  user: {
    id: "",
    email: "",
    password: "",
    outgoingRequests: [],
    incomingRequests: [],
    contacts: [],
    registeredAt: "",
  },
  socketId: "",
  loadedUsers: [],
  isAuth: false,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    authentificate: (state) => {
      state.isAuth = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuth = true;
        state.loading = false;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.error = action.payload?.message;
        state.loading = false;
      })
      .addCase(registrationThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registrationThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuth = true;
        state.loading = false;
      })
      .addCase(registrationThunk.rejected, (state, action) => {
        state.error = action.payload?.message;
        state.loading = false;
      })
      .addCase(logoutThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        state.user = {} as IUser;
        state.isAuth = false;
        state.loading = false;
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.error = action.payload?.message;
        state.loading = false;
      })
      .addCase(getUsersThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsersThunk.fulfilled, (state, action) => {
        state.loadedUsers = action.payload.filter((loadedUser) => state.user.id !== loadedUser._id);
        state.loading = false;
      })
      .addCase(getUsersThunk.rejected, (state, action) => {
        state.error = action.payload?.message;
        state.loading = false;
      })
      .addCase(requestFriendThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(requestFriendThunk.fulfilled, (state, action) => {
        state.user.outgoingRequests.push(action.payload.receiverID);
        state.loading = false;
      })
      .addCase(requestFriendThunk.rejected, (state, action) => {
        state.error = action.payload?.message;
        state.loading = false;
      })
      .addCase(updateSocketThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSocketThunk.fulfilled, (state, action) => {
        state.socketId = action.payload;
        state.loading = false;
      })
      .addCase(updateSocketThunk.rejected, (state, action) => {
        state.error = action.payload?.message;
        state.loading = false;
      });
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
