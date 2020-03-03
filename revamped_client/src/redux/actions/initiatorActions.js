import * as types from "./actionTypes";

export const setInitiator = () => {
  return { type: types.SET_INITIATOR };
};

export const removeInitiator = () => {
  return { type: types.REMOVE_INITIATOR };
};
