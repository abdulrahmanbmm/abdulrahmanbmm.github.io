import React from 'react';
import { GraduationCap, Trophy, CheckCircle, Award } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Education() {
  return (
    <section id="credentials" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Foundations & Honors</div>
          <h2 className="section-title">
            Education, Awards & <span className="section-title-highlight">Certifications</span>
          </h2>
          <p className="section-description">
            Rigorous academic grounding in computer science coupled with continuous professional specialization.
          </p>
        </div>

        <div className="credentials-grid">
          {/* Education Column */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <GraduationCap size={22} color="var(--emerald-400)" />
              <span>Academic Background</span>
            </h3>

            {profileData.education.map((edu, idx) => (
              <div key={idx} className="edu-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <h4 className="edu-degree">{edu.degree}</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>{edu.period}</span>
                </div>
                <div className="edu-institution">{edu.institution}</div>
                <p className="edu-detail">{edu.detail}</p>
              </div>
            ))}
          </div>

          {/* Awards & Certifications Column */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Trophy size={22} color="#f59e0b" />
              <span>Honors & Recognitions</span>
            </h3>

            <div className="awards-list">
              {profileData.awards.map((award, idx) => (
                <div key={idx} className="award-box">
                  <div className="award-icon-box">
                    <Award size={20} />
                  </div>
                  <div>
                    <div className="award-title">{award.title}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--cyan-400)', fontWeight: 600 }}>
                      {award.issuer}
                    </div>
                    <div className="award-note">{award.note}</div>
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <CheckCircle size={20} color="var(--cyan-400)" />
              <span>Verified Certifications</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {profileData.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    padding: '0.6rem 0.85rem',
                    background: 'var(--bg-surface-elevated)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <span style={{ color: 'var(--emerald-400)', fontWeight: 'bold' }}>✓</span>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
