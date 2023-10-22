import { createSlice } from "@reduxjs/toolkit";

import { loginThunk, logoutThunk, registrationThunk } from "./user-thunks";

import type { IUserState } from "../models/IUserState";
import { IUser } from "../models/IUser";

const initialState = {
  user: {},
  isAuth: false,
  loading: false,
  error: null,
} as IUserState;

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
      });
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
