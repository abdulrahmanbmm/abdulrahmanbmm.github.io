import React from 'react';
import { ArrowDownRight, Download, FileText, Mail, Sparkles, Code2, Smartphone } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Hero({ onOpenContact }) {
  return (
    <section id="hero" className="section hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="status-pill">
              <span className="status-indicator"></span>
              <span>{profileData.availabilityStatus}</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="section-title-gradient">{profileData.name}</span>
            </h1>

            <div className="hero-subtitle">{profileData.title}</div>
            <div className="hero-subtag">{profileData.subTitle}</div>

            <p className="hero-tagline">{profileData.tagline}</p>

            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary">
                <span>View Case Studies</span>
                <ArrowDownRight size={18} />
              </a>

              <a
                href={profileData.resumePdf}
                download="Abdulrahman_Bello_Resume.pdf"
                className="btn btn-secondary"
              >
                <Download size={17} />
                <span>Resume (PDF)</span>
              </a>

              <a
                href={profileData.coverLetterPdf}
                download="Abdulrahman_Bello_CoverLetter.pdf"
                className="btn btn-secondary"
              >
                <FileText size={17} />
                <span>Cover Letter</span>
              </a>

              <a href="#contact" className="btn btn-outline" onClick={onOpenContact}>
                <Mail size={17} />
                <span>Get In Touch</span>
              </a>
            </div>

            <div className="hero-stats-ribbon">
              {profileData.metrics.map((m, idx) => (
                <div key={idx} className="stat-item">
                  <span className="stat-value">{m.value}</span>
                  <span className="stat-label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-card">
              {/* Floating Tech Chips */}
              <div className="floating-chip floating-chip-1">
                <Code2 size={16} color="var(--emerald-400)" />
                <span>Laravel · Node.js · CI/CD</span>
              </div>

              <div className="floating-chip floating-chip-2">
                <Smartphone size={16} color="var(--cyan-400)" />
                <span>React Native · WebRTC</span>
              </div>

              <div className="portrait-img-wrapper">
                <img
                  src={profileData.avatarUrl}
                  alt={profileData.name}
                  className="portrait-img"
                  loading="eager"
                />
                <div className="portrait-overlay-gradient"></div>
                <div className="portrait-badge-bottom">
                  <div>
                    <div className="portrait-badge-role">Abdulrahman Bello</div>
                    <div className="portrait-badge-sub">Senior Software Engineer</div>
                  </div>
                  <Sparkles size={20} color="var(--emerald-400)" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
