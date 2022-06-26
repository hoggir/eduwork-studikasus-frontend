import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadCurrentItem, removeFromCart } from "../../actions/cartAction";
import CartComp from "../../components/Cart";

function Cart() {
  const { cartItem, cart } = useSelector((state) => state.Reducer);
  //console.log(cartItem);
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    console.log(cart);
    dispatch(loadCurrentItem());
  }, [dispatch]);

  useEffect(() => {
    let price = 0;
    let items = 0;
    cartItem.forEach((item) => {
      items += item.quantity;
      price += item.quantity * item.price;
    });
    setTotalPrice(price);
    setTotalItems(items);
  }, [cartItem, totalPrice, totalItems, setTotalItems, setTotalPrice]);

  useEffect(() => {
    if (removeFromCart) {
      dispatch(loadCurrentItem());
    }
    // eslint-disable-next-line
  }, [loadCurrentItem, dispatch]);

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
    <div className="container">
      <div className="cart-wrapper">
        <div className="row all-cart">
          {cartItem.length > 0 &&
            cartItem.map((food) => {
              return <CartComp key={food._id} food={food} />;
            })}
        </div>
        <div className="cart-sum-wrapper col-4">
          <div className="cart-sum">
            <p className="cart-sum-name">Ringkasan belanja</p>
            <div className="cart-total text-muted">
              <p>Total: ({totalItems} barang)</p>
              <p>{convertToRupiah(totalPrice)}</p>
            </div>
            <Link to={"/confirm-order"} className="nav-link">
              <button className="btn">Beli ({totalItems})</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
