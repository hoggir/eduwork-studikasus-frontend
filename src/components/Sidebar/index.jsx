import React, { useState } from "react";
import "./index.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import { sidebarData } from "./sidebarData";
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

{
  /* <div className="container">
      <div className="category-wrapper">
        <div className="category">
          <ul>
            <li className="food-category-item">
              <button
                value=""
                id={page === "" ? "active" : ""}
                onClick={handleOnclick}
                className="food-category-button"
              >
                Profile
              </button>
            </li>
            <li className="food-category-item">
              <button
                value="delivery-addresses"
                id={page === "delivery-addresses" ? "active" : ""}
                onClick={handleOnclick}
                className="food-category-button"
              >
                Delivery Addresses
              </button>
            </li>
            <li className="food-category-item">
              <button
                value="order"
                id={page === "order" ? "active" : ""}
                onClick={handleOnclick}
                className="food-category-button"
              >
                Order
              </button>
            </li>
          </ul>
        </div>

        {page === "delivery-addresses" ? (
          <div className="page">
            <h4>Alamat Saya</h4>
            <DeliveryAddresses me={me} />
            <div className="add-addresses">
              <button
                className="btn btn-primary"
                onClick={() => setPage("tambahalamat")}
              >
                Tambah
              </button>
            </div>
          </div>
        ) : page === "order" ? (
          <div className="sidebar-profile">
            <h1>Order</h1>
          </div>
        ) : page === "tambahalamat" ? (
          <div className="sidebar-profile">
            <div className="page">
              <h4 className="text-center">Tambah Alamat</h4>
              <AddAddresses />
            </div>
          </div>
        ) : (
          <div className="sidebar-profile">
            <h1>Me</h1>
          </div>
        )}
      </div>
    </div> */
}

// const me = user.user;
//   const [page, setPage] = useState("me");
//   //console.log(page);

//   if (page === "me") {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-3">
//             <div className="sidebar">
//               <ul className="sidebarList">
//                 {sidebarData.map((val, key) => {
//                   return (
//                     <li
//                       key={key}
//                       className="row"
//                       id={page === val.link ? "active" : ""}
//                       onClick={() => setPage(val.link)}
//                     >
//                       {" "}
//                       <div id="icon">{val.icon}</div>{" "}
//                       <div id="title">{val.title}</div>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           </div>
//           <div className="col-9">
//             <div className="page">
//               <Me me={me} />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (page === "order") {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-3">
//             <div className="sidebar">
//               <ul className="sidebarList">
//                 {sidebarData.map((val, key) => {
//                   return (
//                     <li
//                       key={key}
//                       className="row"
//                       id={page === val.link ? "active" : ""}
//                       onClick={() => setPage(val.link)}
//                     >
//                       {" "}
//                       <div id="icon">{val.icon}</div>{" "}
//                       <div id="title">{val.title}</div>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           </div>
//           <div className="col-9">
//             <div className="page">
//               <Order me={me} />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (page === "delivery-addresses") {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-3">
//             <div className="sidebar">
//               <ul className="sidebarList">
//                 {sidebarData.map((val, key) => {
//                   return (
//                     <li
//                       key={key}
//                       className="row"
//                       id={page === val.link ? "active" : ""}
//                       onClick={() => setPage(val.link)}
//                     >
//                       {" "}
//                       <div id="icon">{val.icon}</div>{" "}
//                       <div id="title">{val.title}</div>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           </div>
//           <div className="col-9">
//             <div className="page">
//               <h4 className="text-center">Alamat Saya</h4>
//               <DeliveryAddresses me={me} />
//               <div className="add-addresses">
//                 <button
//                   className="btn btn-primary"
//                   onClick={() => setPage("tambahalamat")}
//                 >
//                   Tambah
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (page === "tambahalamat") {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-3">
//             <div className="sidebar">
//               <ul className="sidebarList">
//                 {sidebarData.map((val, key) => {
//                   return (
//                     <li
//                       key={key}
//                       className="row"
//                       id={page === val.link ? "active" : ""}
//                       onClick={() => setPage(val.link)}
//                     >
//                       {" "}
//                       <div id="icon">{val.icon}</div>{" "}
//                       <div id="title">{val.title}</div>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           </div>
//           <div className="col-9">
//             <div className="page">
//               <h4 className="text-center">Tambah Alamat</h4>
//               <AddAddresses />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
