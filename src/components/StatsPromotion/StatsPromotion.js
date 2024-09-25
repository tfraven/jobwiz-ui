import React from 'react';
import './StatsPromotion.css';
import Image1 from "../../assest/Imgs.png"
import Image from "../../assest/Img.png"

function StatsPromotion() {
  return (
    <div className="stats-promotional-section">
      <div className="stats-promo-content">
      <div className="promo-image">
          <img src={Image} alt="Promo" />
        </div>
        <div className="text-content">
          <h2>Good Life Begins With A Good Company</h2>
          <p>
            Ut placerat purus id elit finibus, at congue justo. Un posuere
            diam nec enim eleifend. Suspendisse blandit dapibus sapien.
          </p>
          <div className="buttons">
            <button className="btn-primary">Search Job</button>
            <button className="btn-secondary">Learn more</button>
          </div>
          </div>
        </div>
        <div className="stats">
          <div className="stat-item">
            <h3>12k+</h3>
            <h2>Clients worldwide</h2>
            <p>At eu lobortis pretium tincidunt amet lacus<br/>
             ut aenean aliquet.Blandit a massa elementum</p>
          </div>
          <div className="stat-item">
            <h3>20k+</h3>
            <h2>Active resumes</h2>
            <p>At eu lobortis pretium tincidunt amet lacus<br/>
             ut aenean aliquet.Blandit a massa elementum</p>
          </div>
          <div className="stat-item">
            <h3>18k+</h3>
            <h2>Companies</h2>
            <p>At eu lobortis pretium tincidunt amet lacus<br/>
             ut aenean aliquet.Blandit a massa elementum</p>
          </div>
        
      </div>

      {/* Promotional Banner Section */}
      <div className="promotional-banner">
        <div className="promo-text">
          <h2>Create A Better Future For Yourself</h2>
          <p>
            Mauris id lobortis elit. Fusce sollicitudin nisi neque, nec 
            pharetra ipsum auctor sit amet.
          </p>
          <button className="btn-primary">Search Job</button>
        </div>
        <div className="promo-image">
          <img src={Image1} alt='' ></img>       </div>
      </div>
    </div>
  );
}

export default StatsPromotion;
