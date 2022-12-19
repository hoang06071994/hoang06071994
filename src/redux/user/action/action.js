import * as types from "../type";

export const showLogin = (data) => {
  return {
    type: types.SHOW_LOGIN,
    payload: data,
  };
};

export const showRrgister = (data) => {
  return {
    types: types.SHOW_REGISTER,
    payload: data,
  };
};

export const showHome = (data) => {
  return {
    type: types.SHOW_HOME,
    payload: data,
  };
};
