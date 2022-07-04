import React from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import {
  deleteDeliveryAddresses,
  detailDeliveryAddresses,
} from "../../actions/addressesAction";
import { Link } from "react-router-dom";

function DeliveryAddressesComp({ addresses, user }) {
  //console.log(user);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="my-getaddress-main">
        <div className="my-getaddress-main-left">
          <div className="getaddress-left-item">
            <div className="getaddress-left-item-desc mb-3">
              <div className="getaddress-left-title">Nama Lengkap</div>
              <div className="getaddress-left-title-name">
                {user.full_name} ({addresses.name})
              </div>
            </div>
            <div className="getaddress-left-item-desc">
              <div className="getaddress-left-title">telepon</div>
              <div>(+62) 999666333</div>
            </div>
            <div className="getaddress-left-item-desc">
              <div className="getaddress-left-title">Alamat</div>
              <div>
                Kel. {addresses.kelurahan}, Kec. {addresses.kecamatan},{" "}
                {addresses.kabupaten}, {addresses.provinsi}
              </div>
            </div>
          </div>
        </div>
        <div className="my-getaddress-main-right">
          <Link to={"/edit-delivery-addresses"}>
            <button
              className="btn btn-primary mb-1"
              onClick={() => dispatch(detailDeliveryAddresses(addresses))}
            >
              Edit
            </button>
          </Link>
          <button
            className="btn btn-danger mt-1"
            onClick={() => dispatch(deleteDeliveryAddresses(addresses._id))}
          >
            Hapus
          </button>
        </div>
      </div>
      <hr className="ml-3 mr-3" />
    </div>
    // <div className="container">
    //   <div className="addresses-wrapper">
    //     <div className="addresses-desc">
    //       <div className="addresses-name">{addresses.name}</div>
    //       <div className="addresses-detail">
    // Kel. {addresses.kelurahan}, Kec. {addresses.kecamatan},{" "}
    // {addresses.kabupaten}, {addresses.provinsi}
    //       </div>
    //     </div>
    // <div className="addresses-btn-wrapper">
    //   <Link to={"/edit-delivery-addresses"}>
    //     <button
    //       onClick={() => dispatch(detailDeliveryAddresses(addresses))}
    //       className="btn btn-primary"
    //     >
    //       Edit
    //     </button>
    //   </Link>

    //   <button
    //     onClick={() => dispatch(deleteDeliveryAddresses(addresses._id))}
    //     className="btn btn-danger"
    //   >
    //     Hapus
    //   </button>
    // </div>
    //   </div>
    //   <hr />
    // </div>
  );
}

export default DeliveryAddressesComp;
