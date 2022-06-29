import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ListGroup } from "react-bootstrap";
import { getListProduct } from "../../actions/productAction";
import "./index.css";

function SpecialFood({ food }) {
  function convertToRupiah(angka) {
    var rupiah = "";
    var angkarev = angka.toString().split("").reverse().join("");
    for (var i = 0; i < angkarev.length; i++)
      if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + ".";
    return (
      "Rp. " +
      rupiah
        .split("", rupiah.length - 1)
        .reverse()
        .join("")
    );
  }
  return (
    <div className="col-md-4">
      <div className="home-special-card">
        <div className="special-image">
          <img
            className="special-image-img"
            src={`http://localhost:3000/images/products/${food.image_url}`}
            alt="Food Image"
          />
          <div className="special-image-overlay">
            <h4 className="special-image-title">{food.name}</h4>
            <p className="special-image-desc">{food.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SpecialFood;
