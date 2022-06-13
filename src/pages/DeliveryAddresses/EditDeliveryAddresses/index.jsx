import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProvinsi,
  getKabupaten,
  getKecamatan,
  getKelurahan,
} from "../../../actions/addressAPI";
import { editDeliveryAddresses } from "../../../actions/addressesAction";

function EditAddresses() {
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

  const { detailAddressesResult } = useSelector(
    (state) => state.AddressesReducer
  );

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
    //eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    if (detailAddressesResult) {
      setAlamat({
        ...alamat,
        id: detailAddressesResult._id,
        user: detailAddressesResult.user,
        name: detailAddressesResult.name,
        provinsi: detailAddressesResult.provinsi,
        kabupaten: detailAddressesResult.kabupaten,
        kecamatan: detailAddressesResult.kecamatan,
        kelurahan: detailAddressesResult.kelurahan,
      });
    }
    // eslint-disable-next-line
  }, [detailAddressesResult, dispatch]);

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
    dispatch(editDeliveryAddresses(alamat));
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
                <option className="text-center">{alamat.provinsi}</option>
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
                <option className="text-center">{alamat.kabupaten}</option>
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
                <option className="text-center">{alamat.kecamatan}</option>
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
                <option className="text-center">{alamat.kelurahan}</option>
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

export default EditAddresses;
