import React from "react";
import { useDispatch } from "react-redux";
import {
  incQty,
  decQty,
  removeFromCart,
} from "../../actions/cartAction";
import "./index.css";

function CartComp({ food }) {
  const dispatch = useDispatch();

  const initialState = {
    ...food,
    qty: 1,
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
    <div className="cart-item">
      <div className="cart-left">
        <img
          className="card-img"
          src={`http://localhost:3000/images/products/${food.image_url}`}
          alt=""
        />
        <div className="cart-desc">
          <div className="cart-title">{food.name}</div>
          <div className="cart-title">{food._id}</div>

          <div className="cart-price">{convertToRupiah(food.price)}</div>
          <div className="cart-subtotal">
            Subtotal: {convertToRupiah(food.price * food.quantity)}
          </div>
        </div>
      </div>
      <div className="cart-right">
        <button
          onClick={() => dispatch(incQty(initialState))}
          className="btn btn-primary"
        >
          +
        </button>
        <div className="text-center mt-1 mb-1">{food.quantity}</div>
        <button
          className="btn btn-primary"
          onClick={() => {
            if (food.quantity > 1) {
              dispatch(decQty(initialState));
            } else {
              dispatch(removeFromCart(initialState));
            }
          }}
        >
          -
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(removeFromCart(food))}
        >
          Hapus
        </button>
      </div>
    </div>
  );
}

export default CartComp;

// {cart.map((item) => {
//   return (
//     <div key={item._id} className="cart-item">
//       <div className="cart-left">
//         <img
//           className="card-img"
//           src={`http://localhost:3000/images/products/${item.image_url}`}
//           alt=""
//         />
//         <div className="cart-desc">
//           <div className="cart-title">{item._id}</div>
//           <div className="cart-title">{item.name}</div>
//           <div className="cart-description">{item.description}</div>
//           <div className="cart-price">
//             {convertToRupiah(item.price)}
//           </div>
//           <div className="cart-subtotal">
//             Subtotal: {convertToRupiah(item.price * item.qty)}
//           </div>
//         </div>
//       </div>
//       <div className="cart-right">
//         <button
//           className="btn btn-primary"
//           onClick={() => dispatch(incQty(item))}
//         >
//           +
//         </button>
//         <div className="text-center mt-1 mb-1">{item.qty}</div>
//         <button
//           className="btn btn-primary"
//           onClick={() => {
//             if (item.qty > 1) {
//               dispatch(decQty(item));
//             } else {
//               dispatch(removeFromCart(item));
//             }
//           }}
//         >
//           -
//         </button>
//         <button
//           className="btn btn-danger"
//           onClick={() => dispatch(removeFromCart(item))}
//         >
//           Hapus
//         </button>
//       </div>
//     </div>
//   );
// })}