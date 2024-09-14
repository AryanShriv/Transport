import React from "react";
import "./Hero.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-text">
        <h1 className="hero-heading">Fast and reliable transport solution</h1>
        <p className="hero-tagline">
          Transparent Pricing || Fast Efficient Delivery || Warehouse Storage
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
