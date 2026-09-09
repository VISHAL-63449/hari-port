import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    // Using 2026 as user requested "© 2026 Hariharan" but keeping it dynamic is usually better, I'll hardcode 2026 to exactly match user's explicit request if they want.

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <span className="gradient-text">Hariharan</span>
                        <p>Building the future with technology.</p>
                    </div>

                    <div className="footer-socials">
                        <a href="#" className="social-icon" aria-label="GitHub"><FaGithub /></a>
                        <a href="#" className="social-icon" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="#" className="social-icon" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Hariharan. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
