import { combineReducers } from "redux";
import ProductReducer from "./product";
import TagReducer from "./tag";
import UserReducer from "./user";
import LoginReducer from "./loginUser";
import AddressesReducer from "./addresses";
import alamatIndoAPI from "./addressesIndo";

export default combineReducers({
  ProductReducer,
  TagReducer,
  UserReducer,
  AddressesReducer,
  LoginReducer,
  alamatIndoAPI,
});