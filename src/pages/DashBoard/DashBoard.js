import React from 'react';
import './Dashboard.css';

function DashBoard() {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>

      <section className="dashboard-section">
        <h3>Your Profile</h3>
        <div className="dashboard-content">
          <p>Name: John Doe</p>
          <p>Email: john.doe@example.com</p>
          <p>Education: Oxford University</p>
          <p>Skills: HTML, English</p>
          <button className="btn-edit">Edit Profile</button>
        </div>
      </section>

      <section className="dashboard-section">
        <h3>Job Applications</h3>
        <div className="dashboard-content">
          <p>You have applied to 3 jobs.</p>
          <ul className="job-application-list">
            <li>Frontend Developer at Tech Corp</li>
            <li>Backend Developer at Innovatech</li>
            <li>UI/UX Designer at Design Studio</li>
          </ul>
        </div>
      </section>

      <section className="dashboard-section">
        <h3>Job Listings (For Employers)</h3>
        <div className="dashboard-content">
          <p>You have 2 active job listings.</p>
          <ul className="job-listing-list">
            <li>Frontend Developer at Tech Corp</li>
            <li>Backend Developer at Innovatech</li>
          </ul>
          <button className="btn-add">Add New Job Listing</button>
        </div>
      </section>
    </div>
  );
}

export default DashBoard;
