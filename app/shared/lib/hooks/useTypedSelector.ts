import { useSelector } from "react-redux";

import type { RootState } from "../store/store";
import type { TypedUseSelectorHook } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
