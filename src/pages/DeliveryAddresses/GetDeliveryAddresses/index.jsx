import React, { useEffect } from "react";
import DeliveryAddressesComp from "../../../components/DeliveryAddressesComp";
import { useDispatch, useSelector } from "react-redux";
import { getDeliveryAddresses } from "../../../actions/addressesAction";

function DeliveryAddresses() {
  const {
    getListAddressesResult,
    getListAddressesLoading,
    getListAddressesError,
    deleteAddressesResult,
  } = useSelector((state) => state.AddressesReducer);
  console.log(getListAddressesResult);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDeliveryAddresses());
    // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    if (deleteAddressesResult) {
      dispatch(getDeliveryAddresses());
    }
    // eslint-disable-next-line
  }, [deleteAddressesResult, dispatch]);

  return (
    <div>
      {getListAddressesResult ? (
        getListAddressesResult.map((addresses) => {
          return (
            <DeliveryAddressesComp key={addresses._id} addresses={addresses} />
          );
        })
      ) : getListAddressesLoading ? (
        <p>Loading . . .</p>
      ) : (
        <p>{getListAddressesError ? getListAddressesError : "data kosong"}</p>
      )}
    </div>
  );
}

export default DeliveryAddresses;
