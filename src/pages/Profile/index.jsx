import axios from "axios";
import React, { useEffect, useState } from "react";
import NotLogin from "../../components/NotLogin";
import Sidebar from "../../components/Sidebar";

const API = "http://localhost:3000/auth";

function Profile() {
  const [user, setUser] = useState({});
  var token = JSON.parse(localStorage.getItem("token"));

  const fetchData = () => {
    var config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    axios
      .get(API + "/me", config)
      .then((res) => {
        //console.log(res.data);
        setUser(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  if (user.error) {
    return (
      <div className="container">
        <NotLogin />
      </div>
    );
  }
  return (
    <div className="container">
      <Sidebar user={user}/>
    </div>
  );
}

export default Profile;
