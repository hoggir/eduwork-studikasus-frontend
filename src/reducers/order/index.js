import { ADD_TO_ORDER } from "../../actions/orderAction";

const INITIAL_STATE = {
  user: false,
  cart: false,
  cartItem: false,
  status: false,
  alamat: false,
  delivery_fee: false,
  totalItemPrice: false,
  totalItemQuantity: false,
  totalPrice: false,
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_ORDER:
      return {
        ...state,
        user: action.payload.user,
        cart: action.payload.cart,
        cartItem: action.payload.cartItem,
        status: action.payload.status,
        alamat: action.payload.alamat,
        delivery_fee: action.payload.delivery_fee,
        totalItemPrice: action.payload.totalItemPrice,
        totalItemQuantity: action.payload.totalItemQuantity,
        totalPrice: action.payload.totalPrice,
      };

    default:
      return state;
  }
};

export default orderReducer;
