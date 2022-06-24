export const ADD_TO_ORDER = "ADD_TO_ORDER";

export const addToOrder = (orderData) => {
  return (dispatch) => {
    console.log(orderData);
    dispatch({
      type: ADD_TO_ORDER,
      payload: {
        user: orderData.user,
        cart: orderData.cart,
        cartItem: orderData.cartItem,
        status: orderData.status,
        alamat: orderData.alamat,
        delivery_fee: orderData.delivery_fee,
        totalItemPrice: orderData.totalItemPrice,
        totalItemQuantity: orderData.totalItemQuantity,
        totalPrice: orderData.totalPrice,
      },
    });
  };
};
