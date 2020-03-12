import * as types from "./actionTypes";

export const changeConnect = () => {
  return { type: types.CHANGE_CONNECT };
};

export const setConnect = () => {
  return { type: types.SET_CONNECT };
};

export const remConnect = () => ({ type: types.REM_CONNECT });
