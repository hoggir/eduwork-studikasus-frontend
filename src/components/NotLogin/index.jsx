import React from "react";
import { Link } from "react-router-dom";

export default function NotLogin() {
  return (
    <div className="container">
      <h1>ANDA BELUM LOGIN!!!</h1>
      <li className="btn btn-primary">
        <Link to={"/login"} className="btn btn-primary">
          Login
        </Link>
      </li>
    </div>
  );
}
