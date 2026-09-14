import React from 'react';
import { ArrowDownRight, Download, FileText, Mail, MapPin } from 'lucide-react';
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
              Hi, I'm <span className="hero-name-highlight">{profileData.name}</span>
            </h1>

            <div className="hero-subtitle">{profileData.title}</div>
            <div className="hero-subtag">
              <MapPin size={15} className="hero-loc-icon" />
              <span>{profileData.location}</span> · <span>{profileData.subTitle}</span>
            </div>

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
                <Download size={16} />
                <span>Resume (PDF)</span>
              </a>

              <a
                href={profileData.coverLetterPdf}
                download="Abdulrahman_Bello_CoverLetter.pdf"
                className="btn btn-secondary"
              >
                <FileText size={16} />
                <span>Cover Letter</span>
              </a>

              <a href="#contact" className="btn btn-outline" onClick={onOpenContact}>
                <Mail size={16} />
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
            <div className="portrait-frame">
              <div className="portrait-img-box">
                <img
                  src={profileData.avatarUrl}
                  alt={profileData.name}
                  className="portrait-img"
                  loading="eager"
                />
              </div>
              <div className="portrait-caption">
                <div className="portrait-name">{profileData.name}</div>
                <div className="portrait-role">Senior Software Engineer & Architect</div>
                <div className="portrait-tags">
                  <span>Laravel</span>
                  <span>React Native</span>
                  <span>Cloud & AI</span>
                  <span>FinTech</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
