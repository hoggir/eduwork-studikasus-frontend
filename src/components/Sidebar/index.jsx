import React, { useState } from "react";
import "./index.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import Me from "../Me";
import Order from "../../pages/Order/GetOrder";
import DeliveryAddresses from "../../pages/DeliveryAddresses/GetDeliveryAddresses";
import AddAddresses from "../../pages/DeliveryAddresses/AddDeliveryAddresses";
//import EditAddresses from "../../pages/DeliveryAddresses/EditDeliveryAddresses";

function Sidebar(user) {
  //console.log(user);
  const me = user.user;
  const [page, setPage] = useState("profile");

  const handleOnclick = (e) => {
    e.preventDefault();
    setPage(e.target.value);
  };

  return (
    <div className="profile-wrapper">
      <div className="row">
        <div className="col-3">
          {/* SIDEBAR */}
          <div className="profile-menu">
            <div className="profile-me">
              <div className="profile-me-img">
                <div className="profile-me-icon">
                  <AccountCircleIcon style={{ fontSize: 50 }} />
                </div>
              </div>
              <div className="profile-me-desc">
                <div className="profile-me-desc-name">{me.customer_id}</div>
                <div className="profile-me-desc-more">lihat profile</div>
              </div>
            </div>

            <div className="profile-sidebar-menu-wrapper">
              <div className="profile-sidebar-menu-item">
                <button
                  value="profile"
                  id={page === "profile" ? "active" : ""}
                  onClick={handleOnclick}
                  className="profile-sidebar-menu-profile-button"
                >
                  <span>
                    <PersonOutlineOutlinedIcon style={{ marginRight: 6 }} />
                  </span>
                  Akun Saya
                </button>
              </div>
              <div className="profile-sidebar-menu-item">
                <button
                  value="address"
                  id={page === "address" ? "active" : ""}
                  onClick={handleOnclick}
                  className="profile-sidebar-menu-profile-address"
                >
                  <span>
                    <LocationOnOutlinedIcon style={{ marginRight: 6 }} />
                  </span>
                  Alamat
                </button>
              </div>
              <div className="profile-sidebar-menu-item">
                <button
                  value="order"
                  id={page === "order" ? "active" : ""}
                  onClick={handleOnclick}
                  className="profile-sidebar-menu-profile-order"
                >
                  <span>
                    <ListAltOutlinedIcon style={{ marginRight: 6 }} />
                  </span>
                  Pesanan Saya
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* SIDEBAR-END */}
        <div className="col-9">
          <div className="profile-page">
            {page === "address" ? (
              <div className="my-address-wrapper">
                <div className="my-address-action">
                  <div className="my-address-title">Alamat Saya</div>
                  <div className="my-address-add-button">
                    <button
                      className="btn btn-primary"
                      onClick={() => setPage("tambahalamat")}
                    >
                      + Tambah
                    </button>
                  </div>
                </div>
                <hr />
                <DeliveryAddresses />
              </div>
            ) : page === "tambahalamat" ? (
              <div className="my-address-wrapper">
                <div className="my-address-action">
                  <div className="my-address-title">Tambah Alamat</div>
                </div>
                <hr />
                <AddAddresses />
              </div>
            ) : page === "order" ? (
              <div className="my-address-wrapper">
                <div className="my-address-action">
                  <div className="my-address-title">Pesanan Saya</div>
                </div>
                <hr />
                <div className="row order-title-row">
                  <div className="col-3">Status</div>
                  <div className="col-3">Ongkos Kirim</div>
                  <div className="col-3">Total</div>
                  <div className="col-3">Invoice</div>
                </div>
                <hr />
                <Order me={me} />
              </div>
            ) : (
              <Me me={me} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
