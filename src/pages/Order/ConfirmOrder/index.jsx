import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCurrentItem } from "../../../actions/cartAction";
import { addToOrder } from "../../../actions/orderAction";
import { getUser } from "../../../actions/userAction";
import { getDeliveryAddresses } from "../../../actions/addressesAction";
import CartComp from "../../../components/Cart";
import "./index.css";
import { useNavigate } from "react-router-dom";

function ConfirmOrder() {
  const { user } = useSelector((state) => state.UserReducer);
  const { cart, cartItem } = useSelector((state) => state.Reducer);
  const { getOrderResult } = useSelector((state) => state.OrderReducer);
  const { getListAddressesResult } = useSelector(
    (state) => state.AddressesReducer
  );

  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [alamat, setAlamat] = useState([]);
  const [option, setOption] = useState("");
  const [ekspedisi, setEkspedisi] = useState([]);
  const [pekspedisi, setPekspedisi] = useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    dispatch(loadCurrentItem());
    dispatch(getDeliveryAddresses());
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    const kurir = [
      { name: "Opsi Pengiriman", ongkos: 0 },
      { name: "JNE", ongkos: 10000 },
      { name: "J&T", ongkos: 20000 },
      { name: "POS", ongkos: 5000 },
    ];
    setEkspedisi(kurir);
    if (getListAddressesResult) {
      setAlamat(getListAddressesResult);
    }
  }, [getListAddressesResult, dispatch]);

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
    if (getOrderResult) {
      dispatch(loadCurrentItem());
    }
  }, [getOrderResult, dispatch]);

  const addressHandleChange = (e) => {
    e.preventDefault();
    setOption(alamat[e.target.value]);
  };

  const ekspedisiHandleChange = (e) => {
    e.preventDefault();
    setPekspedisi(ekspedisi[e.target.value]);
  };
  const checkoutHandleClick = (e) => {
    e.preventDefault();

    const requestBody = {
      user: user,
      cart: cart,
      cartItem: cartItem,
      status: "waiting_payment",
      alamat: option,
      delivery_fee: pekspedisi,
      totalItemPrice: totalPrice,
      totalItemQuantity: totalItems,
      totalPrice: totalPrice + pekspedisi.ongkos,
    };

    const removecart = {
      cart: [],
    };

    if (cartItem.length === 0) {
      alert("Tidak ada makanan dalam cart!");
    } else if (option === "") {
      alert("Mohon isi alamat!");
      Navigate("/confirm-order");
    } else if (pekspedisi === "") {
      alert("Opsi pengiriman kosong!");
      Navigate("/confirm-order");
    } else if (pekspedisi.ongkos === 0) {
      alert("Opsi pengiriman kosong!");
      Navigate("/confirm-order");
    } else {
      dispatch(addToOrder(requestBody));
      dispatch(loadCurrentItem(removecart));
      alert("Pemesanan berhasil");
      Navigate("/");
    }
  };

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
      <div className="confirm-order-container mb-5">
        <div className="confirm-order-title">
          <h1>Konfirmasi Pemesanan</h1>
          <p>
            Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
            vehicula enim, non aliquam risus.
          </p>
        </div>

        <div>
          <label style={{ fontWeight: 600 }}>Pesanan</label>
          {cartItem.length > 0 &&
            cartItem.map((food) => {
              return <CartComp key={food._id} food={food} />;
            })}
        </div>

        <div className="confirm-order-addresses">
          <div className="form-group">
            <label className="form-label" style={{ fontWeight: 600 }}>
              Pilih Alamat
            </label>
            <select className="form-control" onChange={addressHandleChange}>
              <option value="">Alamat</option>
              {alamat.map((option, index) => (
                <option key={index} value={index}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="confirm-order-addresses mt-5">
          <div className="form-group">
            <label className="form-label" style={{ fontWeight: 600 }}>
              Opsi pengiriman
            </label>
            <select className="form-control" onChange={ekspedisiHandleChange}>
              {ekspedisi.map((kurir, index) => (
                <option key={index} value={index}>
                  {kurir.name} - {convertToRupiah(kurir.ongkos)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="order-checkout-container mt-5">
          <div className="order-checkout-box">
            <p className="order-checkout-title">Checkout</p>
            <div className="order-checkout-address">
              <div>Alamat pengiriman</div>
              {option ? (
                <div>
                  <div>
                    {option.name} ({user.full_name})
                  </div>
                  <div>
                    Kelurahan {option.kelurahan}, Kecamatan {option.kecamatan},{" "}
                    {option.kabupaten}, Provinsi {option.provinsi}
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>

            <div className="order-checkout-subtotal text-muted">
              <div>Total pesanan ({totalItems} makanan):</div>
              <div>{convertToRupiah(totalPrice)}</div>
            </div>

            <div className="order-checkout-shipping text-muted">
              <div>Ongkos kirim: ({pekspedisi.name})</div>
              {pekspedisi.ongkos ? (
                <div>{convertToRupiah(pekspedisi.ongkos)}</div>
              ) : (
                <div>Rp.</div>
              )}
            </div>

            <div className="order-checkout-payment-total">
              <div>Total Pembayaran: </div>
              {pekspedisi.ongkos ? (
                <div>{convertToRupiah(totalPrice + pekspedisi.ongkos)}</div>
              ) : (
                <div>{convertToRupiah(totalPrice)}</div>
              )}
            </div>

            <button className="btn mt-2" onClick={checkoutHandleClick}>
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmOrder;
