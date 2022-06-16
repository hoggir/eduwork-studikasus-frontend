import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";

function Cart() {
  const cart = useSelector((state) => state.Reducer);
  console.log(cart);
  const dispatch = useDispatch();

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

  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);

  return (
    <div className="container">
      <div className="cart-wrapper">
        <div className="row all-cart">
          {cart.map((item) => {
            return (
              <div className="cart-item">
                <div className="cart-left">
                  <img
                    className="card-img"
                    src={`http://localhost:3000/images/products/${item.image_url}`}
                    alt=""
                  />
                  <div className="cart-desc">
                    <div className="cart-title">{item.name}</div>
                    <div className="cart-description">{item.description}</div>
                    <div className="cart-price">
                      {convertToRupiah(item.price)}
                    </div>
                    <div className="cart-subtotal">
                      Subtotal: {convertToRupiah(item.price * item.quantity)}
                    </div>
                  </div>
                </div>
                <div className="cart-right">
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      dispatch({ type: "INCREASE", payload: item })
                    }
                  >
                    +
                  </button>
                  <div className="text-center mt-1 mb-1">{item.quantity}</div>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      if (item.quantity > 1) {
                        dispatch({ type: "DECREASE", payload: item });
                      } else {
                        dispatch({ type: "REMOVE", payload: item });
                      }
                    }}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch({ type: "REMOVE", payload: item })}
                  >
                    Hapus
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {total > 0 && <h2>Total Harga: {convertToRupiah(total)}</h2>}
      </div>
    </div>
  );
}

export default Cart;

{
  /* <div className="row all-food">
        {cart.map((item) => {
          return (
            <div  key={item._id} className="col-md-4">
              <div className="card">
                <img
                  className="news-img"
                  src={`http://localhost:3000/images/products/${item.image_url}`}
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title">{item.name}</h4>
                  <div className="card-text">{item.description}</div>
                  <div className="tags-wrapper"></div>
                  <p className="card-text">{item.price}</p>
                  <button className="btn btn-primary">
                    <i className="fa fa-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div> */
}
