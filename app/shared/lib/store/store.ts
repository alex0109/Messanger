import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  //slice: sliceReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export { store };
