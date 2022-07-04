import { useEffect } from "react";
import "./index.css";
import FoodCard from "../../components/FoodCard";
import { useDispatch, useSelector } from "react-redux";
import { getListProduct } from "../../actions/productAction";
import { getListTag } from "../../actions/tagAction";
import { getListCategory } from "../../actions/categoryAction";
import { loadCurrentItem } from "../../actions/cartAction";
import Tag from "../../components/Tags";
import Category from "../../components/Category";
import SearchProduct from "../../components/Search";

function Food() {
  const { getListProductResult, getListProductLoading, getListProductError } =
    useSelector((state) => state.ProductReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListProduct());
    dispatch(getListTag());
    dispatch(getListCategory());
    dispatch(loadCurrentItem());
  }, [dispatch]);

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
