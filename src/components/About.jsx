import React from 'react';
import { personalInfo, aboutHighlights } from '../data/portfolioData';

export default function About() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="fa-solid fa-user" aria-hidden="true"></i>
            About Me
          </span>
          <h2 className="section-title">
            Passionate About Technology & <span className="text-gradient">Problem Solving</span>
          </h2>
          <p className="section-description">
            A glimpse into my background, academic journey, and dedication to building impactful software.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="about-grid">
          {/* Left: Professional Portrait Presentation */}
          <div className="about-portrait-wrapper">
            <div className="about-portrait-card">
              <div className="about-image-container">
                <img
                  src={personalInfo.profileImage}
                  alt="Kamalesh Singh D - Computer Science and Engineering student"
                  className="about-image"
                  width="400"
                  height="450"
                  loading="lazy"
                />
              </div>

              {/* Education Card below portrait */}
              <div className="education-card">
                <div className="education-icon">
                  <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i>
                </div>
                <div className="education-info">
                  <span className="education-label">Education</span>
                  <h3 className="education-college">{personalInfo.college}</h3>
                  <p className="education-degree">{personalInfo.degree}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative & 4 Highlight Cards */}
          <div className="about-details">
            <div className="about-bio-card glass-card">
              <h3 className="bio-greeting">Hello, I'm Kamalesh Singh D</h3>
              <p className="bio-text">
                {personalInfo.aboutBio}
              </p>
              
              <div className="about-cta-wrapper">
                <a
                  href="#contact"
                  onClick={handleScrollToContact}
                  className="btn btn-primary"
                >
                  <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
                  <span>Let's Connect</span>
                </a>
              </div>
            </div>

            {/* 4 Highlight Cards */}
            <div className="highlight-cards-grid">
              {aboutHighlights.map((item) => (
                <div key={item.title} className="highlight-card glass-card">
                  <div className="highlight-icon-wrapper">
                    <i className={`fa-solid ${item.icon}`} aria-hidden="true"></i>
                  </div>
                  <h4 className="highlight-title">{item.title}</h4>
                  <p className="highlight-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
