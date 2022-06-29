import { combineReducers } from "redux";
import ProductReducer from "./product";
import TagReducer from "./tag";
import CategoryReducer from "./category";
import UserReducer from "./user";
import OrderReducer from "./order";
import AddressesReducer from "./addresses";
import alamatIndoAPI from "./addressesIndo";
import Reducer from "./cart";

export default combineReducers({
  ProductReducer,
  TagReducer,
  UserReducer,
  AddressesReducer,
  alamatIndoAPI,
  CategoryReducer,
  Reducer,
  OrderReducer,
});
