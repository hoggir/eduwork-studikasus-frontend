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
        sudahlogin: true,
      },
    });
  };
};

export const logoutUser = (dataLogout) => {
  return (dispatch) => {
    console.log(dataLogout.res);
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
        sudahlogin: false,
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

    const API = "http://localhost:3000/auth";

    axios
      .get(API + "/me", config)
      .then((response) => {
        //console.log(response.data);
        if (response.data.error === 1) {
          dispatch({
            type: GET_USER,
            payload: {
              loading: false,
              data: response.data,
              sudahlogin: false,
            },
          });
        } else {
          dispatch({
            type: GET_USER,
            payload: {
              loading: false,
              data: response.data,
              sudahlogin: true,
            },
          });
        }
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
