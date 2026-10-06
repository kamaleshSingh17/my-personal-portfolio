import React, { useState } from 'react';
import { skillCategories, skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  const getCategoryBadgeLabel = (category) => {
    switch (category) {
      case 'programming': return 'Language';
      case 'web': return 'Web / Frontend';
      case 'app': return 'Mobile';
      case 'database': return 'Database';
      case 'tools': return 'Tool';
      default: return 'Technology';
    }
  };

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="fa-solid fa-layer-group" aria-hidden="true"></i>
            Technical Skills
          </span>
          <h2 className="section-title">
            Interactive Skills <span className="text-gradient">Dashboard</span>
          </h2>
          <p className="section-description">
            A comprehensive overview of programming languages, frameworks, databases, and development tools I work with.
          </p>
        </div>

        {/* Category Filters */}
        <div className="skills-filter-wrapper" role="tablist" aria-label="Skill categories">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              role="tab"
              aria-selected={activeCategory === category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span>{category.label}</span>
              {activeCategory === category.id && <span className="filter-active-pill" />}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="skill-card glass-card">
              <div className="skill-card-top">
                <div 
                  className="skill-icon-box"
                  style={{ '--skill-accent': skill.color }}
                >
                  <i className={skill.icon} aria-hidden="true"></i>
                </div>
                <span className="skill-category-badge">
                  {getCategoryBadgeLabel(skill.category)}
                </span>
              </div>

              <div className="skill-card-body">
                <h3 className="skill-name">{skill.name}</h3>
                
                {/* Visual design element indicator only (No fake percentages, strictly design decoration) */}
                <div className="skill-visual-indicator" aria-hidden="true">
                  <div className="indicator-track">
                    <div 
                      className="indicator-bar"
                      style={{ '--bar-accent': skill.color }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
