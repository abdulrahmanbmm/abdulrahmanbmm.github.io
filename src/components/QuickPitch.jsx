import React from 'react';
import { Layers, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profileData';
import Signature from './Signature';

const competencyIcons = [Layers, Sparkles, TrendingUp];

export default function QuickPitch() {
  return (
    <section id="pitch" className="section" style={{ paddingTop: '2.5rem' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Executive Brief</div>
          <h2 className="section-title">
            Engineered for <span className="section-title-highlight">Scale, Performance & Impact</span>
          </h2>
          <p className="section-description">
            A comprehensive brief for engineering managers, founders, and recruiters seeking a senior engineer who blends architectural rigor with business outcomes.
          </p>
        </div>

        {/* Executive Narrative & Official Signature Seal */}
        <div className="executive-summary-wrapper">
          <div className="executive-summary-box">
            <div className="summary-intro-grid">
              {profileData.executiveSummary.map((para, idx) => (
                <p key={idx} className="executive-para">
                  {para}
                </p>
              ))}
            </div>

            {/* Verified Digital Signature & Certificate Seal */}
            <div className="executive-seal-container">
              <Signature variant="seal" />
            </div>
          </div>
        </div>

        {/* 3 Core Competency Pillars */}
        <div className="pitch-grid" style={{ marginTop: '2rem' }}>
          {profileData.coreCompetencies.map((comp, idx) => {
            const Icon = competencyIcons[idx % competencyIcons.length];
            return (
              <div key={idx} className="pitch-card">
                <div className="pitch-icon-box">
                  <Icon size={24} />
                </div>
                <div className="pitch-card-meta">
                  <span className="competency-badge">Pillar 0{idx + 1}</span>
                </div>
                <h3 className="pitch-title">{comp.title}</h3>
                <p className="pitch-text">{comp.description}</p>
                <div className="pitch-highlight-bar">
                  <CheckCircle2 size={15} color="var(--emerald-400)" />
                  <span>{comp.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
