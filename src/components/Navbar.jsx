import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Determine active section
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand */}
        <a 
          href="#home" 
          className="brand-logo"
          onClick={(e) => handleNavClick(e, '#home')}
          aria-label="Kamalesh Singh D - Home"
        >
          <span className="brand-name">{personalInfo.name}</span>
          <span className="brand-dot">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={item.label} className="nav-item">
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                    {isActive && <span className="active-dot" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Actions: Resume & Theme Toggle */}
        <div className="nav-actions">
          <a
            href={personalInfo.resumePath}
            download="kamaleshsingh_resume.pdf"
            className="btn btn-primary btn-sm resume-btn"
            aria-label="Download Kamalesh Singh D Resume PDF"
          >
            <i className="fa-solid fa-download" aria-hidden="true"></i>
            <span>Resume</span>
          </a>

          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            {theme === 'dark' ? (
              <i className="fa-solid fa-sun" aria-hidden="true"></i>
            ) : (
              <i className="fa-solid fa-moon" aria-hidden="true"></i>
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <i className="fa-solid fa-xmark" aria-hidden="true"></i>
            ) : (
              <i className="fa-solid fa-bars" aria-hidden="true"></i>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="container mobile-menu-content">
          <ul className="mobile-nav-list">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    <span>{item.label}</span>
                    {isActive && <i className="fa-solid fa-circle-chevron-right active-arrow" />}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mobile-menu-footer">
            <a
              href={personalInfo.resumePath}
              download="kamaleshsingh_resume.pdf"
              className="btn btn-primary btn-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="fa-solid fa-download" aria-hidden="true"></i>
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
