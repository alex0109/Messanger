import axios from "axios";

import * as SecureStore from "expo-secure-store";

const url = process.env.EXPO_PUBLIC_LOCAL_URL;

export const API_URL = `${url}/api`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default $api;
