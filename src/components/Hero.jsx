import React from 'react';
import { ArrowDownRight, Download, FileText, Mail, MapPin, Sparkles, CheckCircle, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/profileData';
import Signature from './Signature';

export default function Hero({ onOpenContact, onOpenPhoto }) {
  return (
    <section id="hero" className="section hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            {/* Live Availability Radar Pill */}
            <div className="status-pill">
              <span className="status-radar-box">
                <span className="status-radar-ping"></span>
                <span className="status-indicator"></span>
              </span>
              <span>{profileData.availabilityStatus}</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="hero-name-highlight">{profileData.name}</span>
            </h1>

            <div className="hero-subtitle">
              <Sparkles size={18} color="var(--accent-primary)" style={{ display: 'inline', marginRight: '6px' }} />
              <span>{profileData.title}</span>
            </div>

            <div className="hero-subtag">
              <MapPin size={15} className="hero-loc-icon" />
              <span>{profileData.location}</span> · <span>{profileData.subTitle}</span>
            </div>

            <p className="hero-tagline">{profileData.tagline}</p>

            {/* Authentic Digital Handwritten Signature in Hero */}
            <div className="hero-signature-wrap">
              <Signature variant="default" />
            </div>

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

            {/* Metrics Ribbon with animated hover */}
            <div className="hero-stats-ribbon">
              {profileData.metrics.map((m, idx) => (
                <div key={idx} className="stat-item">
                  <span className="stat-value">{m.value}</span>
                  <span className="stat-label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Portrait with Glowing Aura and Verified Seal */}
          <div className="hero-visual">
            <div className="portrait-visual-wrapper">
              <div className="portrait-glow-backdrop"></div>

              <div 
                className="portrait-frame"
                style={{ cursor: onOpenPhoto ? 'pointer' : 'default' }}
                onClick={() => onOpenPhoto && onOpenPhoto({
                  url: profileData.avatarUrl,
                  title: profileData.name,
                  subtitle: "Senior Software Engineer · Full-Stack & Mobile Developer",
                  date: "2025",
                  badge: "Executive Studio Portrait",
                  caption: "Abdulrahman Bello — Senior Software Engineer, Full-Stack & Mobile Developer, Systems Architect with 7+ years building high-concurrency systems."
                })}
                title="Click to view full portrait"
              >
                <div className="portrait-verified-float">
                  <ShieldCheck size={14} color="#10b981" />
                  <span>Verified Architect</span>
                </div>

                <div className="portrait-img-box">
                  <img
                    src={profileData.avatarUrl}
                    alt={profileData.name}
                    className="portrait-img"
                    loading="eager"
                  />
                  <div className="portrait-hover-hint">Click to enlarge</div>
                </div>

                <div className="portrait-caption">
                  <div className="portrait-name">{profileData.name}</div>
                  <div className="portrait-role">Senior Software Engineer & Systems Architect</div>
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
      </div>
    </section>
  );
}
