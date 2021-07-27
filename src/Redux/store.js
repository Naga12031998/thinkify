import { createStore, combineReducers } from "redux";
import { reducer } from "./reducer";

const rootReducer = combineReducers({
  authors: reducer,
});

export const store = createStore(rootReducer);
