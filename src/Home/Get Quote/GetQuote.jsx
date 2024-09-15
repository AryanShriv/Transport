import React from 'react';
import './GetQuote.css'; // External CSS for styling

const GetQuote = () => {
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
            at Transport hold a proactive approach when it comes to safety
            and maintain a strict policy to provide the excellent service our
            customers have come to expect and trust. You can rest assured your
            product will be delivered in a safe and timely manner.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="quote-form">
          <form>
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
            <button type="submit">Request Quote</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetQuote;
