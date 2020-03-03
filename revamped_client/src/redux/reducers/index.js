import { combineReducers } from "redux";
import activeTab from "./activeTabReducers";
import roomId from "./roomIdReducers";
import initialLoaded from "./initialLoadedReducers";
import init from "./initiatorReducers";

const rootReducer = combineReducers({
  activeTab,
  roomId,
  initialLoaded,
  init
});

export default rootReducer;
