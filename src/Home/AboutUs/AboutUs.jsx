import React from 'react';
import './AboutUs.css'; 
import About from "../../Assets/AboutUs/About.jpg";

import { Slide } from "react-awesome-reveal";

import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";


const AboutUs = () => {
  return (
    <section className="about-us-section">
      <Slide direction="down">
        <h2 className="about-us-heading">ABOUT US</h2>
      </Slide>
      <div className="about-us-content">
        <img src={About} alt="Company Image" className="about-us-image" />
        <div className="about-us-text">
          <p className="aboutUsPara">
            We’re a Transportation & Logistics Company. AZ UNITED INC Transport
            provides dedicated, multi-faceted transportation services,
            warehousing, and order fulfillment services. We’re proud of our
            reputation for efficient work, integrity, and incredible customer
            service. We have been moving goods for businesses of all sizes; from
            the small and mid-sized to Fortune for the past 10 years. Our
            reputation is founded on efficient work, integrity, and incredible
            customer services.
          </p>

          {/* Contact Information */}
          <div className="contact-details">
            <p>
              <IoMail />
              <strong>Email: </strong>{" "}
              <a href="mailto:azunitedinc@hotmail.com">
                azunitedinc@hotmail.com
              </a>
            </p>
            <p>
              <IoLocationSharp />
              <strong>Address: </strong>{" "}
              8780 Boylan PI Pendleton Indiana 46064
            </p>
            <p>
              <FaPhone />
              <strong>Phone:</strong>{" "}
              <a href="tel:+13173006474">+13173006474</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
