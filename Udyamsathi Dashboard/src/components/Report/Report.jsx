// Report.jsx

import React from "react";
import "./Report.css";
import ImpactMetric from "../ImpactMetric/ImapctMetric";
import AssignmentMetric from "../AssignmentMetric/AssignmentMetric";
import FlexBoxComponent from "../FlexBoxComponent/FlexBoxComponent";
const Report = () => {
  // Dummy data for the detailed report
  const reportData = [
    {
      taskCode: "001",
      title: "Ambassador Event 1",
      category: "Event",
      fileUploaded: "Yes",
      accomplishment: "Yes",
    },
    {
      taskCode: "001",
      title: "Ambassador Event 1",
      category: "Event",
      fileUploaded: "Yes",
      accomplishment: "Yes",
    },
    {
      taskCode: "001",
      title: "Ambassador Event 1",
      category: "Event",
      fileUploaded: "Yes",
      accomplishment: "Yes",
    },
    {
      taskCode: "001",
      title: "Ambassador Event 1",
      category: "Event",
      fileUploaded: "Yes",
      accomplishment: "Yes",
    },
    {
      taskCode: "001",
      title: "Ambassador Event 1",
      category: "Event",
      fileUploaded: "Yes",
      accomplishment: "Yes",
    },
    // Add more rows as needed
  ];

  return (
    <div className="report-container">
      <h1>
        Detailed <span>Report</span>
      </h1>
      <p className="subheading">This the detailed report of the Udyamsathi.</p>
      <div className="activities-container">
        <h3>Ambassador Activities</h3>
        <table>
          <thead>
            <tr>
              <th>Task Code</th>
              <th>Title</th>
              <th>Category</th>
              <th>File Uploaded</th>
              <th>Accomplishment (Yes/No)</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((row, index) => (
              <tr key={index}>
                <td>{row.taskCode}</td>
                <td>{row.title}</td>
                <td>{row.category}</td>
                <td>{row.fileUploaded}</td>
                <td>{row.accomplishment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="chart">
        <ImpactMetric />
        <AssignmentMetric />
      </div>
      <div className="overall">
        <FlexBoxComponent
          heading="05"
          text="Number of
          Enterprise Reached"
        />
        <FlexBoxComponent
          heading="12"
          text="Number of
Post Posted"
        />
        <FlexBoxComponent
          heading="08"
          text="Number of
Tasks Done"
        />
        <FlexBoxComponent
          heading="95"
          text="Overall Score
Out of 100"
        />
        <FlexBoxComponent
          heading="06"
          text="Number of
Initiatives"
        />
      </div>
    </div>
  );
};

export default Report;
