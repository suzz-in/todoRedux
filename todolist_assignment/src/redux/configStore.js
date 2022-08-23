import { createStore, combineReducers } from "redux";
import mytodo from "./modules/mytodo";

const rootReducer = combineReducers({ mytodo: mytodo });

const store = createStore(rootReducer);

export default store;
