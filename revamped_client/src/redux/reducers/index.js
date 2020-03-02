import { combineReducers } from "redux";
import activeTab from "./activeTabReducers";
import roomId from "./roomIdReducers";
import initialLoaded from "./initialLoadedReducers";

const rootReducer = combineReducers({
  activeTab,
  roomId,
  initialLoaded
});

export default rootReducer;
