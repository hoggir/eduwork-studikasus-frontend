import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Order from "./pages/Order/GetOrder";
import ConfirmOrder from "./pages/Order/ConfirmOrder";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import DeliveryAddresses from "./pages/DeliveryAddresses/GetDeliveryAddresses";
import AddAddresses from "./pages/DeliveryAddresses/AddDeliveryAddresses";
import EditAddresses from "./pages/DeliveryAddresses/EditDeliveryAddresses";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/order" element={<Order />} />
        <Route exact path="/confirm-order" element={<ConfirmOrder />} />
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
  );
}

export default App;
