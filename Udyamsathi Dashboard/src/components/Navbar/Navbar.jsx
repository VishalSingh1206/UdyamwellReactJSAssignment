// Navbar.jsx

import React from "react";
import "./Navbar.css";
import SigninButton from "../SigninButton/SigninButton";
import RegisterButton from "../RegisterButton/RegisterButton";
import logo from "../../assets/udyamwell.png";
import Logo from "../Logo/Logo";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Courses</a>
        </li>
        <li>
          <a href="#">Blogs</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">
            <SigninButton />
          </a>
        </li>
        <li>
          <a href="#">
            <RegisterButton />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
