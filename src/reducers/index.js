import { combineReducers } from "redux";
import ProductReducer from './product';
import TagReducer from './tag';

export default combineReducers({
    ProductReducer,
    TagReducer,
})