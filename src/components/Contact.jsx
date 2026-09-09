import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-container">
                    <div className="contact-info glass-panel">
                        <h3 className="contact-heading">Contact Information</h3>
                        <p className="contact-text">
                            Feel free to reach out to me for any opportunities, collaboration, or just to say hi!
                        </p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-icon"><FaEnvelope /></div>
                                <div className="info-content">
                                    <h4>Email</h4>
                                    <p>your.email@example.com</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon"><FaPhone /></div>
                                <div className="info-content">
                                    <h4>Phone</h4>
                                    <p>+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon"><FaMapMarkerAlt /></div>
                                <div className="info-content">
                                    <h4>Location</h4>
                                    <p>Tamil Nadu, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-container glass-panel">
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" placeholder="Enter your name" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input type="email" id="email" placeholder="Enter your email" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" placeholder="Enter subject" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="5" placeholder="Write your message here..." required></textarea>
                            </div>

                            <button type="submit" className="btn-primary form-submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
