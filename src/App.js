import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Invoice from "./pages/Invoice";
import Order from "./pages/Order/GetOrder";
import ConfirmOrder from "./pages/Order/ConfirmOrder";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Food from "./pages/Food";
import DeliveryAddresses from "./pages/DeliveryAddresses/GetDeliveryAddresses";
import AddAddresses from "./pages/DeliveryAddresses/AddDeliveryAddresses";
import EditAddresses from "./pages/DeliveryAddresses/EditDeliveryAddresses";
import "./App.css";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/food" element={<Food />} />
            {/* <Route exact path="/order" element={<Order />} /> */}
            <Route exact path="/confirm-order" element={<ConfirmOrder />} />
            <Route exact path="/invoice" element={<Invoice />} />
            <Route
              exact
              path="/delivery-addresses"
              element={<DeliveryAddresses />}
            />
            <Route
              exact
              path="/add-delivery-addresses"
              element={<AddAddresses />}
            />
            <Route
              exact
              path="/edit-delivery-addresses"
              element={<EditAddresses />}
            />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
