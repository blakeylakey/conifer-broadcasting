import * as types from "../actions/actionTypes";

export default function initiatorReducers(state = false, action) {
  switch (action.type) {
    case types.SET_INITIATOR:
      return true;
    case types.REMOVE_INITIATOR:
      return false;
    default:
      return state;
  }
}
