import * as types from "../actions/actionTypes";

export default function activeTabReducer(state = "", action) {
  switch (action.type) {
    case types.CHANGE_ACTIVE_TAB:
      return action.newTab;
    default:
      return state;
  }
}
