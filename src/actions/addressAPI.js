import axios from "axios";
export const GET_ALAMAT_PROVINSI = "GET_ALAMAT_PROVINSI";
export const GET_ALAMAT_KABUPATEN = "GET_ALAMAT_KABUPATEN";
export const GET_ALAMAT_KECAMATAN = "GET_ALAMAT_KECAMATAN";
export const GET_ALAMAT_KELURAHAN = "GET_ALAMAT_KELURAHAN";

export const getProvinsi = () => {
  return (dispatch) => {
    //const API = "https://dev.farizdotid.com/api/daerahindonesia/provinsi";
    const getProv = (API) => {
      axios({
        method: "GET",
        url: API,
        timeout: 120000,
      })
        .then((response) => {
          dispatch({
            type: GET_ALAMAT_PROVINSI,
            payload: {
              loading: false,
              data: response.data,
              errorMessage: false,
            },
          });
        })
        .catch((error) => {
          dispatch({
            type: GET_ALAMAT_PROVINSI,
            payload: {
              loading: false,
              data: false,
              errorMessage: error.message,
            },
          });
        });
    };

    dispatch({
      type: GET_ALAMAT_PROVINSI,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    getProv("https://dev.farizdotid.com/api/daerahindonesia/provinsi");
  };
};

export const getKabupaten = (data) => {
  return (dispatch) => {
    const getKab = async (API) => {
      await axios({
        method: "GET",
        url: API,
        timeout: 120000,
      })
        .then((response) => {
          dispatch({
            type: GET_ALAMAT_KABUPATEN,
            payload: {
              loading: false,
              data: response.data,
              errorMessage: false,
            },
          });
        })
        .catch((error) => {
          dispatch({
            type: GET_ALAMAT_KABUPATEN,
            payload: {
              loading: false,
              data: false,
              errorMessage: error.message,
            },
          });
        });
    };

    dispatch({
      type: GET_ALAMAT_KABUPATEN,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    if (data) {
      getKab(
        `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${data.dataProvinsi}`
      );
    }
  };
};

export const getKecamatan = (data) => {
  return (dispatch) => {
    const getKec = async (API) => {
      await axios({
        method: "GET",
        url: API,
        timeout: 120000,
      })
        .then((response) => {
          dispatch({
            type: GET_ALAMAT_KECAMATAN,
            payload: {
              loading: false,
              data: response.data,
              errorMessage: false,
            },
          });
        })
        .catch((error) => {
          dispatch({
            type: GET_ALAMAT_KECAMATAN,
            payload: {
              loading: false,
              data: false,
              errorMessage: error.message,
            },
          });
        });
    };

    dispatch({
      type: GET_ALAMAT_KECAMATAN,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    if (data) {
      getKec(
        `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${data.dataKecamatan}`
      );
    }
  };
};

export const getKelurahan = (data) => {
  return (dispatch) => {
    const getKel = async (API) => {
      await axios({
        method: "GET",
        url: API,
        timeout: 120000,
      })
        .then((response) => {
          dispatch({
            type: GET_ALAMAT_KELURAHAN,
            payload: {
              loading: false,
              data: response.data,
              errorMessage: false,
            },
          });
        })
        .catch((error) => {
          dispatch({
            type: GET_ALAMAT_KELURAHAN,
            payload: {
              loading: false,
              data: false,
              errorMessage: error.message,
            },
          });
        });
    };

    dispatch({
      type: GET_ALAMAT_KELURAHAN,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    if (data) {
      getKel(
        `https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${data.dataKelurahan}`
      );
    }
  };
};
