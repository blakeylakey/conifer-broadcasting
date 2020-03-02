import * as types from "./actionTypes";

export const setRoomIdActions = roomId => {
  return { type: types.SET_ROOM_ID, roomId };
};
