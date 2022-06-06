import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
import { AuthContext } from "../../App";
import ProfileComp from "../../components/Profile";

const API = "http://localhost:3000/auth";

function Profile() {
  const { state } = useContext(AuthContext);
  const [user, setUser] = useState({});

  const fetchData = () => {
    var config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + state.token,
      },
    };

    axios
      .get(API + "/me", config)
      .then((res) => {
        setUser(res.data);
      })
      .catch((e) => {
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  // if (!state.isAuth) {
  //   return <Navigate to="/" />;
  // }

  return (
    <div>
      <p>{user.full_name}</p>
      <ProfileComp />
    </div>
  );
}

export default Profile;
