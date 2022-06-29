import axios from "axios";

export const GET_LIST_CATEGORY = "GET_LIST_CATEGORY";

export const getListCategory = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_LIST_CATEGORY,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "GET",
      url: "http://localhost:3000/api/categories/",
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get API
        dispatch({
          type: GET_LIST_CATEGORY,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get api
        dispatch({
          type: GET_LIST_CATEGORY,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
