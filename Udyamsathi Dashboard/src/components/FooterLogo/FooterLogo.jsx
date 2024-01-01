// FooterLogo.jsx

import React from "react";
import "./FooterLogo.css";
import { footerLogo } from "../../assets";
const FooterLogo = () => {
  return (
    <div className="footer-logo">
      <img src={footerLogo} alt="Logo" />
      <p className="company-description">
        UdyamWell is a true partener that guides you on your entrepreneurial
        journey and stays with you in every step of the way to assist you in
        overcoming challenges and also in reaching new heights.
      </p>
    </div>
  );
};

export default FooterLogo;
