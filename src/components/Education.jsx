import React, { useState } from 'react';
import { GraduationCap, Trophy, CheckCircle, Award, ExternalLink, Calendar, Sparkles, BookOpen } from 'lucide-react';
import { profileData } from '../data/profileData';

const certCategories = [
  { id: 'all', label: 'All Certifications' },
  { id: 'ai', label: 'Generative AI & Copilot' },
  { id: 'laravel', label: 'Laravel & Architecture' },
  { id: 'mobile', label: 'Mobile & Cloud' },
  { id: 'marketing', label: 'Meta & Growth' },
  { id: 'design', label: 'UI/UX & Design' }
];

export default function Education() {
  const [activeCertTab, setActiveCertTab] = useState('all');

  const filteredCerts = activeCertTab === 'all'
    ? profileData.certifications
    : profileData.certifications.filter(c => c.category === activeCertTab);

  return (
    <section id="credentials" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Foundations & Honors</div>
          <h2 className="section-title">
            Education, Awards & <span className="section-title-highlight">Certifications</span>
          </h2>
          <p className="section-description">
            Rigorous academic grounding in computer science coupled with continuous professional specialization in Generative AI, Laravel, and Mobile Engineering.
          </p>
        </div>

        <div className="credentials-grid">
          {/* Education Column */}
          <div>
            <h3 className="subheading-accent">
              <GraduationCap size={22} color="var(--emerald-400)" />
              <span>Academic Background</span>
            </h3>

            <div className="edu-cards-list">
              {profileData.education.map((edu, idx) => (
                <div key={idx} className="edu-card">
                  <div className="edu-card-top">
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <span className="edu-period">{edu.period}</span>
                  </div>
                  <div className="edu-institution">{edu.institution}</div>
                  <p className="edu-detail">{edu.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Recognitions Column */}
          <div>
            <h3 className="subheading-accent">
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
                    <div className="award-issuer">
                      {award.issuer} {award.date && `· ${award.date}`}
                    </div>
                    <div className="award-note">{award.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Verified Certifications Showcase */}
        <div className="certifications-full-wrapper" style={{ marginTop: '3.5rem' }}>
          <div className="cert-section-header">
            <div>
              <div className="section-badge" style={{ marginBottom: '0.4rem' }}>Continuous Mastery</div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle size={22} color="var(--cyan-400)" />
                <span>Verified Professional Certifications ({profileData.certifications.length})</span>
              </h3>
            </div>

            {/* Cert Tabs */}
            <div className="cert-tabs-bar">
              {certCategories.map(cat => (
                <button
                  key={cat.id}
                  className={`cert-tab-btn ${activeCertTab === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCertTab(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="cert-cards-grid">
            {filteredCerts.map((cert, idx) => (
              <div key={idx} className="cert-card">
                <div className="cert-card-header">
                  <span className="cert-issuer-pill">{cert.issuer}</span>
                  <span className="cert-date-text">
                    <Calendar size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px' }} />
                    {cert.date}
                  </span>
                </div>

                <h4 className="cert-title">{cert.title}</h4>

                {cert.credentialId && (
                  <div className="cert-id-tag">ID: {cert.credentialId}</div>
                )}

                {cert.skills && cert.skills.length > 0 && (
                  <div className="cert-skills-wrap">
                    {cert.skills.map((sk, sIdx) => (
                      <span key={sIdx} className="cert-skill-badge">
                        {sk}
                      </span>
                    ))}
                  </div>
                )}

                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-verify-link"
                    title={`Verify ${cert.title}`}
                  >
                    <span>Show Credential</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
