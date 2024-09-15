import React from 'react';
import './AboutUs.css'; 

import About from "../../Assets/AboutUs/About.jpg"

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <h2 className="about-us-heading">About Us</h2>
      <div className="about-us-content">
        <img src={About} alt="Company Image" className="about-us-image" />
        <div className="about-us-text">
          <p className='aboutUsPara'>
            We’re a Transportation & Logistics Company.
            K4 Transport provides dedicated, multi-faceted transportation services, warehousing, and order fulfillment services.
            We’re proud of our reputation for efficient work, integrity, and incredible customer service. 
            We have been moving goods for businesses of all sizes; from the small and mid-sized to Fortune for the past 10 years. 
            Our reputation is founded on efficient work, integrity, and incredible customer services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
