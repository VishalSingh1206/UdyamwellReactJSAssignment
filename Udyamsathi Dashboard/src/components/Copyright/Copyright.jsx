// Copyright.jsx

import React from "react";
import "./Copyright.css";

const Copyright = () => {
  return (
    <div className="copyright-container">
      <div className="left-content">
        @copyright 2023, UdyamWell Partner in your business Journey
      </div>
      <div className="right-content">
        <a href="#" className="link">
          Terms of Use
        </a>
        <span className="separator"> | </span>
        <a href="#" className="link">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Copyright;
