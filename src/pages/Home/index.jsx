import { useEffect } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { getListProduct } from "../../actions/productAction";
import { getListTag } from "../../actions/tagAction";
import { getListCategory } from "../../actions/categoryAction";
import { loadCurrentItem } from "../../actions/cartAction";
import SpecialFood from "../../components/SpecialFood";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";

function Home() {
  const { getListProductResult, getListProductLoading, getListProductError } =
    useSelector((state) => state.ProductReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListProduct({ searchTag: "special" }));
    dispatch(getListTag());
    dispatch(getListCategory());
    dispatch(loadCurrentItem());
  }, [dispatch]);

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
    </div>
  );
}

export default Home;
