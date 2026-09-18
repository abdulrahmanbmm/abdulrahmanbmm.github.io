import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Copy, Check, Download, FileText, Globe } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Contact({ onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    onShowToast('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger mailto link with pre-filled content
    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;

    setFormSubmitted(true);
    onShowToast('Opening email client...');
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Get In Touch</div>
          <h2 className="section-title">
            Let's Build Something <span className="section-title-highlight">Extraordinary</span>
          </h2>
          <p className="section-description">
            Available for Senior Software Engineer roles, high-concurrency cloud architecture consulting, and lead mobile development projects.
          </p>
        </div>

        <div className="contact-grid">
          {/* Channels & Downloads */}
          <div className="contact-info-panel">
            {/* Email Card with Copy Button */}
            <div className="contact-channel-card">
              <div className="contact-icon-box">
                <Mail size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <div className="contact-channel-title">Direct Email</div>
                <div className="contact-channel-val">{profileData.email}</div>
              </div>
              <button
                className="btn-icon"
                onClick={handleCopyEmail}
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copied ? <Check size={18} color="var(--emerald-400)" /> : <Copy size={18} />}
              </button>
            </div>

            {/* Phone & Location Cards */}
            <a href={`tel:${profileData.phoneRaw}`} className="contact-channel-card">
              <div className="contact-icon-box" style={{ background: 'rgba(6, 182, 212, 0.12)', color: 'var(--cyan-400)' }}>
                <Phone size={22} />
              </div>
              <div>
                <div className="contact-channel-title">Phone & WhatsApp</div>
                <div className="contact-channel-val">{profileData.phone}</div>
              </div>
            </a>

            <div className="contact-channel-card">
              <div className="contact-icon-box" style={{ background: 'rgba(99, 102, 241, 0.12)', color: 'var(--indigo-400)' }}>
                <MapPin size={22} />
              </div>
              <div>
                <div className="contact-channel-title">Location</div>
                <div className="contact-channel-val">{profileData.location}</div>
              </div>
            </div>

            {/* Social Links Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-card"
                style={{ padding: '0.9rem', justifyContent: 'center', gap: '0.5rem' }}
              >
                <Linkedin size={18} color="#0a66c2" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>LinkedIn</span>
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-card"
                style={{ padding: '0.9rem', justifyContent: 'center', gap: '0.5rem' }}
              >
                <Github size={18} />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>GitHub</span>
              </a>

              <a
                href={profileData.dscCommunity}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-card"
                style={{ padding: '0.9rem', justifyContent: 'center', gap: '0.5rem' }}
              >
                <Globe size={18} color="var(--emerald-400)" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Google Dev</span>
              </a>
            </div>

            {/* Resume & Cover Letter Banner */}
            <div className="resume-download-banner">
              <div className="resume-download-title">Official Candidate Documents</div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Grab an offline copy of my detailed resume formatted for hiring committees.
              </p>
              <div className="resume-download-btns">
                <br /><a
                  href={profileData.resumePdf}
                  download="Abdulrahman_Bello_Resume.pdf"
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  <Download size={16} />
                  <span>Resume (PDF)</span>
                </a>
                {/* <a
                  href={profileData.coverLetterPdf}
                  download="Abdulrahman_Bello_CoverLetter.pdf"
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                >
                  <FileText size={16} />
                  <span>Cover Letter</span>
                </a> */}
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="contact-form-box">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Whether you have a specific opening, a technical consultation inquiry, or an architecture challenge — I'll respond within 24 hours.
            </p>

            {formSubmitted ? (
              <div style={{ padding: '2rem', textAlign: 'center', background: 'rgba(16, 185, 129, 0.1)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                <Check size={36} color="var(--emerald-400)" style={{ margin: '0 auto 0.75rem' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Message Prepared!</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
                  Your email client has been launched with the message details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Alex Henderson"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Your Work Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-subject">Subject / Position</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="e.g. Senior Software Engineer Role @ ..."
                    value={formData.subject}
                    onChange={handleFormChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    placeholder="Tell me about the role, project scope, or technical challenges..."
                    value={formData.message}
                    onChange={handleFormChange}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
                  <Send size={16} />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
