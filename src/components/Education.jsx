import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import './Education.css';

const Education = () => {
    return (
        <section id="education" className="education-section">
            <div className="container">
                <h2 className="section-title">Education</h2>

                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-icon">
                            <FaGraduationCap />
                        </div>
                        <div className="timeline-content glass-panel">
                            <h3 className="timeline-title">B.Tech Information Technology</h3>
                            <h4 className="timeline-subtitle">Mount Zion College of Engineering and Technology</h4>
                            <span className="timeline-date">Current Student</span>
                            <p className="timeline-text">
                                Currently pursuing a Bachelor of Technology degree in Information Technology.
                                Gaining comprehensive knowledge in software engineering, web technologies, data structures, algorithms, and database management.
                                Actively participating in technical events and building hands-on programming skills.
                            </p>
                        </div>
                    </div>

                    {/* Add more timeline items here if needed in the future */}
                </div>
            </div>
        </section>
    );
};

export default Education;
