import { NavLink } from "react-router-dom";
import "./index.css";

const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-sm p-3 mb-5">
        <div className="container">
          <a className="navbar-brand">POS</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
