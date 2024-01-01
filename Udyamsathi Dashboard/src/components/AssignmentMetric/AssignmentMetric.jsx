// ImpactMetric.jsx

import React from "react";
import PieChart from "../Piechart/PieChart";
import { data } from "./data";
import "./AssignmentMetric.css";

const AssignmentMetric = () => {
  return (
    <div className="container">
      <h3 className="heading">Assignment Metrics</h3>
      <div className="chartContainer">
        <PieChart width={500} height={500} data={data} />
      </div>
    </div>
  );
};

export default AssignmentMetric;
