import type { IUser } from "./IUser";

export interface IUserState {
  user: IUser;
  socketId: string;
  loadedUsers: IUser[];
  isAuth: boolean;
  loading: boolean;
  error: string | null;
}
