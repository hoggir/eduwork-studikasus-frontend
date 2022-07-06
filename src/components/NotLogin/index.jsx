import React from "react";
import { Link } from "react-router-dom";

export default function NotLogin() {
  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center">Silahakan login terlebih dahulu!</h1>
      <div>
        <Link to={"/login"} className="btn btn-primary">
          LOGIN
        </Link>
      </div>
    </div>
  );
}
