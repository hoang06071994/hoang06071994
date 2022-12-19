import * as types from "../type";

const INITAL_STATE = {
  showLogin: false,
  showRegister: false,
  showHome: false,
};

const reducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case types.SHOW_LOGIN:
      return {
        ...state,
        showLogin: action.payload.showLogin,
      };
    case types.SHOW_REGISTER:
      return {
        ...state,
        showRegister: action.payload.showRegister,
      };
    case types.SHOW_HOME:
      return {
        ...state,
        showHome: action.payload.showHome,
      };
    default:
      return { ...state };
  }
};
export default reducer;
