import $api from "../http";

import type { IUser } from "../models/IUser";

import type { AxiosResponse } from "axios";

export default class AuthService {
  static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.post<IUser[]>("/users");
  }
}
