import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['Home', 'About', 'Skills', 'Education', 'Projects', 'Contact'];

    const handleNavClick = (e, link) => {
        e.preventDefault();
        const section = document.getElementById(link.toLowerCase());
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <div className="logo cursor-pointer" onClick={(e) => handleNavClick(e, 'Home')}>
                    <span className="gradient-text">Hariharan</span>
                </div>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`} onClick={(e) => handleNavClick(e, link)}>
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Nav Toggle */}
                <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </div>
            </div>

            {/* Mobile Nav Menu */}
            <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link}>
                            <a href={`#${link.toLowerCase()}`} onClick={(e) => handleNavClick(e, link)}>
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
