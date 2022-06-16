import { LOGIN_SUCCESS } from "../../actions/userAction";
import { REGISTER_SUCCESS } from "../../actions/userAction";
import { LOGOUT_SUCCESS } from "../../actions/userAction";
import { GET_USER } from "../../actions/userAction";

const initialState = {
  userRegisterResult: false,
  userRegisterLoading: false,
  userRegisterError: false,

  isAuth: false,
  user: null,
  token: null,
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

    case LOGOUT_SUCCESS:
      localStorage.clear();
      return {
        ...state,
        user: null,
        token: null,
        isAuth: false,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload.data,
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
