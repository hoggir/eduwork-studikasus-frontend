import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../../actions/userAction";
import { loadCurrentItem, removeFromCart } from "../../actions/cartAction";
import CartComp from "../../components/Cart";
import "./index.css";

function Cart() {
  const { cek } = useSelector((state) => state.UserReducer);
  const { cartItem } = useSelector((state) => state.Reducer);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    if (!cek) {
      alert("Anda belum login!");
      Navigate("/login");
    }
  }, [cek, Navigate]);

  useEffect(() => {
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
      <div className="cart-container">
        <div className="cart-title-box">
          <h1>Cart</h1>
          <p>
            Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
            vehicula enim, non aliquam risus.
          </p>
        </div>
        <div className="row cart-row">
          {cartItem.length > 0 &&
            cartItem.map((food) => {
              return <CartComp key={food._id} food={food} />;
            })}
        </div>

        <div className="shopping-summary-container">
          <div className="shopping-summary-box">
            <p className="shopping-summary-title">Ringkasan belanja</p>
            <div className="shopping-summary-total text-muted">
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
