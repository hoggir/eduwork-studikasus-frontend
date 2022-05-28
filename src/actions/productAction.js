import axios from "axios";

export const GET_LIST_PRODUCT = "GET_LIST_PRODUCT";

export const getListProduct = (data) => {
  return (dispatch) => {
    const getFoods = async (API) => {
      await axios({
        method: "GET",
        url: API,
        timeout: 120000,
      })
        .then((response) => {
          dispatch({
            type: GET_LIST_PRODUCT,
            payload: {
              loading: false,
              data: response.data,
              errorMessage: false,
            },
          });
        })
        .catch((error) => {
          dispatch({
            type: GET_LIST_PRODUCT,
            payload: {
              loading: false,
              data: false,
              errorMessage: error.message,
            },
          });
        });
    };

    //loading
    dispatch({
      type: GET_LIST_PRODUCT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    if (data) {
      const searchKey = data.searchTerm;
      const tagKey = data.searchTag;
      if (searchKey) {
        if (searchKey === "") {
          getFoods("http://localhost:3000/api/products/");
        } else {
          getFoods(`http://localhost:3000/api/products?q=${searchKey}`);
        }
      } else if (tagKey) {
        getFoods(`http://localhost:3000/api/products?tags[]=${tagKey}`);
      } else {
        console.log("data dengan search");
        //getFoods(`http://localhost:3000/api/products?q=${searchKey}`);
        getFoods("http://localhost:3000/api/products/");
      }
    } else {
      getFoods("http://localhost:3000/api/products/");
    }
  };
};
