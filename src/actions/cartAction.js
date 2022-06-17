export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_QTY = "INCREASE_QTY";
export const DECREASE_QTY = "DECREASE_QTY";
export const LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM";

export const addToCart = (itemID) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const incQty = (itemID) => {
  return {
    type: INCREASE_QTY,
    payload: {
      id: itemID,
    },
  };
};

export const decQty = (itemID) => {
  return {
    type: DECREASE_QTY,
    payload: {
      id: itemID,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: LOAD_CURRENT_ITEM,
    payload: item,
  };
};
