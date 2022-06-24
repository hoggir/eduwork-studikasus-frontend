import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartAction";
import "./index.css";

function FoodCard({ product }) {
  const dispatch = useDispatch();

  const initialState = {
    ...product,
    qty: 1,
  };

  function convertToRupiah(angka) {
    var rupiah = "";
    var angkarev = angka.toString().split("").reverse().join("");
    for (var i = 0; i < angkarev.length; i++)
      if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + ".";
    return (
      "Rp. " +
      rupiah
        .split("", rupiah.length - 1)
        .reverse()
        .join("")
    );
  }

  return (
    <div className="col-md-4">
      <div className="card">
        <img
          className="news-img"
          src={`http://localhost:3000/images/products/${product.image_url}`}
          alt=""
        />
        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <div className="card-text">{product.description}</div>
          <div className="tags-wrapper">
            <div className="tags">
              {product.tags.map((value, index) => {
                return (
                  <div key={index} className="card-text-tags">
                    <i className="fa fa-tags"></i>
                    {" " + value.name + " "}
                  </div>
                );
              })}
            </div>
          </div>
          <p className="card-text">{convertToRupiah(product.price)}</p>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(addToCart(initialState))}
            //onClick={() => dispatch({ type: "ADD_CART", payload: product })}
            //onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          >
            <i className="fa fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
