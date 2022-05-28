import axios from "axios";

export const GET_LIST_TAG = "GET_LIST_TAG";

export const getListTag = () => {
  //console.log("2. Masuk action tag");
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_LIST_TAG,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "GET",
      url: "http://localhost:3000/api/tags/",
      timeout: 120000,
    })
      .then((response) => {
        //console.log("3. Berhasil get API : ", response.data);
        //berhasil get API
        dispatch({
          type: GET_LIST_TAG,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //console.log("3. Gagal get api : ", error);
        //gagal get api
        dispatch({
          type: GET_LIST_TAG,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
