import { LOGOUT_SUCCESS } from "../../actions/loginAction";
import { GET_USER } from "../../actions/loginAction";

const initialState = {
  isAuth: false,
  user: null,
  token: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
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
