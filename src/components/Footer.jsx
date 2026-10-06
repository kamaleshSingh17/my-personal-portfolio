import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" onClick={handleScrollToTop} className="brand-logo" aria-label="Kamalesh Singh D">
              <span className="brand-name">{personalInfo.name}</span>
              <span className="brand-dot">.</span>
            </a>
            <p className="footer-description">
              {personalInfo.footerBio}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-nav">
            <span className="footer-heading">Navigation</span>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div className="footer-social-column">
            <span className="footer-heading">Connect</span>
            <div className="footer-social-icons">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="GitHub"
                title="GitHub"
              >
                <i className="fa-brands fa-github" aria-hidden="true"></i>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="footer-social-icon"
                aria-label="Email"
                title="Email"
              >
                <i className="fa-solid fa-envelope" aria-hidden="true"></i>
              </a>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" aria-hidden="true"></div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {personalInfo.copyrightYear} {personalInfo.name} | Portfolio
          </p>
          <p className="footer-subtext">
            IFET College of Engineering • Computer Science & Engineering
          </p>
        </div>
      </div>
    </footer>
  );
}
