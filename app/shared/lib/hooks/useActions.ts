import { dialogActions } from "./../../../pages/ChatsHub/lib/store/dialogSlice";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { chatsActions } from "../../../pages/ChatsHub/lib/store/chatSlice";

const allActions = {
  ...chatsActions,
  ...dialogActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
