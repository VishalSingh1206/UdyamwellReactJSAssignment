// GreetingTable.jsx

import React from "react";
import Table from "../Table/Table"; // Assuming you have a Table component in the same directory
import "./UserNotification.css";
const UserNotification = () => {
  // Dummy data for the table
  const tableData = [
    { taskCode: "001", title: "Task 1" },
    { taskCode: "002", title: "Task 2" },
    { taskCode: "003", title: "Task 3" },
    // Add more data as needed
  ];

  return (
    <div className="user-noti">
      <div className="user-table">
        <div className="user">
          <p>
            Good Morning, <span>Khushi</span>
          </p>
        </div>
        <div className="table-container">
          <h3>Notifications</h3>
          <Table data={tableData} />
        </div>
      </div>
    </div>
  );
};

export default UserNotification;
