import { useEffect } from "react";
import "./index.css";
import FoodCard from "../../components/FoodCard";
import { useDispatch, useSelector } from "react-redux";
import { getListProduct } from "../../actions/productAction";
import { getListTag } from "../../actions/tagAction";
import Tag from "../../components/Tags";
import SearchProduct from "../../components/Search";
import Jumbotron from "../../components/Jumbotron";

function Home() {
  const { getListTagResult, getListTagLoading, getListTagError } = useSelector(
    (state) => state.TagReducer
  );

  const { getListProductResult, getListProductLoading, getListProductError } =
    useSelector((state) => state.ProductReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListProduct());
    dispatch(getListTag());
  }, [dispatch]);

  return (
    <div className="container">
      <SearchProduct />

      <Jumbotron />

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
  );
}

export default Home;
