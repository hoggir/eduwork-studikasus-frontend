import { LOGIN_SUCCESS } from "../../actions/userAction";
import { REGISTER_SUCCESS } from "../../actions/userAction";

const initialState = {
  isAuth: false,
  user: null,
  token: null,

  userLoginResult: false,
  userLoginLoading: false,
  userLoginError: false,
  userLoginisAuth: false,
  userLoginToken: false,

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
        user: action.payload.data.user,
        token: action.payload.data.token,
        isAuth: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        userRegisterResult: action.payload.data,
        userRegisterLoading: action.payload.loading,
        userRegisterError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default userReducer;
