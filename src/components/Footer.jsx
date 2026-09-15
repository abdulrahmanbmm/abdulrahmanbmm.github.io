import React from 'react';
import { ArrowUp, Github, Linkedin, Globe } from 'lucide-react';
import { profileData } from '../data/profileData';
import Signature from './Signature';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* Architect Closing Signature Block */}
        <div className="footer-closing-signature-wrapper">
          <Signature variant="closing" />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1.5rem' }}>
          <div className="brand-monogram" style={{ width: '34px', height: '34px', fontSize: '0.9rem' }}>AB</div>
          <span style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-primary)' }}>{profileData.name}</span>
        </div>

        <p style={{ maxWidth: '580px', fontSize: '0.9rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
          Senior Software Engineer · Full-Stack &amp; Mobile Developer · Systems Architect. Bridging complex software engineering and high-growth business strategy with Laravel, React Native, and AI automation.
        </p>

        <div className="footer-links">
          <a href="#hero" className="footer-link">Overview</a>
          <a href="#pitch" className="footer-link">Summary</a>
          <a href="#services" className="footer-link">Services</a>
          <a href="#skills" className="footer-link">Skills</a>
          <a href="#projects" className="footer-link">Case Studies</a>
          <a href="#experience" className="footer-link">Experience</a>
          <a href="#credentials" className="footer-link">Credentials</a>
          <a href="#testimonials" className="footer-link">Reviews</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>

        <div className="footer-socials">
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href={profileData.dscCommunity}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            aria-label="Google Developer Profile"
          >
            <Globe size={18} />
          </a>
          <button
            onClick={scrollToTop}
            className="btn-icon"
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} Abdulrahman Bello. All rights reserved. Handcrafted &amp; engineered for performance and impact.
        </div>
      </div>
    </footer>
  );
}
