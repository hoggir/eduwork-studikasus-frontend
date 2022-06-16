// const Reducer = (cart = [], action) => {
//   if (action.type === "ADD") {
//     let tempcart = cart.filter((item) => item.id === action.payload.id);
//     if (tempcart < 1) {
//       return [...cart, action.payload];
//     } else {
//       return cart;
//     }
//   }
// };

// export default Reducer;

const Reducer = (cart = [], action) => {
  switch (action.type) {
    case "ADD_CART":
      let tempcart = cart.filter((item) => item._id === action.payload._id);
      if (tempcart < 1) {
        return [...cart, action.payload];
      } else {
        return cart;
      }

    case "REMOVE":
      return cart.filter((item) => item._id !== action.payload._id);

    case "INCREASE":
      let tempcartin = cart.map((item) => {
        if (item._id === action.payload._id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return tempcartin;

    case "DECREASE":
      let tempcartde = cart.map((item) => {
        if (item._id === action.payload._id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return tempcartde;

    default:
      return cart;
  }
};

export default Reducer;

// import { ADD_TO_CART } from "../../actions/cartAction";
// import { REMOVE_FROM_CART } from "../../actions/cartAction";
// import { ADJUST_QTY } from "../../actions/cartAction";
// import { LOAD_CURRENT_ITEM } from "../../actions/cartAction";

// const initialState = {
//   foods: [],
//   cart: [],
//   currentItem: null,
// };

// const cart = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       const foods = action.payload.foods;
//       // Get the items data from the products
//       //console.log(foods);
//       const item = state.foods.find((fod) => fod.id === action.payload.data);
//       //console.log(action.payload.data);
//       // Check if item is in cart already
//       const inCart = state.cart.find((item) =>
//         item.id === action.payload.data ? true : false
//       );

//       return {
//         ...state,
//         cart: inCart
//           ? state.cart.map((item) =>
//               item.id === action.payload.data
//                 ? { ...item, qty: item.qty + 1 }
//                 : item
//             )
//           : [...state.cart, { ...item, qty: 1 }],
//       };

//     case REMOVE_FROM_CART:
//       return {
//         ...state,
//         cart: state.cart.filter((item) => item.id !== action.payload.data),
//       };

//     case ADJUST_QTY:
//       return {
//         ...state,
//         cart: state.cart.map((item) =>
//           item.id === action.payload.data
//             ? { ...item, qty: action.payload.qty }
//             : item
//         ),
//       };

//     case LOAD_CURRENT_ITEM:
//       return {
//         ...state,
//         currentItem: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export default cart;
