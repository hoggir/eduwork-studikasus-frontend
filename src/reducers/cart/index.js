import { ADD_TO_CART } from "../../actions/cartAction";
import { REMOVE_FROM_CART } from "../../actions/cartAction";
import { INCREASE_QTY } from "../../actions/cartAction";
import { DECREASE_QTY } from "../../actions/cartAction";
import { LOAD_CURRENT_ITEM } from "../../actions/cartAction";

const INITIAL_STATE = {
  cart: [],
  cartItem: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: action.payload.data,
        cartItem: action.payload.cartItem,
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: action.payload.data,
        cartItem: action.payload.cartItem,
      };

    case INCREASE_QTY:
      return {
        ...state,
        cart: action.payload.data,
        cartItem: action.payload.cartItem,
      };

    case DECREASE_QTY:
      return {
        ...state,
        cart: action.payload.data,
        cartItem: action.payload.cartItem,
      };

    case LOAD_CURRENT_ITEM:
      return {
        ...state,
        cart: action.payload.data,
        cartItem: action.payload.cartItem,
      };

    default:
      return state;
  }
};

export default shopReducer;
// const Cart = (cart = [], action) => {
//   switch (action.type) {
//     case "ADD_CART":
//       let tempcart = cart.filter((item) => item._id === action.payload._id);
//       console.log(tempcart)
//       console.log("action : " + action.payload._id);
//       if (tempcart < 1) {
//         return [...cart, action.payload];
//       } else {
//         return cart;
//       }

//     case "REMOVE":
//       return cart.filter((item) => item._id !== action.payload._id);

//     case "INCREASE":
//       let tempcartin = cart.map((item) => {
//         if (item._id === action.payload._id) {
//           return { ...item, quantity: item.quantity + 1 };
//         }

//         return item;
//       });
//       console.log(tempcartin);
//       return tempcartin;

//     case "DECREASE":
//       let tempcartde = cart.map((item) => {
//         if (item._id === action.payload._id) {
//           return { ...item, quantity: item.quantity - 1 };
//         }
//         return item;
//       });
//       return tempcartde;

//     default:
//       return cart;
//   }
// };

// export default Cart;
