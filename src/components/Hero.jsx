import React from 'react';
import { personalInfo } from '../data/portfolioData';

// Allowed technology badges only from actual skills
const floatingBadges = [
  { name: 'React', icon: 'fa-brands fa-react', color: '#61DAFB' },
  { name: 'Node.js', icon: 'fa-brands fa-node-js', color: '#339933' },
  { name: 'Python', icon: 'fa-brands fa-python', color: '#3776AB' },
  { name: 'Flutter', icon: 'fa-solid fa-mobile-screen', color: '#02569B' },
];

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background radial glow & fine grid */}
      <div className="hero-bg-grid" aria-hidden="true"></div>
      <div className="hero-bg-glow" aria-hidden="true"></div>

      <div className="container hero-container">
        {/* Left Column: Hero Content */}
        <div className="hero-content">
          {/* 1. Eyebrow */}
          <div className="hero-eyebrow">
            <span className="eyebrow-badge">
              <i className="fa-solid fa-code" aria-hidden="true"></i>
              {personalInfo.eyebrow}
            </span>
          </div>

          {/* 2. Name */}
          <h1 className="hero-title">
            <span className="title-greeting">Hi, I'm</span>
            <span className="title-name">{personalInfo.name}</span>
          </h1>

          {/* 3. Role */}
          <p className="hero-role">{personalInfo.role}</p>

          {/* 4. Introduction */}
          <p className="hero-intro">{personalInfo.heroBio}</p>

          {/* 5. CTA Buttons */}
          <div className="hero-cta-group">
            <a
              href={personalInfo.resumePath}
              download="kamaleshsingh_resume.pdf"
              className="btn btn-primary hero-btn"
              aria-label="Download Kamalesh Singh D Resume PDF"
            >
              <i className="fa-solid fa-file-arrow-down" aria-hidden="true"></i>
              <span>Download Resume</span>
            </a>

            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="btn btn-secondary hero-btn"
            >
              <i className="fa-solid fa-diagram-project" aria-hidden="true"></i>
              <span>View My Projects</span>
            </a>
          </div>

          {/* 6. Social Icons */}
          <div className="hero-socials" aria-label="Social Profiles">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <i className="fa-brands fa-github" aria-hidden="true"></i>
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="social-link"
              aria-label="Send Email"
              title="Email"
            >
              <i className="fa-solid fa-envelope" aria-hidden="true"></i>
            </a>

            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="WhatsApp Chat"
              title="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        {/* Right Column (or 7th on Mobile): Hero Visual / Profile Composition */}
        <div className="hero-visual-wrapper">
          <div className="hero-visual-card">
            {/* Soft decorative glow behind portrait */}
            <div className="visual-backdrop-glow" aria-hidden="true"></div>

            {/* Profile Frame with Kamalesh's real photo */}
            <div className="profile-frame">
              <img
                src={personalInfo.profileImage}
                alt="Kamalesh Singh D - Computer Science and Engineering student"
                className="profile-photo"
                width="340"
                height="340"
                loading="eager"
              />
              <div className="profile-frame-border" aria-hidden="true"></div>
            </div>

            {/* Subtle Floating Technology Badges (Only actual skills, no fake metrics) */}
            <div className="floating-badge badge-top-left animate-float">
              <i className="fa-brands fa-react" style={{ color: '#61DAFB' }} aria-hidden="true"></i>
              <span>React</span>
            </div>

            <div className="floating-badge badge-top-right animate-float" style={{ animationDelay: '1.2s' }}>
              <i className="fa-brands fa-node-js" style={{ color: '#22c55e' }} aria-hidden="true"></i>
              <span>Node.js</span>
            </div>

            <div className="floating-badge badge-bottom-left animate-float" style={{ animationDelay: '2.4s' }}>
              <i className="fa-brands fa-python" style={{ color: '#38bdf8' }} aria-hidden="true"></i>
              <span>Python</span>
            </div>

            <div className="floating-badge badge-bottom-right animate-float" style={{ animationDelay: '3.6s' }}>
              <i className="fa-solid fa-mobile-screen" style={{ color: '#0ea5e9' }} aria-hidden="true"></i>
              <span>Flutter</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
