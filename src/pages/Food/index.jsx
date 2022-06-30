import { useEffect, useState } from "react";
import "./index.css";
import FoodCard from "../../components/FoodCard";
import { useDispatch, useSelector } from "react-redux";
import { getListProduct } from "../../actions/productAction";
import { getListTag } from "../../actions/tagAction";
import { getListCategory } from "../../actions/categoryAction";
import { loadCurrentItem } from "../../actions/cartAction";
import Tag from "../../components/Tags";
import Category from "../../components/Category";
import SpecialFood from "../../components/SpecialFood";
import SearchProduct from "../../components/Search";
import Jumbotron from "../../components/Jumbotron";

function Food() {
  const { getListTagResult, getListTagLoading, getListTagError } = useSelector(
    (state) => state.TagReducer
  );
  const { getListProductResult, getListProductLoading, getListProductError } =
    useSelector((state) => state.ProductReducer);

  const {
    getListCategoriesResult,
    getListCategoriesLoading,
    getListCategoriesError,
  } = useSelector((state) => state.CategoryReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListProduct());
    dispatch(getListTag());
    dispatch(getListCategory());
    dispatch(loadCurrentItem());
  }, [dispatch]);

  const [page, setPage] = useState("");

  const handleOnclick = (e) => {
    e.preventDefault();
    setPage(e.target.value);
    dispatch(getListProduct({ searchCategory: e.target.value }));
  };

  const handleInput = (e) => {
    e.preventDefault();
    setPage(e.target.value);
    dispatch(getListProduct({ searchTag: e.target.value }));
  };
  return (
    <div>
      <div className="food-top">
        <h1>Menu</h1>
        <p>
          Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
          vehicula enim, non aliquam risus.
        </p>
      </div>
      <SearchProduct />
      <Tag />
      <Category />

      {/* <div className="container">
        <div className="tags-wrapper">
          <div className="tags">
            <ul>
              {getListTagResult ? (
                getListTagResult.map((tag) => {
                  return (
                    <li className="tag-li-item">
                      <button
                        id={page === tag.name ? "active" : ""}
                        className="tag-li-link"
                        onClick={handleInput}
                        value={tag.name}
                      >
                        <i className="fa fa-tags"></i>
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
            </ul>
          </div>
        </div>
      </div> */}

      {/* <div className="container">
        <div className="category-wrapper">
          <div className="category">
            <ul>
              {getListCategoriesResult ? (
                getListCategoriesResult.map((category) => {
                  return (
                    <li className="tm-paging-item" key={category._id}>
                      <button
                        value={category.name}
                        id={page === category.name ? "active" : ""}
                        onClick={handleOnclick}
                        className="tm-paging-link"
                      >
                        {category.name}
                      </button>
                    </li>
                  );
                })
              ) : getListCategoriesLoading ? (
                <p>Loading . . .</p>
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
      </div> */}

      <div className="container">
        <div className="row all-food">
          {getListProductResult ? (
            getListProductResult.map((product) => {
              return <FoodCard key={product._id} product={product} />;
            })
          ) : getListProductLoading ? (
            <p>Loading . . .</p>
          ) : (
            <p>{getListProductError ? getListProductError : "data kosong"}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Food;
