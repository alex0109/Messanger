import type { IUser } from "./IUser";

export interface IUserState {
  user: IUser;
  loadedUsers: IUser[];
  isAuth: boolean;
  loading: boolean;
  error: string | null;
}
