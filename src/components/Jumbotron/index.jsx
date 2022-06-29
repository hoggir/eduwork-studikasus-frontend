import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Jumbotron() {
  return (
    <div className="jumbotron-wrapper">
      <div className="jumbotron-main container">
        <div className="row">
          <div className="col-md-6">
            <div className="left-jumbotron">
              <h1>
                Welcome to <br />
                Our Food Shop
              </h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <div className="jumbotron-left-button">
                <Link to="/food">
                  <button href="" className="text-uppercase jumbotron-button">
                    order now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-jumbotron d-flex">
              <div>
                <img
                  src={`http://localhost:3000/images/products/jumbo-img.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
