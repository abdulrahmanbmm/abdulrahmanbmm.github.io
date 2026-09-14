import React from 'react';
import { Quote, Linkedin, CheckCircle2, Star } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section" style={{ background: 'rgba(14, 21, 38, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Verified Endorsements</div>
          <h2 className="section-title">
            Colleague & Partner <span className="section-title-highlight">Recommendations</span>
          </h2>
          <p className="section-description">
            Direct feedback from software engineers and operations leaders who have collaborated with me in high-stakes engineering environments.
          </p>
        </div>

        <div className="testimonials-grid">
          {profileData.recommendations.map((rec, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-quote-icon">
                  <Quote size={24} />
                </div>
                <div className="testimonial-stars" aria-label="5 stars rating">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
              </div>

              <blockquote className="testimonial-quote">
                "{rec.quote}"
              </blockquote>

              <div className="testimonial-footer">
                <div className="testimonial-avatar-fallback">
                  {rec.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="testimonial-author-meta">
                  <div className="testimonial-author-name">
                    <span>{rec.author}</span>
                    <CheckCircle2 size={15} className="verified-badge-icon" title="LinkedIn Verified Endorsement" />
                  </div>
                  <div className="testimonial-author-title">{rec.title}</div>
                  <div className="testimonial-author-rel">{rec.relationship} · {rec.date}</div>
                </div>

                {rec.linkedin && (
                  <a
                    href={rec.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-icon testimonial-linkedin-btn"
                    title={`View ${rec.author}'s LinkedIn Profile`}
                    aria-label={`View ${rec.author}'s LinkedIn Profile`}
                  >
                    <Linkedin size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
