import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <Title />
    <ul className="nav-items">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/about">
        About Us
      </Link>
      <Link className="link" to="/contact">
        Contact Us
      </Link>
      <Link className="link" to="/cart">
        Cart
      </Link>
    </ul>
  </div>
);

export default Header;
