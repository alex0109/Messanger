import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

const allActions = {};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
