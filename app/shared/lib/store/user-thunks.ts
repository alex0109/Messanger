import { createAsyncThunk } from "@reduxjs/toolkit";

import * as SecureStore from "expo-secure-store";

import AuthService from "@/shared/api/services/AuthService";

import type { IUser } from "../models/IUser";

export const loginThunk = createAsyncThunk<
  IUser,
  { email: string; password: string },
  { rejectValue: string }
>("user/loginThunk", async function (credentials, { rejectWithValue }) {
  try {
    const response = await AuthService.login(
      credentials.email,
      credentials.password
    );

    await SecureStore.setItemAsync("token", response.data.accessToken);

    return response.data.user;
  } catch (error) {
    return rejectWithValue(error.response?.data);
  }
});

export const registrationThunk = createAsyncThunk<
  IUser,
  { email: string; password: string },
  { rejectValue: string }
>("user/registrationThunk", async function (credentials, { rejectWithValue }) {
  try {
    const response = await AuthService.registration(
      credentials.email,
      credentials.password
    );
    await SecureStore.setItemAsync("token", response.data.accessToken);

    return response.data.user;
  } catch (error) {
    return rejectWithValue(error.response?.data);
  }
});

export const logoutThunk = createAsyncThunk<
  IUser,
  null,
  { rejectValue: string }
>("user/logoutThunk", async function (_, { rejectWithValue }) {
  try {
    await AuthService.logout();
    await SecureStore.deleteItemAsync("token");
  } catch (error) {
    return rejectWithValue(error.response?.data);
  }
});
