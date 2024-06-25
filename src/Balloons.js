import React from 'react';
import './ball.css'; // Import CSS for balloons

const Balloons = () => {
  return (
    <div className="balloons-container">
      <div className="balloon balloon--1"></div>
      <div className="balloon balloon--2"></div>
      <div className="balloon balloon--3"></div>
      {/* Add more balloons as needed */}
    </div>
  );
}

export default Balloons;
