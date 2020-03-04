import * as types from "../actions/actionTypes";

export default function changeConnectReducer(state = false, action) {
  switch (action.type) {
    case types.CHANGE_CONNECT:
      return !state;
    default:
      return state;
  }
}
