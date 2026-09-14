import React from 'react';
import { ArrowUp, Github, Linkedin, Globe } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div className="brand-monogram" style={{ width: '32px', height: '32px', fontSize: '0.85rem' }}>AB</div>
          <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>{profileData.name}</span>
        </div>

        <p style={{ maxWidth: '520px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Senior Software Engineer · Full-Stack & Mobile Developer · Digital Entrepreneur. Architecting production cloud backends, real-time systems, and high-conversion products.
        </p>

        <div className="footer-links">
          <a href="#hero" className="footer-link">Overview</a>
          <a href="#pitch" className="footer-link">Summary</a>
          <a href="#skills" className="footer-link">Skills</a>
          <a href="#projects" className="footer-link">Case Studies</a>
          <a href="#experience" className="footer-link">Experience</a>
          <a href="#leadership" className="footer-link">Leadership</a>
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
          © {new Date().getFullYear()} Abdulrahman Bello. All rights reserved. Built with React & Vite.
        </div>
      </div>
    </footer>
  );
}
