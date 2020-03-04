import * as types from "./actionTypes";

export const setStreamerCount = count => {
  return { type: types.SET_STREAMER_COUNT, count };
};
