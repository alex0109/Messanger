export interface IRejectFriendshipResponse {
  message: string;
  requestID: string;
}

export interface IAcceptFriendshipResponse extends IRejectFriendshipResponse {
  firstMessage: string;
}

export interface IFriendshipResponse extends IAcceptFriendshipResponse {
  sender: string;
  receiverID: string;
}
