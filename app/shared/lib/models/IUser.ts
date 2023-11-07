export interface IUser {
  id: string;
  email: string;
  password: string;
  outgoingRequests: string[];
  incomingRequests: string[];
  contacts: string[];
  registeredAt: string;
}
