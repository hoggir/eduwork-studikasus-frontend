import { LOGIN_SUCCESS } from "../../actions/userAction";
import { REGISTER_SUCCESS } from "../../actions/userAction";
import { LOGOUT_SUCCESS } from "../../actions/userAction";

const initialState = {
  userLoginResult: false,
  userLoginLoading: false,
  userLoginError: false,
  userLoginisAuth: false,
  userLoginToken: null,

  isAuth: false,
  user: null,
  token: null,

  userRegisterResult: false,
  userRegisterLoading: false,
  userRegisterError: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", JSON.stringify(action.payload.data.token));

      return {
        ...state,
        userLoginResult: action.payload.data,
        userLoginLoading: action.payload.loading,
        userLoginError: action.payload.errorMessage,
        userLoginisAuth: action.payload.isAuth,
        userLoginToken: action.payload.data,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        userRegisterResult: action.payload.data,
        userRegisterLoading: action.payload.loading,
        userRegisterError: action.payload.errorMessage,
      };

    case LOGOUT_SUCCESS:
      //localStorage.clear();
      return {
        ...state,
        user: null,
        token: null,
        isAuth: false,
      };

    default:
      return state;
  }
};

export default userReducer;
