import { combineReducers } from "redux";
import activeTab from "./activeTabReducers";
import roomId from "./roomIdReducers";
import initialLoaded from "./initialLoadedReducers";
import init from "./initiatorReducers";
import streamers from "./addStreamerReducers";

const rootReducer = combineReducers({
  activeTab,
  roomId,
  initialLoaded,
  init,
  streamers
});

export default rootReducer;
