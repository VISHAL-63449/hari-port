import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaGithub } from 'react-icons/fa';
import { SiC, SiMysql } from 'react-icons/si';
import './Skills.css';

const skills = [
    { name: 'HTML', icon: <FaHtml5 color="#E34F26" />, level: 90 },
    { name: 'CSS', icon: <FaCss3Alt color="#1572B6" />, level: 85 },
    { name: 'JavaScript', icon: <FaJs color="#F7DF1E" />, level: 80 },
    { name: 'React.js', icon: <FaReact color="#61DAFB" />, level: 75 },
    { name: 'Node.js', icon: <FaNodeJs color="#339933" />, level: 65 },
    { name: 'Python', icon: <FaPython color="#3776AB" />, level: 70 },
    { name: 'Java', icon: <FaJava color="#007396" />, level: 75 },
    { name: 'C', icon: <SiC color="#A8B9CC" />, level: 80 },
    { name: 'SQL', icon: <SiMysql color="#4479A1" />, level: 70 },
    { name: 'Git & GitHub', icon: <FaGithub color="#ffffff" />, level: 85 },
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">My Skills</h2>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill-card glass-panel" key={index}>
                            <div className="skill-header">
                                <div className="skill-icon">{skill.icon}</div>
                                <h3 className="skill-name">{skill.name}</h3>
                            </div>
                            <div className="skill-progress-container">
                                <div className="skill-level-text">
                                    <span>Proficiency</span>
                                    <span>{skill.level}%</span>
                                </div>
                                <div className="skill-bar-bg">
                                    <div
                                        className="skill-bar-fill"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
