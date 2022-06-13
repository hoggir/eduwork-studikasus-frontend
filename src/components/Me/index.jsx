import React from "react";
import "./index.css";

export default function me(data) {
  //console.log(data.me)
  return (
    <div className="me-wrapper">
      <div className="me-desc">
        <p>Full Name: {data.me.full_name}</p>
        <p>Email: {data.me.email}</p>
      </div>
    </div>
  );
}
