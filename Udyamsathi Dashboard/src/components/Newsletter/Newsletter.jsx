// Newsletter.jsx

import React from "react";
import "./Newsletter.css";
import { Icon } from "@iconify/react";
const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-heading">
        <h3>Newsletter</h3>
        <p className="news-subheading">
          Stay updated with our latest news and updates
        </p>
      </div>
      <div className="email-container">
        <input
          type="email"
          placeholder="Enter your email"
          className="newsletter-input"
        />
        <button className="newsletter-button">
          <Icon icon="grommet-icons:next" />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
