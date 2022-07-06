import React from "react";
import { useDispatch } from "react-redux";
import { incQty, decQty, removeFromCart } from "../../actions/cartAction";
import DeleteIcon from "@mui/icons-material/Delete";
import "./index.css";

function CartComp({ food }) {
  const dispatch = useDispatch();
  const initialState = {
    ...food,
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
    <div className="cart-box">
      <div className="cart-left-items">
        <img
          src={`http://localhost:3000/images/products/${food.image_url}`}
          alt=""
        />
        <div className="cart-left-contents">
          <div>{food.name}</div>
          <div className="cart-left-food-price">
            {convertToRupiah(food.price)}
          </div>
          <div>Subtotal: {convertToRupiah(food.price * food.quantity)}</div>
        </div>
      </div>

      <div className="cart-right-items">
        <button
          onClick={() => dispatch(incQty(initialState))}
          className="btn btn-primary"
        >
          +
        </button>

        <div className="text-center mt-1 mb-1">{food.quantity}</div>

        <button
          className="btn btn-primary"
          onClick={() => {
            if (food.quantity > 1) {
              dispatch(decQty(initialState));
            } else {
              dispatch(removeFromCart(initialState));
            }
          }}
        >
          -
        </button>

        <button
          className="btn btn-danger mt-1"
          onClick={() => dispatch(removeFromCart(food))}
        >
          <DeleteIcon style={{ fontSize: 20 }} />
        </button>
      </div>
    </div>
  );
}

export default CartComp;
