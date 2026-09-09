import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-bg-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
            </div>
            <div className="container hero-container animate-fade-in">
                <div className="hero-content">
                    <p className="greeting">Welcome to my portfolio</p>
                    <h1 className="hero-title">
                        Hi, I'm <span className="gradient-text">Hariharan</span>
                    </h1>
                    <h2 className="hero-subtitle">B.Tech Information Technology Student</h2>
                    <p className="hero-description">
                        Passionate about technology, web development, programming, and building innovative digital solutions.
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn-primary">View My Projects</a>
                        <a href="#contact" className="btn-secondary">Contact Me</a>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <div className="glass-panel image-container">
                        <img
                            src="/my-image.png"
                            alt="Hariharan Profile"
                            className="hero-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
