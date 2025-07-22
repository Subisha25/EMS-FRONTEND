import React from 'react';
import { FaBell, FaWrench, FaEnvelope } from 'react-icons/fa';
import './Topbar.css';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <button className="menu-toggle">
          <span className="menu-icon">&#9776;</span>
        </button>
        <select className="candidate-dropdown">
          <option>All Candidates</option>
        </select>
        <input className="search-bar" type="text" placeholder="Search..." />
      </div>
      <div className="topbar-right">
        <div className="icon-badge">
          <FaBell />
          <span className="badge">13</span>
        </div>
        <div className="icon-badge">
          <FaWrench />
        </div>
        <div className="icon-badge">
          <FaEnvelope />
          <span className="badge">13</span>
        </div>
      </div>
    </div>
  );
} 