import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>ABOUT US</h4>
            <h1 className="list-unstyled">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>OPENING HOURS</h4>
            <li className="list-unstyled">
              <p>Monday : Closed</p>
              <p>Tue-Wed : 9:Am - 10PM</p>
              <p>Thu-Fri : 9:Am - 10PM</p>
              <p>Sat-Sun : 5:PM - 10PM</p>
            </li>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>CONTACT INFORMATION</h4>
            <li className="list-unstyled">
              <p>Ipsum Street, Lorem Tower, MO, Columbia, 508000</p>
              <p>+01 2000 800 9999</p>
              <p>info@admin.com</p>
            </li>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} LOREM IPSUM | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
