import React from 'react';
import './Services.css'; 

import TRUCK from "../../Assets/Hero/HeroBG.jpg"

const servicesData = [
  {
    title: 'Expedited Services',
    description: 'Fast and efficient deliveries on tight deadlines.',
    imgSrc: TRUCK
  },
  {
    title: 'Truck Load Services',
    description: 'Reliable full truckload services for large shipments.',
    imgSrc: TRUCK
  },
  {
    title: 'LTL Trucking Services',
    description: 'Cost-effective solutions for smaller shipments.',
    imgSrc: TRUCK
  },
  {
    title: 'Same Day Delivery Services',
    description: 'Delivery solutions for urgent shipments.',
    imgSrc: TRUCK
  },
  {
    title: 'Team Driver Services',
    description: 'Non-stop long-haul services with professional team drivers.',
    imgSrc: TRUCK
  },
  {
    title: 'Short & Long Haul Services',
    description: 'Flexible transport solutions for both short and long distances.',
    imgSrc: TRUCK
  },
];

const Services = () => {
  return (
    <section className="services-section container">
      <h2 className="services-heading">Our Services</h2>
      <p className="services-description">
        Reliable and efficient transport solutions tailored to your needs.
      </p>

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
