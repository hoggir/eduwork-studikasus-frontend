import { useDispatch, useSelector } from "react-redux";
import { logoutUser, getUser } from "../../actions/userAction";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./index.css";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useEffect, useState } from "react";
const qs = require("query-string");

function Navigation() {
  const { cek } = useSelector((state) => state.UserReducer);
  const API = "http://localhost:3000/auth";
  var token = JSON.parse(localStorage.getItem("token"));
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.Reducer);

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    setCartCount(0);
    if (cartItem) {
      cartItem.forEach((item) => {
        count += item.quantity;
      });
    }
    setCartCount(count);
  }, [cartItem, cartCount]);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  if (token) {
    localStorage.setItem("login", true);
  }

  const handleSelectRight = () => {
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
        dispatch(logoutUser({ res: res }));
        alert(res.data.message);
      })
      .catch((e) => {
        alert("Something worng!");
      });
  };

  return (
    <Navbar expand="lg" className="nav-color">
      <Container className="nav-con">
        <Navbar.Brand as={NavLink} to="/" className="logo">
          <div className="logo-on">On</div>
          <div>Food</div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mb-3 mt-3" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto" onSelect={handleSelectRight}>
            <Nav.Link as={NavLink} to="/food">
              <button className="cart-icon ml-1">
                <RestaurantMenuOutlinedIcon />
              </button>
            </Nav.Link>

            {cek &&
              (cartCount > 0 ? (
                <Nav.Link as={NavLink} to="/cart">
                  <button className="cart-icon">
                    <ShoppingBagOutlinedIcon />
                    <span className="cart-item-qty">{cartCount}</span>
                  </button>
                </Nav.Link>
              ) : (
                <Nav.Link as={NavLink} to="/cart">
                  <button className="cart-icon">
                    <ShoppingBagOutlinedIcon />
                    <span className="cart-item-qty">0</span>
                  </button>
                </Nav.Link>
              ))}

            {cek && (
              <Nav.Link as={NavLink} to="/profile">
                <button className="cart-icon ml-1">
                  <PersonOutlineOutlinedIcon />
                </button>
              </Nav.Link>
            )}

            {cek ? (
              <Nav.Link eventKey="1">
                <button className="cart-icon">
                  <LogoutOutlinedIcon />
                </button>
              </Nav.Link>
            ) : (
              <Nav.Link as={NavLink} to="/login">
                <button className="cart-icon">
                  <LoginOutlinedIcon />
                </button>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigation;
