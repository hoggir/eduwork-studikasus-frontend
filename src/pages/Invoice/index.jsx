import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../actions/userAction";
import "./index.css";

function Invoice() {
  const { getInvoice } = useSelector((state) => state.OrderReducer);
  const { user } = useSelector((state) => state.UserReducer);
  //console.log(user);
  const [invoiceData, setInvoiceData] = useState("");
  const [userData, setUserData] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    if (getInvoice) {
      setInvoiceData(getInvoice);
    }
    if (user) {
      setUserData(user);
    }
  }, [getInvoice, user]);

  return (
    <div className="container">
      <div className="invoice-wrapper">
        <div className="invoice-tag">Invoice</div>

        <div className="invoice-main">
          <hr />
          <div className="row">
            <div className="col-6">
              <div className="ml-3">Status</div>
            </div>
            <div className="col-6">
              <div>{invoiceData.status}</div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6">
              <div className="ml-3">Order ID</div>
            </div>
            <div className="col-6">
              <div>{invoiceData._id}</div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6">
              <div className="ml-3">Total Pembelian</div>
            </div>
            <div className="col-6">
              <div>{invoiceData.bill}</div>
            </div>
          </div>
          <hr />
          <div className="row mb-3">
            <div className="col-6">
              <div className="ml-3">Billed to</div>
            </div>
            <div className="col-6">
              <div className="invoice-billed">
                {userData ? <div>{userData.full_name}</div> : <div></div>}
                {userData ? <div>{userData.email}</div> : <div></div>}
                {invoiceData ? (
                  <div>{invoiceData.delivery_address.name}</div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Invoice;
