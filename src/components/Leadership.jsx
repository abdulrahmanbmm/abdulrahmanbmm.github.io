import React from 'react';
import { Users, Award, Compass } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Leadership() {
  const icons = [Users, Compass, Award];

  return (
    <section id="leadership" className="section" style={{ background: 'rgba(14, 21, 38, 0.35)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Community & Mentorship</div>
          <h2 className="section-title">
            Leadership & <span className="section-title-gradient">Impact</span>
          </h2>
          <p className="section-description">
            Passionate about nurturing engineering communities, advocating for digital literacy, and mentoring developer talent across Africa.
          </p>
        </div>

        <div className="leadership-grid">
          {profileData.leadership.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div key={idx} className="leadership-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <div className="pitch-icon-box" style={{ width: '40px', height: '40px', margin: 0 }}>
                    <Icon size={20} />
                  </div>
                  <span className="leadership-period">{item.period}</span>
                </div>
                <h3 className="leadership-role">{item.role}</h3>
                <div className="leadership-org">{item.organization}</div>
                <p className="leadership-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
