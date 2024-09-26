import React from 'react';
import './Services.css'; 

import { Slide } from "react-awesome-reveal";

import ES from "../../Assets/Services/ES.jpg"
import TLS from "../../Assets/Services/TLS.jpg"
import LTL from "../../Assets/Services/LTL.jpg"
import SDD from "../../Assets/Services/SDD.jpeg"
import WH from "../../Assets/Services/WH.jpeg"
import SLH from "../../Assets/Services/SLH.jpeg"

const servicesData = [
  {
    title: 'Expedited Services',
    description: 'Fast and efficient deliveries on tight deadlines.',
    imgSrc: ES
  },
  {
    title: 'Truck Load Services',
    description: 'Reliable full truckload services for large shipments.',
    imgSrc: TLS
  },
  {
    title: 'LTL Trucking Services',
    description: 'Cost-effective solutions for smaller shipments.',
    imgSrc: LTL
  },
  {
    title: 'Same Day Delivery Services',
    description: 'Delivery solutions for urgent shipments.',
    imgSrc: SDD
  },
  {
    title: 'Team Driver Services',
    description: 'Non-stop long-haul services with professional team drivers.',
    imgSrc: WH
  },
  {
    title: 'Short & Long Haul Services',
    description: 'Flexible transport solutions for both short and long distances.',
    imgSrc: SLH
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <Slide direction='down'>
      <h2 className="services-heading">OUR SERVICES</h2>
      <p className="services-description">
        Reliable and efficient transport solutions tailored to your needs.
      </p>
      </Slide>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.imgSrc} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
