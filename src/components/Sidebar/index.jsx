import React, { useState } from "react";
import "./index.css";
import { sidebarData } from "./sidebarData";
import Me from "../Me";
import Order from "../../pages/Order/GetOrder";
import DeliveryAddresses from "../../pages/DeliveryAddresses/GetDeliveryAddresses";
import AddAddresses from "../../pages/DeliveryAddresses/AddDeliveryAddresses";
//import EditAddresses from "../../pages/DeliveryAddresses/EditDeliveryAddresses";

function Sidebar(user) {
  const me = user.user;
  const [page, setPage] = useState("me");
  //console.log(page);

  if (page === "me") {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="sidebar">
              <ul className="sidebarList">
                {sidebarData.map((val, key) => {
                  return (
                    <li
                      key={key}
                      className="row"
                      id={page === val.link ? "active" : ""}
                      onClick={() => setPage(val.link)}
                    >
                      {" "}
                      <div id="icon">{val.icon}</div>{" "}
                      <div id="title">{val.title}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-9">
            <div className="page">
              <Me me={me} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (page === "order") {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="sidebar">
              <ul className="sidebarList">
                {sidebarData.map((val, key) => {
                  return (
                    <li
                      key={key}
                      className="row"
                      id={page === val.link ? "active" : ""}
                      onClick={() => setPage(val.link)}
                    >
                      {" "}
                      <div id="icon">{val.icon}</div>{" "}
                      <div id="title">{val.title}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-9">
            <div className="page">
              <Order me={me} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (page === "delivery-addresses") {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="sidebar">
              <ul className="sidebarList">
                {sidebarData.map((val, key) => {
                  return (
                    <li
                      key={key}
                      className="row"
                      id={page === val.link ? "active" : ""}
                      onClick={() => setPage(val.link)}
                    >
                      {" "}
                      <div id="icon">{val.icon}</div>{" "}
                      <div id="title">{val.title}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-9">
            <div className="page">
              <h4 className="text-center">Alamat Saya</h4>
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
          </div>
        </div>
      </div>
    );
  }

  if (page === "tambahalamat") {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="sidebar">
              <ul className="sidebarList">
                {sidebarData.map((val, key) => {
                  return (
                    <li
                      key={key}
                      className="row"
                      id={page === val.link ? "active" : ""}
                      onClick={() => setPage(val.link)}
                    >
                      {" "}
                      <div id="icon">{val.icon}</div>{" "}
                      <div id="title">{val.title}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-9">
            <div className="page">
              <h4 className="text-center">Tambah Alamat</h4>
              <AddAddresses />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
