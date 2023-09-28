import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { chatsActions } from "@/pages/ChatList/lib/store/chatSlice";

const allActions = {
  ...chatsActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
