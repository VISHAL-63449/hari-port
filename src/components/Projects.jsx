import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
    {
        title: 'Personal Portfolio',
        description: 'A modern, responsive personal portfolio website built to showcase my projects, skills, and resume. Features glassmorphism design and smooth animations.',
        tech: ['React', 'Vite', 'CSS3', 'JavaScript'],
        github: '#',
        demo: '#'
    },
    {
        title: 'Food Delivery Website',
        description: 'An interactive food delivery web application containing dynamic menus, cart functionality, and responsive user interfaces for better user experience.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: '#',
        demo: '#'
    },
    {
        title: 'Student Management System',
        description: 'A comprehensive system to manage student records, grades, and attendance. Built with a focus on database management and backend integration.',
        tech: ['Java', 'SQL'],
        github: '#',
        demo: '#'
    },
    {
        title: 'To-Do List Application',
        description: 'A task management application helping users to keep track of daily activities with add, edit, delete, and mark-as-complete functionalities.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: '#',
        demo: '#'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">My Projects</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card glass-panel" key={index}>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="project-actions">
                                <a href={project.github} className="project-btn" target="_blank" rel="noopener noreferrer">
                                    <FaGithub /> <span>Code (Sample)</span>
                                </a>
                                <a href={project.demo} className="project-btn primary" target="_blank" rel="noopener noreferrer">
                                    <FaExternalLinkAlt /> <span>Demo (Sample)</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
