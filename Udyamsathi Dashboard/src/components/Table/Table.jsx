// Table.jsx

import React from "react";
import "./Table.css";
const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Task Code</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.taskCode}</td>
            <td>{item.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
