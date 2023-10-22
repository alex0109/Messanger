import $api from "../http";

import type { IUser } from "../../lib/models/IUser";

import type { AxiosResponse } from "axios";

export default class UserService {
  static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.post<IUser[]>("/users");
  }
}
