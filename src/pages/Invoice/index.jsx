import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../actions/userAction";
import "./index.css";

function Invoice() {
  const { getInvoice } = useSelector((state) => state.OrderReducer);
  const { user } = useSelector((state) => state.UserReducer);
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
              <div className="ml-3">Billed to</div>
            </div>
            <div className="col-6">
              <div className="invoice-billed">
                {userData ? (
                  <div className="invoice-user-name">{userData.full_name}</div>
                ) : (
                  <div></div>
                )}
                {userData ? (
                  <div className="invoice-user-email">{userData.email}</div>
                ) : (
                  <div></div>
                )}
                {invoiceData ? (
                  <div className="invoice-alamat">
                    {invoiceData.delivery_address.provinsi},{" "}
                    {invoiceData.delivery_address.kabupaten},{" "}
                    {invoiceData.delivery_address.kecamatan},{" "}
                    {invoiceData.delivery_address.kelurahan} (
                    {invoiceData.delivery_address.name})
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
          <hr />

          <div className="row  mb-3">
            <div className="col-6">
              <div className="ml-3">Products</div>
            </div>
            <div className="col-6">
              {invoiceData ? (
                invoiceData.products.length > 0 &&
                invoiceData.products.map((productsItem) => {
                  return (
                    <div className="invoice-order-products-container">
                      <div className="invoice-order-products">
                        <div className="invoice-order-products-items">
                          <div className="invoice-products-img">
                            <img
                              className="invoice-card-img"
                              src={`http://localhost:3000/images/products/${productsItem.image_url}`}
                              alt=""
                            />
                          </div>
                          <div className="invoice-products-desc">
                            <div>{productsItem.name}</div>
                            <div>x {productsItem.quantity}</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="mr-3">
                          {convertToRupiah(productsItem.price)}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <hr />
          <div className="row  mb-3">
            <div className="col-6">
              <div className="ml-3">Ongkos Kirim</div>
            </div>
            <div className="col-6">
              {invoiceData ? (
                <div>{convertToRupiah(invoiceData.delivery_fee)}</div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <hr />
          <div className="row  mb-3">
            <div className="col-6">
              <div className="ml-3">Total Pembelian</div>
            </div>
            <div className="col-6">
              {invoiceData ? (
                <div className="invoice-total">
                  {convertToRupiah(invoiceData.bill)}
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Invoice;
