import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListProduct } from "../../actions/productAction";
import { getListTag } from "../../actions/tagAction";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import "./index.css";

function Tag() {
  const { getListTagResult, getListTagLoading, getListTagError } = useSelector(
    (state) => state.TagReducer
  );
  const [page, setPage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListProduct());
    dispatch(getListTag());
  }, [dispatch]);

  const handleInput = (e) => {
    e.preventDefault();
    setPage(e.target.value);
    dispatch(getListProduct({ searchTag: e.target.value }));
  };

  return (
    <div className="container">
      <div className="food-tags-container">
        <ul>
          <div className="food-tags-ul">
            <p className="food-tags-title">Tags:</p>
            <div>
              <li className="food-tags-item">
                <button
                  id={page === "" ? "active" : ""}
                  className="food-tags-button"
                  onClick={handleInput}
                  value=""
                >
                  <LocalOfferIcon
                    style={{ fontSize: 14 }}
                    className="food-tags-icon"
                  />
                  All
                </button>
              </li>
              {getListTagResult ? (
                getListTagResult.map((tag) => {
                  return (
                    <li key={tag._id} className="food-tags-item">
                      <button
                        id={page === tag.name ? "active" : ""}
                        className="food-tags-button"
                        onClick={handleInput}
                        value={tag.name}
                      >
                        <LocalOfferIcon
                          style={{ fontSize: 14 }}
                          className="food-tags-icon"
                        />
                        {tag.name}
                      </button>
                    </li>
                  );
                })
              ) : getListTagLoading ? (
                <p>Loading . . .</p>
              ) : (
                <p>{getListTagError ? getListTagError : "data kosong"}</p>
              )}
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Tag;
