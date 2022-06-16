import axios from "axios";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const GET_USER = "GET_USER";
const qs = require("query-string");

export const loginUser = (dataLogin) => {
  return (dispatch) => {
    //console.log(dataLogin.res)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        loading: true,
        data: false,
      },
    });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        loading: false,
        data: dataLogin.res.data,
      },
    });
  };
};

export const logoutUser = (dataLogout) => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_SUCCESS,
      payload: {
        loading: true,
        data: false,
      },
    });

    dispatch({
      type: LOGOUT_SUCCESS,
      payload: {
        loading: false,
        data: dataLogout.res.data,
      },
    });
  };
};

export const getUser = () => {
  return (dispatch) => {
    var token = JSON.parse(localStorage.getItem("token"));

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    dispatch({
      type: GET_USER,
      payload: {
        loading: true,
        data: false,
      },
    });

    const API = "http://localhost:3000/auth";

    axios
      .get(API + "/me", config)
      .then((response) => {
        //console.log(response.data);
        dispatch({
          type: GET_USER,
          payload: {
            loading: false,
            data: response.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_USER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const registerUser = (userState) => {
  return (dispatch) => {
    //console.log(userState);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    const requestBody = {
      full_name: userState.full_name,
      email: userState.email,
      password: userState.password,
    };

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    const API = "http://localhost:3000/auth";

    axios
      .post(API + "/register", qs.stringify(requestBody), config)
      .then((response) => {
        //console.log(response);
        if (response.data.error === 1) {
          //console.log(response.data)
          dispatch({
            type: REGISTER_SUCCESS,
            payload: {
              loading: false,
              data: false,
              errorMessage: response.data.message,
            },
          });
        } else {
          dispatch({
            type: REGISTER_SUCCESS,
            payload: {
              loading: false,
              data: response.data,
              errorMessage: false,
            },
          });
          alert("Registrasi Berhasil");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
