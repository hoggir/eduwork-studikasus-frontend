import { useEffect, useState } from "react";
import "./index.css";
import Footer from "../../components/Footer";
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
import { Link } from "react-router-dom";

function Home() {
  const { getListTagResult, getListTagLoading, getListTagError } = useSelector(
    (state) => state.TagReducer
  );

  const {
    getListCategoriesResult,
    getListCategoriesLoading,
    getListCategoriesError,
  } = useSelector((state) => state.CategoryReducer);

  const { getListProductResult, getListProductLoading, getListProductError } =
    useSelector((state) => state.ProductReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListProduct({ searchTag: "special" }));
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

  return (
    <div>
      <Jumbotron />

      <div className="container">
        <div className="home-main">
          <h1 className="home-text">Special Menu</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {getListProductResult ? (
            getListProductResult.map((product) => {
              return <SpecialFood key={product._id} food={product} />;
            })
          ) : getListProductLoading ? (
            <p>Loading . . .</p>
          ) : (
            <p>{getListProductError ? getListProductError : "data kosong"}</p>
          )}
        </div>
        <div className="more-food-button">
          <Link to="/food">
            <button href="" className="text-uppercase more-button">
              more food
            </button>
          </Link>
        </div>
      </div>

      {/* <div className="home-bottom">
        <div className="home-bottom-main">
          <img
            className="home-bottom-main-img"
            src={`http://localhost:3000/images/products/footer-bg.jpg`}
            alt="Food Image"
          />
          <div className="home-bottom-main-overlay">
            <h1 className="home-bottom-main-text">very tasty foods</h1>
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

      {/* <div className="container">
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
      </div> */}

      {/* <div className="container">
        <div className="tags-wrapper">
          <div className="tags">
            <div className="tags-title">Tags :</div>
            {getListTagResult ? (
              getListTagResult.map((tag) => {
                return <Tag key={tag._id} tag={tag} />;
              })
            ) : getListTagLoading ? (
              <p>Loading . . .</p>
            ) : (
              <p>{getListTagError ? getListTagError : "data kosong"}</p>
            )}
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
