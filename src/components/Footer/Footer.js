import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Job</h4>
          <p>Quis enim pellentesque viverra tellus eget malesuada facilisis.<br/>
           Congue nibh vivamus aliquet nunc mauris dui nullam et.</p>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Partners</li>
            <li>For Candidates</li>
            <li>For Employers</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Job Categories</h4>
          <ul>
            <li>Telecommunications</li>
            <li>Hotels & Tourism</li>
            <li>Construction</li>
            <li>Education</li>
            <li>Financial Services</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Eu nunc pretium vtae platea. Non netus elementum vulputate.</p>
          <input type="email" placeholder="Email Address" className="footer-input" />
          <button className="btn-subscribe">Subscribe now</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright Job Portal 2024.</p>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
