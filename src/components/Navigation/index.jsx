import { useDispatch, useSelector } from "react-redux";
import { logoutUser, getUser } from "../../actions/userAction";
import { loadCurrentItem } from "../../actions/cartAction";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import "./index.css";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useEffect, useState } from "react";
const qs = require("query-string");

function Navigation() {
  const { user, cek } = useSelector((state) => state.UserReducer);
  const API = "http://localhost:3000/auth";
  var token = JSON.parse(localStorage.getItem("token"));
  var isLogin = JSON.parse(localStorage.getItem("login"));
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.Reducer);
  const { getOrderResult } = useSelector((state) => state.OrderReducer);
  const [cartCount, setCartCount] = useState(0);
  const [sudahLogin, setSudahLogin] = useState(false);

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
        dispatch(logoutUser({ res: res }));
        alert(res.data.message);
      })
      .catch((e) => {
        alert("Something worng!");
      });
  };

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
            
            {cartCount > 0 ? (
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
            )}
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
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigation;

// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logoutUser, getUser } from "../../actions/userAction";
// import { loadCurrentItem } from "../../actions/cartAction";
// import axios from "axios";
// import "./index.css";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { useEffect, useState } from "react";
// const qs = require("query-string");

// function Navigation() {
//   const { user } = useSelector((state) => state.UserReducer);
//   //console.log(user);
//   const API = "http://localhost:3000/auth";
//   var token = JSON.parse(localStorage.getItem("token"));
//   var isLogin = JSON.parse(localStorage.getItem("login"));
//   const dispatch = useDispatch();
//   const { cartItem } = useSelector((state) => state.Reducer);
//   const { getOrderResult } = useSelector((state) => state.OrderReducer);
//   const [cartCount, setCartCount] = useState(0);

//   useEffect(() => {
//     let count = 0;
//     setCartCount(0);
//     if (cartItem) {
//       cartItem.forEach((item) => {
//         count += item.quantity;
//       });
//     }
//     if (getOrderResult) {
//       cartItem.forEach((item) => {
//         count += item.quantity;
//       });
//     }
//     setCartCount(count);
//   }, [cartItem, cartCount, getOrderResult]);

//   useEffect(() => {
//     dispatch(getUser());
//   }, [dispatch]);

//   console.log(user);

//   if (token) {
//     localStorage.setItem("login", true);
//   }

//   const onClickLogout = () => {
//     const requestBody = {
//       token: token,
//     };
//     var config = {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//         Authorization: "Bearer " + token,
//       },
//     };
//     axios
//       .post(API + "/logout", qs.stringify(requestBody), config)
//       .then((res) => {
//         dispatch(logoutUser({ res: res }));
//         alert(res.data.message);
//       })
//       .catch((e) => {
//         alert("Something worng!");
//       });
//   };

//   if (!isLogin) {
//     return (
//       <div>
//         <nav className="navbar navbar-expand-lg shadow-sm p-3 mb-5">
//           <div className="container">
//             <Link to={"/"} className="navbar-brand">
//               POS
//             </Link>
//             <div className="collapse navbar-collapse">
//               <ul className="navbar-nav ml-auto">
//                 <li className="nav-item">
//                   <Link to={"/login"} className="nav-link">
//                     Login
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg shadow-sm p-3 mb-5">
//         <div className="container">
//           <Link to={"/"} className="navbar-brand">
//             POS
//           </Link>
//           {user && <div className="nav-name">{user.full_name}</div>}
//           <div className="collapse navbar-collapse">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 {cartCount > 0 ? (
//                   <Link to={"/cart"} className="nav-link">
//                     <ShoppingCartIcon />{" "}
//                     <div className="nav-link-cart-icon">
//                       <div className="nav-link-cart-icon-text">{cartCount}</div>
//                     </div>
//                   </Link>
//                 ) : (
//                   <Link to={"/cart"} className="nav-link">
//                     <ShoppingCartIcon />
//                   </Link>
//                 )}
//               </li>
//               <li className="nav-item">
//                 <Link to={"/profile"} className="nav-link">
//                   Profile
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <button className="btn btn-success" onClick={onClickLogout}>
//                   Logout
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navigation;
