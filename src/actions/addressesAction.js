import axios from "axios";
export const GET_DELIVERY_ADDRESSES = "GET_DELIVERY_ADDRESSES";
export const DELETE_DELIVERY_ADDRESSES = "DELETE_DELIVERY_ADDRESSES";
export const DETAIL_DELIVERY_ADDRESSES = "DETAIL_DELIVERY_ADDRESSES";
export const EDIT_DELIVERY_ADDRESSES = "EDIT_DELIVERY_ADDRESSES";
const qs = require("query-string");

export const getDeliveryAddresses = () => {
  return (dispatch) => {
    var token = JSON.parse(localStorage.getItem("token"));

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    dispatch({
      type: GET_DELIVERY_ADDRESSES,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    const API = "http://localhost:3000/api";

    axios
      .get(API + "/delivery-addresses", config)
      .then((response) => {
        dispatch({
          type: GET_DELIVERY_ADDRESSES,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_DELIVERY_ADDRESSES,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteDeliveryAddresses = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_DELIVERY_ADDRESSES,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    var token = JSON.parse(localStorage.getItem("token"));

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
      },
    };

    const API = "http://localhost:3000/api/delivery-addresses/";

    axios
      .delete(API + id, config)
      .then((response) => {
        dispatch({
          type: DELETE_DELIVERY_ADDRESSES,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_DELIVERY_ADDRESSES,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const detailDeliveryAddresses = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_DELIVERY_ADDRESSES,
      payload: {
        data: data,
      },
    });
  };
};

export const editDeliveryAddresses = (data) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_DELIVERY_ADDRESSES,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    const API = "http://localhost:3000/api/delivery-addresses/";

    const requestBody = {
      user: data.user,
      name: data.name,
      provinsi: data.provinsi,
      kabupaten: data.kabupaten,
      kecamatan: data.kecamatan,
      kelurahan: data.kelurahan,
    };

    var token = JSON.parse(localStorage.getItem("token"));

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
      },
    };

    axios
      .put(API + data.id, qs.stringify(requestBody), config)
      .then((response) => {
        if (response.data.error === 1) {
          alert("Mohon isi semua data!");
        } else {
          alert("Alamat berhasil diubah");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
