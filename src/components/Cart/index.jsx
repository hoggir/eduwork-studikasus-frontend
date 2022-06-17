import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incQty, decQty, removeFromCart } from "../../actions/cartAction";
import "./index.css";

function Cart() {
  const { cart } = useSelector((state) => state.Reducer);
  //console.log(cart);
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let price = 0;
    let items = 0;
    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice, totalItems, setTotalItems, setTotalPrice]);
  console.log(totalPrice);
  console.log(totalItems);

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
              <div key={item._id} className="cart-item">
                <div className="cart-left">
                  <img
                    className="card-img"
                    src={`http://localhost:3000/images/products/${item.image_url}`}
                    alt=""
                  />
                  <div className="cart-desc">
                    <div className="cart-title">{item._id}</div>
                    <div className="cart-title">{item.name}</div>
                    <div className="cart-description">{item.description}</div>
                    <div className="cart-price">
                      {convertToRupiah(item.price)}
                    </div>
                    <div className="cart-subtotal">
                      Subtotal: {convertToRupiah(item.price * item.qty)}
                    </div>
                  </div>
                </div>
                <div className="cart-right">
                  <button
                    className="btn btn-primary"
                    onClick={() => dispatch(incQty(item))}
                  >
                    +
                  </button>
                  <div className="text-center mt-1 mb-1">{item.qty}</div>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      if (item.qty > 1) {
                        dispatch(decQty(item));
                      } else {
                        dispatch(removeFromCart(item));
                      }
                    }}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(removeFromCart(item))}
                  >
                    Hapus
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-sum-wrapper col-4">
          <div className="cart-sum">
            <p className="cart-sum-name">Ringkasan belanja</p>
            <div className="cart-total text-muted">
              <p>Total: ({totalItems} barang)</p>
              <p>{convertToRupiah(totalPrice)}</p>
            </div>
            <button className="btn">Beli ({totalItems})</button>
          </div>
        </div>
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
