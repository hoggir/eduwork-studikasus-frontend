import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getProvinsi,
  getKabupaten,
  getKecamatan,
  getKelurahan,
} from "../../../actions/addressAPI";

import { getUser } from "../../../actions/loginAction";
const qs = require("query-string");

function AddAddresses() {
  const {
    getProvinsiResult,
    getProvinsiLoading,
    getKabupatenResult,
    getKabupatenLoading,
    getKecamatanResult,
    getKecamatanLoading,
    getKelurahanResult,
    getKelurahanLoading,
  } = useSelector((state) => state.alamatIndoAPI);

  const { user } = useSelector((state) => state.LoginReducer);

  const dispatch = useDispatch();

  const initialState = {
    user: "",
    name: "",
    provinsi: "",
    kabupaten: "",
    kecamatan: "",
    kelurahan: "",
  };
  const [alamat, setAlamat] = useState(initialState);

  useEffect(() => {
    dispatch(getProvinsi());
    dispatch(getKabupaten());
    dispatch(getKecamatan());
    dispatch(getKelurahan());
    dispatch(getUser());
    //eslint-disable-next-line
  }, [dispatch]);

  const nameHandleChange = (e) => {
    e.preventDefault();
    setAlamat({
      ...alamat,
      name: e.target.value,
    });
  };

  const provinsiHandleChange = (e) => {
    const provinsiValues = [].filter
      .call(
        document.querySelector("#provinsi").options,
        (option) => option.selected
      )
      .map((option) => option.text);
    dispatch(getKabupaten({ dataProvinsi: e.target.value }));
    setAlamat({
      ...alamat,
      provinsi: provinsiValues.toString(),
    });
  };

  const kabupatenHandleChange = (e) => {
    const kabupatenValues = [].filter
      .call(
        document.querySelector("#kabupaten").options,
        (option) => option.selected
      )
      .map((option) => option.text);
    dispatch(getKecamatan({ dataKecamatan: e.target.value }));
    setAlamat({
      ...alamat,
      kabupaten: kabupatenValues.toString(),
    });
  };

  const kecamatanHandleChange = (e) => {
    const kecamatanValues = [].filter
      .call(
        document.querySelector("#kecamatan").options,
        (option) => option.selected
      )
      .map((option) => option.text);
    dispatch(getKelurahan({ dataKelurahan: e.target.value }));
    setAlamat({
      ...alamat,
      kecamatan: kecamatanValues.toString(),
    });
  };

  const kelurahanHandleChange = (e) => {
    const kelurahanValues = [].filter
      .call(
        document.querySelector("#kelurahan").options,
        (option) => option.selected
      )
      .map((option) => option.text);
    setAlamat({
      ...alamat,
      kelurahan: kelurahanValues.toString(),
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    const API = "http://localhost:3000/api";

    const requestBody = {
      user: user._id,
      name: alamat.name,
      provinsi: alamat.provinsi,
      kabupaten: alamat.kabupaten,
      kecamatan: alamat.kecamatan,
      kelurahan: alamat.kelurahan,
    };

    var token = JSON.parse(localStorage.getItem("token"));

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
      },
    };

    axios
      .post(API + "/delivery-addresses", qs.stringify(requestBody), config)
      .then((response) => {
        if (response.data.error === 1) {
          alert("Mohon isi semua data!");
        } else {
          alert("Alamat berhasil ditambahkan");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="add-address-wrapper">
        <form>
          <div className="form-group">
            <label className="form-label">Nama Tempat :</label>
            <input
              className="form-control"
              type="search"
              value={alamat.name}
              onChange={nameHandleChange}
            />
            <div className="text-muted">Contoh: Rumah/Kos/Kantor</div>
          </div>

          <div className="form-group">
            <label className="form-label">Provinsi :</label>
            <select
              className="form-control"
              id="provinsi"
              onChange={provinsiHandleChange}
            >
              {getProvinsiLoading ? (
                <option className="text-center">Loading</option>
              ) : (
                <option className="text-center">Provinsi</option>
              )}
              {getProvinsiResult &&
                getProvinsiResult.map((provinsi) => {
                  return (
                    <option key={provinsi.id} value={provinsi.id}>
                      {provinsi.nama}
                    </option>
                  );
                })}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Kabupaten :</label>
            <select
              className="form-control"
              id="kabupaten"
              onChange={kabupatenHandleChange}
            >
              {getKabupatenLoading ? (
                <option className="text-center">Provinsi Kosong!</option>
              ) : (
                <option className="text-center">Kabupaten</option>
              )}
              {getKabupatenResult &&
                getKabupatenResult.map((kabupaten) => {
                  return (
                    <option key={kabupaten.id} value={kabupaten.id}>
                      {kabupaten.nama}
                    </option>
                  );
                })}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Kecamatan :</label>
            <select
              className="form-control"
              id="kecamatan"
              onChange={kecamatanHandleChange}
            >
              {getKecamatanLoading ? (
                <option className="text-center">Kabupaten Kosong!</option>
              ) : (
                <option className="text-center">Kecamatan</option>
              )}
              {getKecamatanResult &&
                getKecamatanResult.map((kecamatan) => {
                  return (
                    <option key={kecamatan.id} value={kecamatan.id}>
                      {kecamatan.nama}
                    </option>
                  );
                })}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Kelurahan :</label>
            <select
              className="form-control"
              id="kelurahan"
              onChange={kelurahanHandleChange}
            >
              {getKelurahanLoading ? (
                <option className="text-center">Kecamatan Kosong!</option>
              ) : (
                <option className="text-center">Kelurahan</option>
              )}
              {getKelurahanResult &&
                getKelurahanResult.map((kelurahan) => {
                  return (
                    <option key={kelurahan.id} value={kelurahan.id}>
                      {kelurahan.nama}
                    </option>
                  );
                })}
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-3"
            onClick={handleClick}
          >
            Tambah
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddAddresses;
