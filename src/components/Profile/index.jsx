import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function ProfileComp(data) {
  //console.log(data);
  return (
    <div className="container">
      
      <li className="btn btn-primary">
        <Link to={"/delivery-addresses"} className="nav-link">
          Tambah Delivery Addresses
        </Link>
      </li>
    </div>
  );
}

export default ProfileComp;
