import React, { useState } from 'react';
import { 
  GraduationCap, 
  Trophy, 
  CheckCircle, 
  Award, 
  ExternalLink, 
  Calendar, 
  Sparkles, 
  Eye, 
  Camera, 
  Images, 
  FileCheck,
  Maximize2
} from 'lucide-react';
import { profileData } from '../data/profileData';

const certCategories = [
  { id: 'all', label: 'All Certifications' },
  { id: 'ai', label: 'Generative AI & Copilot' },
  { id: 'laravel', label: 'Laravel & Architecture' },
  { id: 'mobile', label: 'Mobile & Cloud' },
  { id: 'marketing', label: 'Meta & Growth' },
  { id: 'design', label: 'UI/UX & Design' }
];

const proofCategories = [
  { id: 'all', label: 'All Proof (15)' },
  { id: 'awards', label: 'Trophies & Stage (7)' },
  { id: 'certs', label: 'Certificates & Diplomas (4)' },
  { id: 'leadership', label: 'Leadership & Events (2)' },
  // { id: 'portraits', label: 'Studio Portraits (2)' }
];

export default function Education({ onOpenPhoto }) {
  const [activeCertTab, setActiveCertTab] = useState('all');
  const [activeProofTab, setActiveProofTab] = useState('all');

  const filteredCerts = activeCertTab === 'all'
    ? profileData.certifications
    : profileData.certifications.filter(c => c.category === activeCertTab);

  const filteredMoments = activeProofTab === 'all'
    ? profileData.honorsMoments
    : profileData.honorsMoments.filter(m => m.category === activeProofTab);

  const handleOpenAwardPhoto = (award) => {
    if (!onOpenPhoto) return;
    if (award.gallery && award.gallery.length > 0) {
      onOpenPhoto(award.gallery[0], award.gallery);
    } else if (award.image) {
      onOpenPhoto({
        url: award.image,
        title: award.title,
        subtitle: award.issuer,
        date: award.date,
        badge: award.badge || 'Honors Award',
        caption: award.note
      }, [
        {
          url: award.image,
          title: award.title,
          subtitle: award.issuer,
          date: award.date,
          badge: award.badge || 'Honors Award',
          caption: award.note
        }
      ]);
    }
  };

  const handleOpenCertPhoto = (cert) => {
    if (!onOpenPhoto || !cert.image) return;
    onOpenPhoto({
      url: cert.image,
      title: cert.title,
      subtitle: cert.issuer,
      date: cert.date,
      badge: 'Accredited Credential',
      caption: `Official certificate awarded to Abdulrahman Bello by ${cert.issuer}.`
    });
  };

  const handleOpenMoment = (moment) => {
    if (!onOpenPhoto) return;
    onOpenPhoto(moment, filteredMoments);
  };

  return (
    <section id="credentials" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Foundations & Honors</div>
          <h2 className="section-title">
            Education, Awards & <span className="section-title-highlight">Certifications</span>
          </h2>
          <p className="section-description">
            Rigorous academic grounding in computer science coupled with continuous professional specialization, on-stage honors, and accredited credentials.
          </p>
        </div>

        {/* Two-Column Grid: Education & Honors */}
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

          {/* Honors & Recognitions Column with Photo Previews */}
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
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.4rem' }}>
                      <div className="award-title">{award.title}</div>
                      {award.badge && (
                        <span className="award-badge-tag">{award.badge}</span>
                      )}
                    </div>
                    <div className="award-issuer">
                      {award.issuer} {award.date && `· ${award.date}`}
                    </div>
                    <div className="award-note">{award.note}</div>

                    {award.image && (
                      <button
                        type="button"
                        className="award-photo-trigger-btn"
                        onClick={() => handleOpenAwardPhoto(award)}
                        title={`View authentic ceremony photo for ${award.title}`}
                      >
                        <div className="award-thumb-frame">
                          <img src={award.image} alt={award.title} className="award-thumb-img" />
                          <div className="award-thumb-overlay">
                            <Maximize2 size={12} />
                          </div>
                        </div>
                        <span className="award-photo-text">
                          <Camera size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px' }} />
                          {award.gallery && award.gallery.length > 1
                            ? `View Photos (${award.gallery.length})`
                            : 'View Trophy Photo'}
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Proof of Excellence: Interactive Honors, Awards & Credentials Photo Gallery */}
        <div className="proof-gallery-wrapper" style={{ marginTop: '4rem' }}>
          <div className="proof-gallery-header">
            <div>
              <div className="section-badge" style={{ marginBottom: '0.4rem' }}>Visual Archive & Authenticity</div>
              <h3 className="proof-gallery-title">
                <Sparkles size={22} color="var(--accent-primary)" />
                <span>Moments in Action: Awards, Trophies & Credentials ({profileData.honorsMoments.length})</span>
              </h3>
              <p className="proof-gallery-desc">
                High-resolution photographic proof of university honors, crystal trophies on stage, official election certificates, and accredited engineering diplomas.
              </p>
            </div>

            {/* Gallery Category Tabs */}
            <div className="proof-tabs-bar">
              {proofCategories.map(cat => (
                <button
                  key={cat.id}
                  className={`cert-tab-btn ${activeProofTab === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveProofTab(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Photo Grid */}
          <div className="proof-grid">
            {filteredMoments.map((item, idx) => (
              <div
                key={item.id || idx}
                className="proof-card"
                onClick={() => handleOpenMoment(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenMoment(item);
                  }
                }}
                aria-label={`Inspect photo: ${item.title}`}
              >
                <div className="proof-img-box">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="proof-img"
                    loading="lazy"
                  />
                  <div className="proof-overlay">
                    <div className="proof-overlay-inner">
                      <Eye size={22} />
                      <span>Inspect Photo</span>
                    </div>
                  </div>
                  {item.badge && (
                    <span className="proof-badge">{item.badge}</span>
                  )}
                </div>

                <div className="proof-card-content">
                  <div className="proof-card-date">
                    <Calendar size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px' }} />
                    {item.date}
                  </div>
                  <h4 className="proof-card-title">{item.title}</h4>
                  <div className="proof-card-subtitle">{item.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Professional Certifications Showcase */}
        <div className="certifications-full-wrapper" style={{ marginTop: '4rem' }}>
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

                <div className="cert-card-actions">
                  {cert.hasPhysicalCert && cert.image && (
                    <button
                      type="button"
                      onClick={() => handleOpenCertPhoto(cert)}
                      className="cert-photo-btn"
                      title="View scanned physical certificate"
                    >
                      <FileCheck size={13} />
                      <span>View Scanned Cert</span>
                    </button>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
