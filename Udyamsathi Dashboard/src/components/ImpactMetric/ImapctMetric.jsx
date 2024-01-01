// ImpactMetric.jsx

import React from "react";
import PieChart from "../Piechart/PieChart";
import { data } from "./data";
import "./ImpactMetric.css";

const ImpactMetric = () => {
  return (
    <div className="container">
      <h3 className="heading">Impact Metrics</h3>
      <div className="chartContainer">
        <PieChart width={500} height={500} data={data} />
      </div>
    </div>
  );
};

export default ImpactMetric;
