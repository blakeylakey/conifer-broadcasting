import { combineReducers } from "redux";
import activeTab from "./activeTabReducers";
import roomId from "./roomIdReducers";
import initialLoaded from "./initialLoadedReducers";
import init from "./initiatorReducers";
import streamers from "./addStreamerReducers";
import connect from "./changeConnectReducers";

const rootReducer = combineReducers({
  activeTab,
  roomId,
  initialLoaded,
  init,
  streamers,
  connect
});

export default rootReducer;
