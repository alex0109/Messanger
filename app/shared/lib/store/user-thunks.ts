import { createAsyncThunk } from "@reduxjs/toolkit";

import * as SecureStore from "expo-secure-store";

import AuthService from "@/shared/api/services/AuthService";

import UserService from "@/shared/api/services/UserService";

import type { IFriendshipResponse } from "../models/IFRResponses";
import type { IUser } from "../models/IUser";

export const loginThunk = createAsyncThunk<
  IUser,
  { email: string; password: string },
  { rejectValue: string }
>("user/loginThunk", async function (credentials, { rejectWithValue }) {
  try {
    const response = await AuthService.login(credentials.email, credentials.password);

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
    const response = await AuthService.registration(credentials.email, credentials.password);
    await SecureStore.setItemAsync("token", response.data.accessToken);

    return response.data.user;
  } catch (error) {
    return rejectWithValue(error.response?.data);
  }
});

export const logoutThunk = createAsyncThunk<null, null, { rejectValue: string }>(
  "user/logoutThunk",
  async function (_, { rejectWithValue }) {
    try {
      await AuthService.logout();
      await SecureStore.deleteItemAsync("token");

      return null;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const getUsersThunk = createAsyncThunk<IUser[], null, { rejectValue: string }>(
  "user/getUsersThunk",
  async function (_, { rejectWithValue }) {
    try {
      const response = await UserService.fetchUsers();

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const requestFriendThunk = createAsyncThunk<
  IFriendshipResponse,
  { receiverID: string; firstMessage: string },
  { rejectValue: string }
>("user/requestFriendThunk", async function (credentials, { rejectWithValue }) {
  try {
    const response = await UserService.sendFriendRequest(
      credentials.receiverID,
      credentials.firstMessage
    );

    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data);
  }
});
