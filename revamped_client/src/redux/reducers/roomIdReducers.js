import * as types from "../actions/actionTypes";

export default function roomIdReducer(state = "", action) {
  switch (action.type) {
    case types.SET_ROOM_ID:
      return action.roomId;
    default:
      return state;
  }
}
