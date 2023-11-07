import axios from "axios";

import * as SecureStore from "expo-secure-store";

export const API_URL = "http://10.0.2.2:8000/api";

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
