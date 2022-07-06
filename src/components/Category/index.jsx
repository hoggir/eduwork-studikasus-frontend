import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListProduct } from "../../actions/productAction";
import { getListCategory } from "../../actions/categoryAction";
import "./index.css";

function Category() {
  const {
    getListCategoriesResult,
    getListCategoriesLoading,
    getListCategoriesError,
  } = useSelector((state) => state.CategoryReducer);
  const [page, setPage] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListProduct());
    dispatch(getListCategory());
  }, [dispatch]);

  const handleOnclick = (e) => {
    e.preventDefault();
    setPage(e.target.value);
    dispatch(getListProduct({ searchCategory: e.target.value }));
  };

  return (
    <div className="container">
      <div className="category-wrapper">
        <div className="category-container">
          <ul>
            <li className="category-box">
              <button
                value=""
                id={page === "" ? "active" : ""}
                onClick={handleOnclick}
                className="category-button"
              >
                All
              </button>
            </li>
            {getListCategoriesResult ? (
              getListCategoriesResult.map((category) => {
                return (
                  <li className="category-box" key={category._id}>
                    <button
                      value={category.name}
                      id={page === category.name ? "active" : ""}
                      onClick={handleOnclick}
                      className="category-button"
                    >
                      {category.name}
                    </button>
                  </li>
                );
              })
            ) : getListCategoriesLoading ? (
              <p className="text-center">Loading . . .</p>
            ) : (
              <p>
                {getListCategoriesError
                  ? getListCategoriesError
                  : "data kosong"}
              </p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Category;
