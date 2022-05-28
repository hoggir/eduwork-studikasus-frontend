import React from "react";
import { useDispatch } from "react-redux";
import { getListProduct } from "../../actions/productAction";

function Tag({ tag }) {

  const dispatch = useDispatch()

  const handleInput = (e) => {

    dispatch(getListProduct({searchTag: e.target.value}))
  };

  return (
    <button
      className="card-text-tags"
      onClick={handleInput}
      value={tag.name}
    >
      <i className="fa fa-tags"></i>
      {tag.name}
    </button>
  );
}

export default Tag;
