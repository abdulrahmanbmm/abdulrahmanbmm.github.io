import React from 'react';
import { Layers, Activity, ShieldCheck } from 'lucide-react';

export default function QuickPitch() {
  const pillars = [
    {
      icon: Layers,
      title: "Cloud & Backend Architecture",
      text: "Architecting high-availability backends with Laravel, PHP, and Node.js. Specializing in relational schemas (MySQL, PostgreSQL), RESTful micro-APIs, automated GitHub Actions CI/CD pipelines, and secure reverse-proxy servers on DigitalOcean and AWS."
    },
    {
      icon: Activity,
      title: "Mobile & Real-Time Engineering",
      text: "Building production cross-platform mobile apps with React Native and TypeScript. Deep experience with real-time WebSockets, WebRTC video/audio consultation pipelines, and end-to-end Google Play Console release management."
    },
    {
      icon: ShieldCheck,
      title: "FinTech & Founder Mindset",
      text: "Integrated 6+ FinTech payment gateways (Paystack, Flutterwave, Stripe, Monnify, Squad, Zainpay) with resilient webhook idempotency. I bridge engineering rigor with business strategy to turn requirements into revenue-generating software."
    }
  ];

  return (
    <section id="pitch" className="section" style={{ paddingTop: '2rem' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Executive Summary</div>
          <h2 className="section-title">
            Engineered for <span className="section-title-gradient">Scale, Performance & Impact</span>
          </h2>
          <p className="section-description">
            A 30-second brief for engineering managers and technical recruiters looking for a senior contributor who takes total ownership of the stack.
          </p>
        </div>

        <div className="pitch-grid">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="pitch-card">
                <div className="pitch-icon-box">
                  <Icon size={24} />
                </div>
                <h3 className="pitch-title">{p.title}</h3>
                <p className="pitch-text">{p.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
