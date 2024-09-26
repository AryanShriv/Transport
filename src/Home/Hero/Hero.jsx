import React from "react";
import "./Hero.css";

import { Slide } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-text">
        <Slide direction="left">
        <h1 className="hero-heading">Fast And Reliable Transport Solution</h1>
        <p className="hero-tagline">
          Transparent Pricing || Fast Efficient Delivery || Warehouse Storage
        </p>
        </Slide>
      </div>
    </section>
  );
};

export default HeroSection;
