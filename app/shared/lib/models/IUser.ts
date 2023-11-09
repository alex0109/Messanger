export interface IUser {
  id: string;
  email: string;
  password: string;
  socketId: string | null;
  outgoingRequests: string[];
  incomingRequests: string[];
  contacts: string[];
  registeredAt: string;
}
