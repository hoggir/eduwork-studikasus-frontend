import { GET_LIST_CATEGORY } from "../../actions/categoryAction";

const initialState = {
    getListCategoriesResult : false,
    getListCategoriesLoading : false,
    getListCategoriesError : false,
}

const category = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_CATEGORY:
            return {
                ...state,
                getListCategoriesResult: action.payload.data,
                getListCategoriesLoading: action.payload.loading,
                getListCategoriesError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default category;