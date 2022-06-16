import React from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import {
  deleteDeliveryAddresses,
  detailDeliveryAddresses,
} from "../../actions/addressesAction";
import { Link } from "react-router-dom";

function DeliveryAddressesComp({ addresses }) {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="addresses-wrapper">
        <div className="addresses-desc">
          <div className="addresses-name">{addresses.name}</div>
          <div className="addresses-detail">
            Kel. {addresses.kelurahan}, Kec. {addresses.kecamatan},{" "}
            {addresses.kabupaten}, {addresses.provinsi}
          </div>
        </div>
        <div className="addresses-btn-wrapper">
          <Link to={"/edit-delivery-addresses"}>
            <button
              onClick={() => dispatch(detailDeliveryAddresses(addresses))}
              className="btn btn-primary"
            >
              Edit
            </button>
          </Link>

          <button
            onClick={() => dispatch(deleteDeliveryAddresses(addresses._id))}
            className="btn btn-danger"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryAddressesComp;
