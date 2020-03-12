import * as types from "../actions/actionTypes";

export default function changeConnectReducer(state = false, action) {
  switch (action.type) {
    case types.CHANGE_CONNECT:
      return !state;
    case types.SET_CONNECT:
      return true;
    case types.REM_CONNECT:
      return false;
    default:
      return state;
  }
}
