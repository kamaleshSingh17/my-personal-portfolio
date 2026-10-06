import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [modalMessage, setModalMessage] = useState(null);

  const handlePlaceholderClick = (e, type) => {
    e.preventDefault();
    if (type === 'github') {
      setModalMessage({
        title: 'Repository Access',
        description: 'Source code repository is currently maintained in a private academic workspace. Link will be made publicly accessible upon publication.'
      });
    } else if (type === 'demo') {
      setModalMessage({
        title: 'Live Demonstration',
        description: 'Live mobile app demonstration and release binaries will be linked shortly.'
      });
    }
  };

  const closeModal = () => {
    setModalMessage(null);
  };

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="fa-solid fa-code-fork" aria-hidden="true"></i>
            Featured Projects
          </span>
          <h2 className="section-title">
            Recruiter-Focused <span className="text-gradient">Project Work</span>
          </h2>
          <p className="section-description">
            Functional applications built with structured architecture and purposeful design.
          </p>
        </div>

        {/* Projects List (Data-driven for easy expansion) */}
        <div className="projects-container">
          {projectsData.map((project) => (
            <div key={project.id} className="featured-project-card glass-card">
              {/* Left Column: Project Screenshot Preview */}
              <div className="project-preview-column">
                <div className="project-image-box">
                  <img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    className="project-image"
                    loading="lazy"
                  />
                  <div className="project-preview-overlay">
                    <span className="preview-badge">
                      <i className="fa-solid fa-mobile-screen" aria-hidden="true"></i>
                      Mobile Application
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Project Info & CTAs */}
              <div className="project-details-column">
                <div className="project-header">
                  <div className="project-tag-featured">
                    <i className="fa-solid fa-star" aria-hidden="true"></i>
                    Featured Application
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                {/* Technology Badges */}
                <div className="project-tech-stack">
                  <span className="tech-stack-label">Built with:</span>
                  <div className="tech-badges-list">
                    {project.technologies.map((tech) => (
                      <span key={tech.name} className="tech-badge">
                        <i className={tech.icon} aria-hidden="true"></i>
                        <span>{tech.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons (Clearly Marked Placeholders) */}
                <div className="project-actions">
                  <button
                    type="button"
                    className="btn btn-secondary project-action-btn"
                    onClick={(e) => handlePlaceholderClick(e, 'github')}
                    title="Source repository information"
                  >
                    <i className="fa-brands fa-github" aria-hidden="true"></i>
                    <span>GitHub Repo</span>
                    <span className="placeholder-tag">Private</span>
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary project-action-btn"
                    onClick={(e) => handlePlaceholderClick(e, 'demo')}
                    title="Live demonstration information"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                    <span>Live Demo</span>
                    <span className="placeholder-tag coming-soon">Coming Soon</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Informational Modal for Placeholders */}
      {modalMessage && (
        <div className="project-modal-backdrop" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="project-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h4 className="modal-title">{modalMessage.title}</h4>
              <button 
                type="button" 
                className="modal-close-btn" 
                onClick={closeModal}
                aria-label="Close dialog"
              >
                <i className="fa-solid fa-xmark" aria-hidden="true"></i>
              </button>
            </div>
            <p className="modal-body">{modalMessage.description}</p>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary btn-sm" onClick={closeModal}>
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
