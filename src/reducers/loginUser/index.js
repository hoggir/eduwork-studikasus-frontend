import { LOGIN_SUCCESS } from "../../actions/loginAction";
import { LOGOUT_SUCCESS } from "../../actions/loginAction";
import { GET_USER } from "../../actions/loginAction";

const initialState = {
  isAuth: false,
  user: null,
  token: null,
};

const loginReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default loginReducer;
