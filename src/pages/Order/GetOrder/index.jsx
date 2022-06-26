import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrder, getOneOrder } from "../../../actions/orderAction";
import GetOrderComp from "../../../components/Order/GetOrderComp";
import "./index.css";

function Order() {
  const { getOrderResult } = useSelector((state) => state.OrderReducer);
  //console.log(data);
  const dispatch = useDispatch();

  const [orders, setOrders] = useState([]);
  console.log(orders);

  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);

  useEffect(() => {
    if (getOrderResult) {
      setOrders(getOrderResult);
    }
  }, [getOrderResult, dispatch]);

  return (
    <div className="container">
      <div className="get-order-wrapper">
        {orders.length > 0 &&
          orders.map((orderItem) => {
            return <GetOrderComp key={orderItem._id} orderItem={orderItem} />;
          })}
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Nomor</th>
            <th>Pesanan</th>
            <th>Jumlah Pesanan</th>
            <th>Alamat</th>
            <th>Ongkos kirim</th>
            <th>Total Harga</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {orders.length > 0 &&
          orders.map((orderItem) => {
            return (
              <tbody>
                <tr>
                  {/* {orderItem.map((alamat) => {
                    return <td>{alamat.provinsi}</td>;
                  })} */}
                  <td>{orderItem._id}</td>
                  <td>pesanan</td>
                  <td>jumlah pesanan</td>
                  <td>
                    {orderItem.delivery_address.kelurahan},{" "}
                    {orderItem.delivery_address.kecamatan},{" "}
                    {orderItem.delivery_address.kabupaten},{" "}
                    {orderItem.delivery_address.provinsi} (
                    {orderItem.delivery_address.name})
                  </td>
                  <td>{orderItem.delivery_fee}</td>
                  <td>{orderItem.bill}</td>
                  <td>{orderItem.status}</td>
                  <td>
                    <Link to={"/invoice"}>
                      <button
                        onClick={() => dispatch(getOneOrder(orderItem._id))}
                        className="btn btn-primary"
                      >
                        VIEW
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
}
{
  /* <Link to={"/invoice"}>
  <button className="btn mt-2" onClick={checkoutHandleClick}>
    CHECKOUT
  </button>
</Link>; */
}
export default Order;
