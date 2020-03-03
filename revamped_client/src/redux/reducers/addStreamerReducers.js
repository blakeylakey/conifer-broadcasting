import * as types from "../actions/actionTypes";

export default function addStreamerReducer(state = 0, action) {
  switch (action.type) {
    case types.ADD_STREAMER:
      return state + 1;
    default:
      return state;
  }
}
