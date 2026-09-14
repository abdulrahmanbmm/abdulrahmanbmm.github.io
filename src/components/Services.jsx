import React from 'react';
import { Smartphone, Code2, Palette, Layers, Briefcase, Bot, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profileData';

const iconMap = {
  Smartphone,
  Apple: Smartphone,
  Bot,
  Code2,
  Palette,
  Layers,
  Briefcase
};

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Core Capabilities</div>
          <h2 className="section-title">
            Strategic Engineering & <span className="section-title-highlight">Services</span>
          </h2>
          <p className="section-description">
            High-impact software engineering services spanning full-stack web platforms, cross-platform mobile apps, AI automation, and architectural advisory.
          </p>
        </div>

        <div className="services-grid">
          {profileData.services.map((svc) => {
            const Icon = iconMap[svc.icon] || Code2;
            return (
              <div key={svc.id} className="service-card">
                <div className="service-card-top">
                  <div className="service-icon-box">
                    <Icon size={24} />
                  </div>
                  <span className="service-badge">{svc.badge}</span>
                </div>

                <h3 className="service-title">{svc.title}</h3>
                <p className="service-desc">{svc.shortDesc}</p>

                <div className="service-tags">
                  {svc.tags.map((tag, idx) => (
                    <span key={idx} className="service-tag-item">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="service-card-action">
                  <a
                    href="#contact"
                    className="service-link"
                    aria-label={`Inquire about ${svc.title}`}
                  >
                    <span>Discuss Project</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
