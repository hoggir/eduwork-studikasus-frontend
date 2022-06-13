import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../actions/loginAction";
import axios from "axios";
import "./index.css";

const qs = require("query-string");

function Navigation() {
  const { user } = useSelector((state) => state.LoginReducer);
  const API = "http://localhost:3000/auth";
  var token = JSON.parse(localStorage.getItem("token"));
  var isLogin = JSON.parse(localStorage.getItem("login"));
  const dispatch = useDispatch();

  if (token) {
    localStorage.setItem("login", true);
  }

  const onClickLogout = () => {
    const requestBody = {
      token: token,
    };
    var config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
      },
    };
    axios
      .post(API + "/logout", qs.stringify(requestBody), config)
      .then((res) => {
        //console.log(res);
        dispatch(logoutUser({ res: res }));
        alert(res.data.message);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (!isLogin) {
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
          {user && <div className="nav-name">{user.full_name}</div>}
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
