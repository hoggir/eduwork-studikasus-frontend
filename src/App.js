import { createContext, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

export const AuthContext = createContext();

const initialState = {
  isAuth: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuth: false,
        user: null,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BrowserRouter>
      <AuthContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
