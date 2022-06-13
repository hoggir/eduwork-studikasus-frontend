import { GET_ALAMAT_PROVINSI } from "../../actions/addressAPI";
import { GET_ALAMAT_KABUPATEN } from "../../actions/addressAPI";
import { GET_ALAMAT_KECAMATAN } from "../../actions/addressAPI";
import { GET_ALAMAT_KELURAHAN } from "../../actions/addressAPI";

const initialState = {
  getProvinsiResult: false,
  getProvinsiLoading: false,
  getProvinsiError: false,

  getKabupatenResult: false,
  getKabupatenLoading: false,
  getKabupatenError: false,

  getKecamatanResult: false,
  getKecamatanLoading: false,
  getKecamatanError: false,

  getKelurahanResult: false,
  getKelurahanLoading: false,
  getKelurahanError: false,
};

const alamatIndoAPI = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALAMAT_PROVINSI:
      return {
        ...state,
        getProvinsiResult: action.payload.data.provinsi,
        getProvinsiLoading: action.payload.loading,
        getProvinsiError: action.payload.errorMessage,
      };

    case GET_ALAMAT_KABUPATEN:
      return {
        ...state,
        getKabupatenResult: action.payload.data.kota_kabupaten,
        getKabupatenLoading: action.payload.loading,
        getKabupatenError: action.payload.errorMessage,
      };

    case GET_ALAMAT_KECAMATAN:
      return {
        ...state,
        getKecamatanResult: action.payload.data.kecamatan,
        getKecamatanLoading: action.payload.loading,
        getKecamatanError: action.payload.errorMessage,
      };

    case GET_ALAMAT_KELURAHAN:
      return {
        ...state,
        getKelurahanResult: action.payload.data.kelurahan,
        getKelurahanLoading: action.payload.loading,
        getKelurahanError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default alamatIndoAPI;
