import axios from "axios";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_QTY = "INCREASE_QTY";
export const DECREASE_QTY = "DECREASE_QTY";
export const LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM";

export const addToCart = (itemID) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        id: itemID,
      },
    });
  };
};

export const removeFromCart = (itemID) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: {
        id: itemID,
      },
    });
  };
};

export const incQty = (itemID) => {
  return (dispatch) => {
    dispatch({
      type: INCREASE_QTY,
      payload: {
        id: itemID,
      },
    });
  };
};

export const decQty = (itemID) => {
  return (dispatch) => {
    dispatch({
      type: DECREASE_QTY,
      payload: {
        id: itemID,
      },
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
        console.log(response);
        // dispatch({
        //   type: LOAD_CURRENT_ITEM,
        //   payload: {
        //     loading: false,
        //     data: response.data,
        //     errorMessage: false,
        //   },
        // });
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

    // dispatch({
    //   type: LOAD_CURRENT_ITEM,
    //   payload: item,
    // });
  };
};
