import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content glass-panel">
                    <div className="about-text">
                        <h3 className="about-heading">I'm Hariharan, an Information Technology Student.</h3>
                        <p className="about-description">
                            I am currently pursuing my B.Tech in Information Technology at Mount Zion College of Engineering and Technology.
                            My journey in the tech world is driven by a deep <strong>interest in software development</strong> and creating meaningful digital experiences.
                        </p>
                        <p className="about-description">
                            I specialize in <strong>web development</strong>, where I enjoy turning complex problems into simple, beautiful, and intuitive designs.
                            <strong>Problem solving</strong> is at the core of everything I do; whether it's optimizing an algorithm or conceptualizing a user interface, I thrive on challenges.
                        </p>
                        <p className="about-description">
                            I am consistently focused on <strong>learning new technologies</strong> and staying up-to-date with industry trends. My goal is to apply theoretical knowledge by <strong>building practical projects</strong> that provide real-world value.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item">
                                <span className="highlight-number">3+</span>
                                <span className="highlight-text">Years of<br />Learning</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-number">10+</span>
                                <span className="highlight-text">Projects<br />Completed</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-number">5+</span>
                                <span className="highlight-text">Technologies<br />Mastered</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
