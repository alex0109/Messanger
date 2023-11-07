import type {
  IAcceptFriendshipResponse,
  IFriendshipResponse,
  IRejectFriendshipResponse,
} from "@/shared/lib/models/IFRResponses";

import $api from "../http";

import type { IUser } from "../../lib/models/IUser";

import type { AxiosResponse } from "axios";

export default class UserService {
  static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>("/users");
  }

  static async fetchOneUser(userID: string): Promise<AxiosResponse<IUser>> {
    return $api.get<IUser>(`/users/${userID}`);
  }

  static async sendFriendRequest(
    receiverID: string,
    firstMessage?: string
  ): Promise<AxiosResponse<IFriendshipResponse>> {
    return $api.post<IFriendshipResponse>(`/friend-request/${receiverID}`, {
      firstMessage,
    });
  }

  static async acceptFriendRequest(
    receiverID: string
  ): Promise<AxiosResponse<IAcceptFriendshipResponse>> {
    return $api.put<IAcceptFriendshipResponse>(
      `/friend-request/${receiverID}/accept`
    );
  }

  static async rejectFriendRequest(
    receiverID: string
  ): Promise<AxiosResponse<IRejectFriendshipResponse>> {
    return $api.delete<IRejectFriendshipResponse>(
      `/friend-request/${receiverID}/reject`
    );
  }
}
