import axios from "axios";

export const GET_LIST_PRODUCT = "GET_LIST_PRODUCT";

export const getListProduct = (data) => {
  //console.log("2. Masuk Action");

  return (dispatch) => {
    const getFoods = async (API) => {
      await axios({
        method: "GET",
        url: API,
        timeout: 120000,
      })
        .then((response) => {
          console.log("3. Berhasil get API : ", response.data.data);
          //berhasil get api
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
          console.log("3. Gagal get api : ", error);
          //gagal get api
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
      //console.log("ada data");
      //console.log(data);
      const searchKey = data.searchTerm;
      const tagKey = data.searchTag;
      //console.log(tagKey);

      //jika ada searchkey
      if (searchKey) {
        //jika search key =""
        if (searchKey === "") {
          getFoods("http://localhost:3000/api/products/");
        } else {
          getFoods(`http://localhost:3000/api/products?q=${searchKey}`);
        }
        console.log("Semua data");
      } else if (tagKey) {
        getFoods(`http://localhost:3000/api/products?tags[]=${tagKey}`);
      } else {
        console.log("data dengan search");
        //getFoods(`http://localhost:3000/api/products?q=${searchKey}`);
        getFoods("http://localhost:3000/api/products/");
      }
    } else {
      console.log("tidak ada data");
      getFoods("http://localhost:3000/api/products/");
    }

    // if (data) {
    //   console.log("ada data");
    //   console.log(data);
    //   const searchKey = data.searchTerm;
    //   const tagKey = data.searchTag;
    //   console.log(tagKey);
    //   if (searchKey === "") {
    //     console.log("Semua data");
    //     getFoods("http://localhost:3000/api/products/");
    //   } else if (tagKey) {
    //     getFoods(`http://localhost:3000/api/products?tags[]=${tagKey}`);
    //   } else {
    //     console.log("data dengan search");
    //     getFoods(`http://localhost:3000/api/products?q=${searchKey}`);
    //   }
    // } else {
    //   console.log("tidak ada data");
    //   getFoods("http://localhost:3000/api/products/");
    // }

    // if (data) {
    //   //console.log(data)
    //   const searchTerm = data.searchTerm;
    //   const searchTag = data.searchTag;

    //   if (searchTerm) {
    //     axios({
    //       method: "GET",
    //       url: `http://localhost:3000/api/products?q=${data.searchTerm}`,
    //       timeout: 120000,
    //     })
    //       .then((response) => {
    //         //console.log("3. Berhasil get API : ", response.data.data);
    //         //berhasil get api
    //         dispatch({
    //           type: GET_LIST_PRODUCT,
    //           payload: {
    //             loading: false,
    //             data: response.data,
    //             errorMessage: false,
    //           },
    //         });
    //       })
    //       .catch((error) => {
    //         //console.log("3. Gagal get api : ", error);
    //         //gagal get api
    //         dispatch({
    //           type: GET_LIST_PRODUCT,
    //           payload: {
    //             loading: false,
    //             data: false,
    //             errorMessage: error.message,
    //           },
    //         });
    //       });
    //   } else if (searchTag) {
    //     axios({
    //       method: "GET",
    //       url: `http://localhost:3000/api/products?tags[]=${data.searchTag}`,
    //       timeout: 120000,
    //     })
    //       .then((response) => {
    //         //console.log("3. Berhasil get API : ", response.data.data);
    //         //berhasil get api
    //         dispatch({
    //           type: GET_LIST_PRODUCT,
    //           payload: {
    //             loading: false,
    //             data: response.data,
    //             errorMessage: false,
    //           },
    //         });
    //       })
    //       .catch((error) => {
    //         //console.log("3. Gagal get api : ", error);
    //         //gagal get api
    //         dispatch({
    //           type: GET_LIST_PRODUCT,
    //           payload: {
    //             loading: false,
    //             data: false,
    //             errorMessage: error.message,
    //           },
    //         });
    //       });
    //   }
    // } else {
    //   axios({
    //     method: "GET",
    //     url: "http://localhost:3000/api/products/",
    //     timeout: 120000,
    //   })
    //     .then((response) => {
    //       //console.log("3. Berhasil get API : ", response.data.data);
    //       //berhasil get api
    //       dispatch({
    //         type: GET_LIST_PRODUCT,
    //         payload: {
    //           loading: false,
    //           data: response.data,
    //           errorMessage: false,
    //         },
    //       });
    //     })
    //     .catch((error) => {
    //       console.log("3. Gagal get api : ", error);
    //       //gagal get api
    //       dispatch({
    //         type: GET_LIST_PRODUCT,
    //         payload: {
    //           loading: false,
    //           data: false,
    //           errorMessage: error.message,
    //         },
    //       });
    //     });
    // }

    // if (data) {
    //   // get API
    //   axios({
    //     method: "GET",
    //     url: `http://localhost:3000/api/products?q=${data.searchTerm}`,
    //     timeout: 120000,
    //   })
    //     .then((response) => {
    //       console.log("3. Berhasil get API : ", response.data.data);
    //       //berhasil get api
    //       dispatch({
    //         type: GET_LIST_PRODUCT,
    //         payload: {
    //           loading: false,
    //           data: response.data,
    //           errorMessage: false,
    //         },
    //       });
    //     })
    //     .catch((error) => {
    //       console.log("3. Gagal get api : ", error);
    //       //gagal get api
    //       dispatch({
    //         type: GET_LIST_PRODUCT,
    //         payload: {
    //           loading: false,
    //           data: false,
    //           errorMessage: error.message,
    //         },
    //       });
    //     });
    // } else {
    //   axios({
    //     method: "GET",
    //     url: "http://localhost:3000/api/products/",
    //     //url: `http://localhost:3000/api/products?q=${p}`,
    //     timeout: 120000,
    //   })
    //     .then((response) => {
    //       console.log("3. Berhasil get API : ", response.data.data);
    //       //berhasil get api
    //       dispatch({
    //         type: GET_LIST_PRODUCT,
    //         payload: {
    //           loading: false,
    //           data: response.data,
    //           errorMessage: false,
    //         },
    //       });
    //     })
    //     .catch((error) => {
    //       console.log("3. Gagal get api : ", error);
    //       //gagal get api
    //       dispatch({
    //         type: GET_LIST_PRODUCT,
    //         payload: {
    //           loading: false,
    //           data: false,
    //           errorMessage: error.message,
    //         },
    //       });
    //     });
    // }
  };
};
