import * as types from "../actions/actionTypes";

export default function initialLoadedReducer(state = false, action) {
  switch (action.type) {
    case types.SET_INITIAL_LOADED:
      return true;
    default:
      return state;
  }
}
