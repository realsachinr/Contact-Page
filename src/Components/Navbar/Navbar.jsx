import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/img/Frame 2 1.png" alt="do some coding logo" />
      </div>
      <ul className="list-container">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
