import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Testimonials.css";
import Test from "../../Assets/Hero/HeroBG.jpg"

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "Excellent service, fast and reliable!",
      image: Test
    },
    {
      name: "Jane Smith",
      feedback: "Their transport services exceeded our expectations.",
      image: Test
    },
    {
      name: "Alex Johnson",
      feedback: "Highly recommended for any logistics needs.",
      image: Test
    },
  ];

  return (
  <div className="testimonials-section">
    <h2>What our clients say</h2>
    <Swiper
        spaceBetween={30}
        pagination={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // autoplay={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <h3>{testimonial.name}</h3>
              <p>{testimonial.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
