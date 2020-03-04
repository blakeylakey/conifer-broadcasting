import * as types from "../actions/actionTypes";

export default function addStreamerReducer(state = 0, action) {
  switch (action.type) {
    case types.SET_STREAMER_COUNT:
      return action.count;
    default:
      return state;
  }
}
