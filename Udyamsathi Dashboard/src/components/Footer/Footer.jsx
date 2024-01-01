// Footer.jsx

import React from "react";
import FooterLogo from "../FooterLogo/FooterLogo";
import ContactUs from "../ContactUs/ContactUs";
import Newsletter from "../Newsletter/Newsletter";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <FooterLogo />
        <Newsletter />
        <ContactUs />
      </div>
    </div>
  );
};

export default Footer;
