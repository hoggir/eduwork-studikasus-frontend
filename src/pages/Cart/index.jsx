import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCurrentItem, removeFromCart } from "../../actions/cartAction";
import CartComp from "../../components/Cart";

function Cart() {
  const { cart, cartItem } = useSelector((state) => state.Reducer);
  //console.log(cartItem);
  //console.log(cart.length);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCurrentItem());
  }, [dispatch]);

  useEffect(() => {
    if (removeFromCart) {
      dispatch(loadCurrentItem());
    }
    // eslint-disable-next-line
  }, [loadCurrentItem, dispatch]);

  return (
    <div className="container">
      <div className="cart-wrapper">
        <div className="row all-cart">
          {cartItem.length > 0 &&
            cartItem.map((food) => {
              return <CartComp key={food._id} food={food} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Cart;

// {cart.length > 0 ? (
//   cartItem.length > 0 ? (
//     cartItem.map((cartItem) => {
//       return <CartComp key={cartItem._id} cartItem={cartItem} />;
//     })
//   ) : (
//     <p>Tidak ada food dalam CART</p>
//   )
// ) : (
//   <h1>cart kosong</h1>
// )}
