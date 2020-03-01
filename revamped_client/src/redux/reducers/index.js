import { combineReducers } from "redux";
import activeTab from "./activeTabReducers";

const rootReducer = combineReducers({
  activeTab
});

export default rootReducer;
