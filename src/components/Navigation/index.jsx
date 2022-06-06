import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../App";
import axios from "axios";
import "./index.css";

const qs = require("query-string");

const API = "http://localhost:3000/auth";

function Navigation() {
  const { state, dispatch } = useContext(AuthContext);

  const onClickLogout = () => {
    const requestBody = {
      token: state.token,
    };

    var config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + state.token,
      },
    };

    axios
      .post(API + "/logout", qs.stringify(requestBody), config)
      .then((res) => {
        console.log(res);
        dispatch({
          type: "LOGOUT",
          payload: res.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (!state.isAuth) {
    return (
      <div>
        <nav className="navbar navbar-expand-lg shadow-sm p-3 mb-5">
          <div className="container">
            <Link to={"/"} className="navbar-brand">
              POS
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-sm p-3 mb-5">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            POS
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/cart"} className="nav-link">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-success" onClick={onClickLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
