import React, { useState } from 'react';
import { Server, Smartphone, Zap, CreditCard, Palette, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profileData';

const iconMap = {
  Server,
  Smartphone,
  Zap,
  CreditCard,
  Palette
};

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: CheckCircle2 },
    ...profileData.skillCategories.map(cat => ({
      id: cat.id,
      name: cat.name,
      icon: iconMap[cat.icon] || Server
    }))
  ];

  const displayedSkills = activeCategory === 'all'
    ? profileData.skillCategories.flatMap(c => c.skills)
    : profileData.skillCategories.find(c => c.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Technical Arsenal</div>
          <h2 className="section-title">
            Technologies & <span className="section-title-highlight">Core Competencies</span>
          </h2>
          <p className="section-description">
            A comprehensive matrix of production-tested languages, frameworks, cloud services, and protocols refined across a decade of engineering.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                className={`skills-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <Icon size={16} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {displayedSkills.map((skill, idx) => (
            <div key={idx} className="skill-card">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level-pill">{skill.level}</span>
              </div>
              <div className="skill-tags">
                {skill.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
