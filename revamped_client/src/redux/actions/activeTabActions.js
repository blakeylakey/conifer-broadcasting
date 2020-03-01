import * as types from "./actionTypes";

export const changeActiveTab = newTab => {
  return { type: types.CHANGE_ACTIVE_TAB, newTab };
};
