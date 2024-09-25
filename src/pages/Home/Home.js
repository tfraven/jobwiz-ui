import React from 'react';
import './Home.css';
import Footer from '../../components/Footer/Footer';
import StatsPromotion from '../../components/StatsPromotion/StatsPromotion';

function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">Find Your Dream Job Today!</h1>
          <p className="home-subtitle">
            Connecting Talent with Opportunity: Your Gateway to Career Success
          </p>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Job Title or Company"
              className="search-input"
            />
            <select className="search-select">
              <option>Select Location</option>
              {/* Add location options here */}
            </select>
            <select className="search-select">
              <option>Select Category</option>
              {/* Add category options here */}
            </select>
            <button className="search-button">Search Job</button>
          </div>

          <div className="stats">
            <div className="stat-item">
              <h3>25,850</h3>
              <p>Jobs</p>
            </div>
            <div className="stat-item">
              <h3>10,250</h3>
              <p>Candidates</p>
            </div>
            <div className="stat-item">
              <h3>18,400</h3>
              <p>Companies</p>
            </div>
          </div>

          <div className="features">
            <div className="feature-item">
              <i className="fas fa-briefcase"></i>
              <h4>Explore Thousands of Jobs</h4>
              <p>
                Browse through a variety of job listings tailored to your skills
                and preferences.
              </p>
            </div>
            <div className="feature-item">
              <i className="fas fa-user"></i>
              <h4>Find the Best Candidates</h4>
              <p>
                Employers can easily find and hire the most suitable candidates.
              </p>
            </div>
            <div className="feature-item">
              <i className="fas fa-building"></i>
              <h4>Connect with Top Companies</h4>
              <p>
                Job seekers can connect with leading companies in their
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <StatsPromotion />
      <Footer />
    </div>
  );
}

export default Home;
