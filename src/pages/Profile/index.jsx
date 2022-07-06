import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import NotLogin from "../../components/NotLogin";
import Sidebar from "../../components/Sidebar";
import { getUser } from "../../actions/userAction";

function Profile() {
  const { cek, user } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div>
      {cek ? (
        <Sidebar user={user} />
      ) : (
        <div className="container">
          <NotLogin />
        </div>
      )}
    </div>
  );
}

export default Profile;
