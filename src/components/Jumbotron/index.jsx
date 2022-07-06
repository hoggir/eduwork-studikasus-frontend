import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../../actions/userAction";
import "./index.css";

export default function Jumbotron() {
  const { cek } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className="jumbotron-container">
      <div className="container">
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
                {cek ? (
                  <Link to="/food">
                    <button href="" className="text-uppercase jumbotron-button">
                      order now
                    </button>
                  </Link>
                ) : (
                  <Link to="/register">
                    <button href="" className="text-uppercase jumbotron-button">
                      join now
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-jumbotron">
              <div>
                <img
                  src={`http://localhost:3000/images/products/jumbo-img.png`}
                  alt="Gambar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
