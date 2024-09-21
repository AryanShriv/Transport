import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './GetQuote.css';

const GetQuote = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState(null); // Form status
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility state

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_uwwsoxd', 'template_ww364sq', form.current, {
        publicKey: 'EfpuEaXKGXoMJJyer',
      })
      .then(
        () => {
          setFormStatus('SUCCESS'); // Set status to success
          setIsModalVisible(true); // Show modal on success
          form.current.reset(); // Reset the form
        },
        (error) => {
          setFormStatus('FAILED'); // Set status to failed
          setIsModalVisible(true); // Show modal on failure
          console.log('FAILED...', error.text);
        },
      );
  };

  const closeModal = () => {
    setIsModalVisible(false); // Close the modal when user clicks close
  };

  return (
    <section className="get-quote-section">
      <div className="get-quote-container">
        {/* Left Side - Text */}
        <div className="quote-text">
          <h2>Our Commitment to Quality</h2>
          <p>
            Our commitment to quality is provided in many ways to our customers.
            We are proud to say that we have reliable and experienced drivers
            who ensure your product is delivered safely and professionally. We
            at AZ UNITED INC Transport hold a proactive approach when it comes to safety
            and maintain a strict policy to provide the excellent service our
            customers have come to expect and trust. You can rest assured your
            product will be delivered in a safe and timely manner.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="quote-form">
          <form ref={form} action="" onSubmit={sendEmail}>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Phone:
              <input type="tel" name="phone" required />
            </label>
            <label>
              Service Type:
              <select name="service" required>
                <option value="">Select Service</option>
                <option value="expedited">Expedited Services</option>
                <option value="ltl">LTL Trucking Services</option>
                <option value="same-day">Same Day Delivery Services</option>
                <option value="team-driver">Team Driver Services</option>
                <option value="long-haul">Short & Long Haul Services</option>
              </select>
            </label>
            <label>
              Message:
              <textarea name="message" rows="4"></textarea>
            </label>
            <button type="submit" value="Send">Request Quote</button>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isModalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            {formStatus === 'SUCCESS' ? (
              <div>
                <h3>Success!</h3>
                <p>Your request has been submitted successfully!</p>
              </div>
            ) : (
              <div>
                <h3>Error!</h3>
                <p>There was an error submitting your request. Please try again.</p>
              </div>
            )}
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GetQuote;
