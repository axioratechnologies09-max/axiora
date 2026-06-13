import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="contact-container glass glow">
          <div className="text-center mb-5">
            <span className="section-tag glow-text">Start a Project</span>
            <h2 className="section-title">Let's Build Something <br/><span>Extraordinary</span></h2>
          </div>

          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" placeholder="Company Name" />
              </div>
              <div className="form-group">
                <label htmlFor="budget">Budget</label>
                <select id="budget">
                  <option value="">Select a range</option>
                  <option value="10k-25k">$10k - $25k</option>
                  <option value="25k-50k">$25k - $50k</option>
                  <option value="50k-100k">$50k - $100k</option>
                  <option value="100k+">$100k+</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="details">Project Details</label>
              <textarea id="details" rows="5" placeholder="Tell us about your goals, timeline, and requirements..." required></textarea>
            </div>

            <div className="form-submit text-center">
              <button type="submit" className="btn btn-primary btn-large">
                Start Your Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
