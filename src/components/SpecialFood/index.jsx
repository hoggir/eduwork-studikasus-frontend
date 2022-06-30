import React from "react";
import "./index.css";

function SpecialFood({ food }) {
  return (
    <div className="col-md-4">
      <div className="home-special-card">
        <div className="special-image">
          <img
            className="special-image-img"
            src={`http://localhost:3000/images/products/${food.image_url}`}
            alt="Food"
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
