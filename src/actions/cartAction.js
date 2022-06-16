export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADJUST_QTY = "ADJUST_QTY";
export const LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM";

export const addToCart = (foodID) => {
  console.log(foodID);
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        loading: true,
        data: foodID,
        errorMessage: false,
      },
    });
  };
};

export const removeFromCart = (foodID) => {
  //console.log(food, quantity);
  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    dispatch({
      type: ADD_TO_CART,
      payload: {
        loading: true,
        data: foodID,
        errorMessage: false,
      },
    });
  };
};

export const adjustQty = (foodID, value) => {
  //console.log(food, quantity);
  return (dispatch) => {
    dispatch({
      type: ADJUST_QTY,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    dispatch({
      type: ADJUST_QTY,
      payload: {
        loading: true,
        data: foodID,
        qty: value,
        errorMessage: false,
      },
    });
  };
};

export const loadCurrentItem = (food) => {
  return (dispatch) => {
    dispatch({
      type: LOAD_CURRENT_ITEM,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    dispatch({
      type: LOAD_CURRENT_ITEM,
      payload: {
        loading: true,
        data: food,
        errorMessage: false,
      },
    });
  };
};
