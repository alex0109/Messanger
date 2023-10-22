import type { IUser } from "./IUser";

export interface IUserState {
  user: IUser;
  isAuth: boolean;
  loading: boolean;
  error: string | null;
}
