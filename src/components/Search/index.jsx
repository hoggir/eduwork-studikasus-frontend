import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getListProduct } from "../../actions/productAction";

function SearchProduct() {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  // eslint-disable-next-line no-use-before-define
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getListProduct({ searchTerm: searchTerm }));
  };

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)} className="searchForm">
        <input
          className="form-control"
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="btn btn-primary oke">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SearchProduct;
