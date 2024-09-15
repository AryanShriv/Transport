import React, { useState } from "react";
import "./FAQ.css"; // Custom styles for the section

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a range of transportation services including expedited services, truck load services, and same-day delivery services.",
    },
    {
      question: "How can I get a quote?",
      answer: "You can get a quote by filling out the form on our 'Get a Quote' page or contacting us directly.",
    },
    {
      question: "Do you provide international shipping?",
      answer: "Currently, we focus on domestic transportation services. For international shipping, please contact our partners.",
    },
    {
      question: "What is your delivery time?",
      answer: "Our delivery time varies depending on the service. For expedited services, we offer same-day delivery.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div
              className="faq-question"
              onClick={() => handleToggle(index)}
            >
              <h3>{faq.question}</h3>
              <span className="arrow">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
