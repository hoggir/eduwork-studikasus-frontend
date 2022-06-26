import axios from "axios";
export const ADD_TO_ORDER = "ADD_TO_ORDER";
export const GET_ORDER = "GET_ORDER";
export const GET_ONE_ORDER = "GET_ONE_ORDER";
const qs = require("query-string");

export const addToOrder = (orderData) => {
  return (dispatch) => {
    // console.log(orderData);
    const API = "http://localhost:3000/api";
    var token = JSON.parse(localStorage.getItem("token"));

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
      },
    };

    const requestBody = {
      cart: orderData.cart._id,
      deliveryaddressId: orderData.alamat._id,
      status: orderData.status,
      delivery_fee: orderData.delivery_fee.ongkos,
      bill: orderData.totalPrice,
    };

    //console.log(requestBody);

    axios
      .post(API + "/orders", qs.stringify(requestBody), config)
      .then((response) => {
        console.log(response);
        dispatch({
          type: ADD_TO_ORDER,
          payload: {
            user: orderData.user,
            cart: orderData.cart,
            cartItem: orderData.cartItem,
            status: orderData.status,
            alamat: orderData.alamat,
            delivery_fee: orderData.delivery_fee,
            totalItemPrice: orderData.totalItemPrice,
            totalItemQuantity: orderData.totalItemQuantity,
            totalPrice: orderData.totalPrice,
            orderID: response.data._id,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_TO_ORDER,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getOrder = () => {
  return (dispatch) => {
    var token = JSON.parse(localStorage.getItem("token"));

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
    };

    const API = "http://localhost:3000/api/orders";

    axios
      .get(API, config)
      .then((response) => {
        //console.log(response.data);
        dispatch({
          type: GET_ORDER,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ORDER,
          payload: {
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getOneOrder = (data) => {
  return (dispatch) => {
    //console.log(data);
    //const idOrder = "62b662a61dff3774817a2e12";
    var token = JSON.parse(localStorage.getItem("token"));

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
    };

    const API = `http://localhost:3000/api/orders/${data}`;

    axios
      .get(API, config)
      .then((response) => {
        //console.log(response.data);
        dispatch({
          type: GET_ONE_ORDER,
          payload: {
            invoice: response.data,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ONE_ORDER,
          payload: {
            errorMessage: error.message,
          },
        });
      });
  };
};
