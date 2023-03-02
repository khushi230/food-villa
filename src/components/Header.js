import React from "react";
import Title from "./Title";


const Header = () => (
    <div className="header">
      <Title />
      <ul className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );

  export default Header;