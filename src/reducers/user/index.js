import { LOGIN_SUCCESS } from "../../actions/userAction";
import { REGISTER_SUCCESS } from "../../actions/userAction";
import { LOGOUT_SUCCESS } from "../../actions/userAction";
import { GET_USER } from "../../actions/userAction";

const initialState = {
  userRegisterResult: false,
  userRegisterLoading: false,
  userRegisterError: false,

  user: false,
  token: null,
  cek: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", JSON.stringify(action.payload.data.token));
      return {
        ...state,
        user: action.payload.data.user,
        token: action.payload.data.token,
        cek: action.payload.sudahlogin,
      };

    case LOGOUT_SUCCESS:
      localStorage.clear();
      return {
        ...state,
        user: null,
        token: null,
        cek: action.payload.sudahlogin,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload.data,
        token: action.payload.data.token,
        cek: action.payload.sudahlogin,
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
