import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrder, getOneOrder } from "../../../actions/orderAction";
import "./index.css";

function Order() {
  const { getOrderResult } = useSelector((state) => state.OrderReducer);
  const dispatch = useDispatch();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);

  useEffect(() => {
    if (getOrderResult) {
      setOrders(getOrderResult);
    }
  }, [getOrderResult, dispatch]);

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
    <div className="my-order-container">
      {orders.length > 0 &&
        orders.map((orderItem) => {
          return (
            <div className="order-item-container">
              <div className="row order-items" key={orderItem._id}>
                <div className="col-3">{orderItem.status}</div>
                <div className="col-3">
                  {convertToRupiah(orderItem.delivery_fee)}
                </div>
                <div className="col-3">{convertToRupiah(orderItem.bill)}</div>
                <div className="col-3 invoice-button">
                  <Link to={"/invoice"}>
                    <button
                      className="btn btn-info"
                      onClick={() => dispatch(getOneOrder(orderItem._id))}
                    >
                      Invoice
                    </button>
                  </Link>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
    </div>
  );
}
export default Order;
