// Header.jsx

import React from "react";
import Navbar from "../Navbar/Navbar";
import SigninButton from "../SigninButton/SigninButton";
import RegisterButton from "../RegisterButton/RegisterButton";
import "./Header.css";
import logo from "../../assets/udyamwell.png";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <Navbar />
        <div className="header-content">
          <p className="quote">
            “It is only when we take chances, when our lives improve. The
            initial and the most difficult risk that we need to take is to
            become honest. -Walter Anderson.”
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
