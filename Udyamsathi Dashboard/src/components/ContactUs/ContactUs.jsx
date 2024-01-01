// ContactUs.jsx

import React from "react";
import "./ContactUs.css";
import { GoogleTranslate } from "..";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h3>Contact Us</h3>
      <div className="contact-details">
        <p>
          <span>Address:</span> Catalyst Building, IIT Mandi, Himachal Pradesh -
          175005
        </p>
        <p>
          <span>Phone:</span> +91 8679625300
        </p>
        <p>
          <span>Email:</span> admin@udyamwell.com
        </p>
        <p>
          <GoogleTranslate />
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
