import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Menu, X } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'pitch', 'services', 'skills', 'projects', 'experience', 'credentials', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Overview' },
    // { id: 'pitch', label: 'Summary' },
    { id: 'services', label: 'Services' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Case Studies' },
    { id: 'experience', label: 'Experience' },
    // { id: 'credentials', label: 'Credentials' },
    // { id: 'testimonials', label: 'Reviews' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#hero" className="brand-logo" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>
          <div className="brand-monogram">AB</div>
          <span>Abdulrahman</span>
        </a>

        <nav className="nav-links" aria-label="Main Navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="btn-icon"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href={profileData.resumePdf}
            download="Abdulrahman_Bello_Resume.pdf"
            className="btn btn-primary"
            style={{ padding: '0.55rem 1.1rem', fontSize: '0.86rem' }}
          >
            <Download size={15} />
            <span>Resume</span>
          </a>

          <button
            className="btn-icon mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => handleNavClick(item.id)}
          >
            {item.label}
          </button>
        ))}
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
          <a
            href={profileData.resumePdf}
            download="Abdulrahman_Bello_Resume.pdf"
            className="btn btn-primary"
            style={{ flex: 1 }}
          >
            <Download size={16} />
            Resume (PDF)
          </a>
          {/* <a
            href={profileData.coverLetterPdf}
            download="Abdulrahman_Bello_CoverLetter.pdf"
            className="btn btn-secondary"
            style={{ flex: 1 }}
          >
            Cover Letter
          </a> */}
        </div>
      </div>
    </header>
  );
}
