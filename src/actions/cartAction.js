import axios from "axios";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_QTY = "INCREASE_QTY";
export const DECREASE_QTY = "DECREASE_QTY";
export const LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM";
const qs = require("query-string");

export const addToCart = (item) => {
  return (dispatch) => {
    console.log(item._id);
    var token = JSON.parse(localStorage.getItem("token"));

    const requestBody = {
      quantity: item.qty,
      productId: item._id,
    };

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
      },
    };

    const API = "http://localhost:3000/api";

    axios
      .post(API + "/carts", qs.stringify(requestBody), config)
      .then((response) => {
        //console.log(response.data.products);
        dispatch({
          type: ADD_TO_CART,
          payload: {
            data: response.data,
            cartItem: response.data.products,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_TO_CART,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const removeFromCart = (itemID) => {
  return (dispatch) => {
    //console.log(itemID);
    var token = JSON.parse(localStorage.getItem("token"));

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
      },
    };

    const API = "http://localhost:3000/api/carts-item/";

    axios
      .delete(API + itemID.productId, config)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: REMOVE_FROM_CART,
          payload: {
            data: response.data,
            cartItem: response.data.products,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: REMOVE_FROM_CART,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const incQty = (item) => {
  return (dispatch) => {
    console.log(item.productId);
    var token = JSON.parse(localStorage.getItem("token"));

    const requestBody = {
      quantity: item.qty,
      productId: item.productId,
    };

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
      },
    };

    const API = "http://localhost:3000/api";

    axios
      .post(API + "/carts", qs.stringify(requestBody), config)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: INCREASE_QTY,
          payload: {
            data: response.data,
            cartItem: response.data.products,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: INCREASE_QTY,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const decQty = (item) => {
  return (dispatch) => {
    console.log(item.productId);
    var token = JSON.parse(localStorage.getItem("token"));

    const requestBody = {
      quantity: -1,
      productId: item.productId,
    };

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
      },
    };

    const API = "http://localhost:3000/api";

    axios
      .post(API + "/carts", qs.stringify(requestBody), config)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: DECREASE_QTY,
          payload: {
            data: response.data,
            cartItem: response.data.products,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: DECREASE_QTY,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const loadCurrentItem = () => {
  return (dispatch) => {
    var token = JSON.parse(localStorage.getItem("token"));

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
    };

    const API = "http://localhost:3000/api";

    axios
      .get(API + "/carts", config)
      .then((response) => {
        //console.log(response.data);
        {
          response.data.map((foos) => {
            //console.log(foos);
            dispatch({
              type: LOAD_CURRENT_ITEM,
              payload: {
                cartItem: foos.products,
                data: response.data,
              },
            });
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: LOAD_CURRENT_ITEM,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
