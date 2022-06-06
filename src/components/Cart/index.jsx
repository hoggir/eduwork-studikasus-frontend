import React, { useContext } from "react";
import { AuthContext } from "../../App";
import { Navigate } from "react-router-dom";

function Cart() {
  const { state } = useContext(AuthContext);

  if (!state.isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container">
      <h3>CART</h3>
    </div>
  );
}

export default Cart;
