// Submission.jsx

import React from "react";
import "./Submission.css";

const Submission = () => {
  return (
    <div className="submission-container">
      <div className="submission">
        <input
          type="text"
          placeholder="Enter Task Code"
          className="text-input"
        />
        <input
          type="file"
          className="file-input"
          placeholder="Upload Your File"
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Submission;
