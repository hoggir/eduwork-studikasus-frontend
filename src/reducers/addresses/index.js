import { GET_DELIVERY_ADDRESSES } from "../../actions/addressesAction";
import { DELETE_DELIVERY_ADDRESSES } from "../../actions/addressesAction";
import { DETAIL_DELIVERY_ADDRESSES } from "../../actions/addressesAction";
import { EDIT_DELIVERY_ADDRESSES } from "../../actions/addressesAction";

const initialState = {
  getListAddressesResult: false,
  getListAddressesLoading: false,
  getListAddressesError: false,

  deleteAddressesResult: false,
  deleteAddressesLoading: false,
  deleteAddressesError: false,

  detailAddressesResult: false,

  editAddressesResult: false,
  editAddressesLoading: false,
  editAddressesError: false,
};

const addresses = (state = initialState, action) => {
  switch (action.type) {
    case GET_DELIVERY_ADDRESSES:
      return {
        ...state,
        getListAddressesResult: action.payload.data.data,
        getListAddressesLoading: action.payload.loading,
        getListAddressesError: action.payload.errorMessage,
      };
    case DELETE_DELIVERY_ADDRESSES:
      return {
        ...state,
        deleteAddressesResult: action.payload.data,
        deleteAddressesLoading: action.payload.loading,
        deleteAddressesError: action.payload.errorMessage,
      };

    case DETAIL_DELIVERY_ADDRESSES:
      return {
        ...state,
        detailAddressesResult: action.payload.data,
      };

      case EDIT_DELIVERY_ADDRESSES:
      return {
        ...state,
        editAddressesResult: action.payload.data,
        editAddressesLoading: action.payload.loading,
        editAddressesError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default addresses;
