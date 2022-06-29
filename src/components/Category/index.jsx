import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ListGroup } from "react-bootstrap";
import { getListProduct } from "../../actions/productAction";
import "./index.css";

function Category({ category }) {
  const [page, setPage] = useState("");

  const handleOnclick = (e) => {
    e.preventDefault();
    setPage(e.target.value);
    alert(e.target.value);
  };
  return (
    <li className="tm-paging-item" key={category._id}>
      <button
        value={category.name}
        id={page === category.name ? "active" : ""}
        //onClick={() => setPage(category.name)}
        onClick={handleOnclick}
        className="tm-paging-link"
      >
        {category.name}
      </button>
    </li>
    // <button className="card-text-tags" value={category.name}>
    //   <i className="fa fa-tags"></i>
    //   {category.name}
    // </button> className="tm-paging-link">
  );
}
export default Category;
