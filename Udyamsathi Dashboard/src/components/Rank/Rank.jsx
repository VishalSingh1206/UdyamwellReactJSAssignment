// Rank.jsx

import React from "react";
import "./Rank.css";

const Rank = () => {
  // Dummy data for the leaderboard
  const leaderboardData = [
    { rank: 1, name: "John Doe", college: "ABC University", place: "City A" },
    { rank: 2, name: "John Doe", college: "ABC University", place: "City A" },
    { rank: 3, name: "John Doe", college: "ABC University", place: "City A" },
    { rank: 4, name: "John Doe", college: "ABC University", place: "City A" },
    { rank: 5, name: "John Doe", college: "ABC University", place: "City A" },
    { rank: 6, name: "John Doe", college: "ABC University", place: "City A" },
    { rank: 7, name: "John Doe", college: "ABC University", place: "City A" },
    { rank: 8, name: "John Doe", college: "ABC University", place: "City A" },
    { rank: 9, name: "John Doe", college: "ABC University", place: "City A" },
    { rank: 10, name: "John Doe", college: "ABC University", place: "City A" },
    // Add more rows as needed
  ];

  // Dummy data for the currently logged-in user rank
  const currentUserRank = 5; // Replace with the actual rank of the logged-in user

  return (
    <div className="rank-container">
      <h1>
        <span>#1 </span>Udyamsathi Rank
      </h1>
      <p className="subheading">
        This rank for Udyamsathi will help our ambassadors to secure higher
        initiatives and benefits.
      </p>
      <div className="leaderboard-container">
        <h3>Leaderboard</h3>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>College</th>
              <th>Place</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((row, index) => (
              <tr
                key={index}
                className={currentUserRank === row.rank ? "highlight" : ""}
              >
                <td>{row.rank}</td>
                <td>{row.name}</td>
                <td>{row.college}</td>
                <td>{row.place}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rank;
