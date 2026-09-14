import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Career Trajectory</div>
          <h2 className="section-title">
            Professional <span className="section-title-highlight">Work Experience</span>
          </h2>
          <p className="section-description">
            A track record of high-concurrency systems, mobile deployments, and architectural ownership across venture-backed startups and consulting engagements.
          </p>
        </div>

        <div className="timeline-wrapper">
          {profileData.experience.map((exp, idx) => (
            <div key={idx} className="timeline-card">
              <div className="timeline-node-pin"></div>
              <div className="timeline-box">
                <div className="timeline-meta">
                  <span className="timeline-period">
                    <Calendar size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px' }} />
                    {exp.period}
                  </span>
                  {exp.badge && (
                    <span className="timeline-badge">{exp.badge}</span>
                  )}
                </div>

                <h3 className="timeline-role">{exp.role}</h3>
                <div className="timeline-company">
                  {exp.company} · <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>{exp.location}</span>
                </div>

                <ul className="timeline-bullet-list">
                  {exp.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="timeline-bullet-item">{bullet}</li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.75rem' }}>
                  {exp.stack.map((item, sIdx) => (
                    <span key={sIdx} className="skill-tag" style={{ fontSize: '0.72rem' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
