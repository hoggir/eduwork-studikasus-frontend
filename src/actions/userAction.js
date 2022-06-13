import axios from "axios";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
const qs = require("query-string");

export const loginUser = (dataLogin, Navigate) => {
  return (dispatch) => {
    //console.log(dataLogin);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
        isAuth: false,
        token: null,
      },
    });

    const api = "http://localhost:3000/auth";

    const requestBody = {
      email: dataLogin.email,
      password: dataLogin.password,
    };

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post(api + "/login", qs.stringify(requestBody), config)
      .then((res) => {
        //console.log(res);
        if (res.data.error === 1) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: {
              loading: false,
              data: false,
              errorMessage: res.data.message,
              isAuth: false,
              token: false,
            },
          });
        } else {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: {
              loading: false,
              data: res.data,
              errorMessage: false,
              isAuth: true,
              token: res.data.token,
            },
          });
          Navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_SUCCESS,
      payload: {
        loading: true,
        data: false,
      },
    });

    const API = "http://localhost:3000/auth";
    var token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    const requestBody = {
      token: token,
    };
    var config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
      },
    };
    axios
      .post(API + "/logout", qs.stringify(requestBody), config)
      .then((res) => {
        console.log(res);
        console.log(token);
        dispatch({
          type: LOGOUT_SUCCESS,
          payload: {
            loading: false,
            data: res.data,
          },
        });
      })
      .catch((e) => {
        console.log(e);
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
