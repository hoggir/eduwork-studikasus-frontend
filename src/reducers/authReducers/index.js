import { REGISTER_SUCCESS } from "../../actions/authActionReg";

const initialState = {
    getListUserResult: false,
    getListUserLoading: false,
    getListUserError: false,
  };

  const authreducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        getListUserResult: action.payload.data,
        getListUserLoading: action.payload.loading,
        getListUserError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default authreducer;
