import axios from "axios";
const qs = require("query-string");

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";

export const RegisterAuthAction = (userState) => {
  return (dispatch) => {
    const requestBody = {
      full_name: userState.data.full_name,
      email: userState.data.email,
      password: userState.data.password,
    };

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    dispatch({
      type: REGISTER_SUCCESS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    const API = "http://localhost:3000/auth";

    axios
      .post(API + "/register", qs.stringify(requestBody), config)
      .then((response) => {
        //console.log(response.data.fields);
        dispatch({
          type: REGISTER_SUCCESS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: response.data.fields,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
