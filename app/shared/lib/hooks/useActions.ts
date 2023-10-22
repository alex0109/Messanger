import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { chatsActions } from "@/pages/ChatList/lib/store/chatSlice";

import { userActions } from "./../store/user-slice";

const allActions = {
  ...chatsActions,
  ...userActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
