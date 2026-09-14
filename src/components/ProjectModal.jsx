import React, { useEffect } from 'react';
import { X, Layers, AlertCircle, Cpu, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
          <X size={20} />
        </button>

        <div style={{ marginBottom: '1.25rem' }}>
          <span className="project-company-tag" style={{ color: project.accentColor }}>
            {project.company} · {project.timeline}
          </span>
          <h2 className="project-title" style={{ fontSize: '1.75rem', marginTop: '0.35rem' }}>
            {project.title}
          </h2>
          <div style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            Role: <strong>{project.role}</strong>
          </div>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          {project.summary}
        </p>

        {/* Key Metrics */}
        <div className="project-metrics-row" style={{ margin: '0 0 1.5rem 0' }}>
          {project.impactMetrics.map((m, idx) => (
            <div key={idx} className="project-metric-item">
              <span className="project-metric-val" style={{ color: project.accentColor }}>
                {m.value}
              </span>
              <span className="project-metric-lbl">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Engineering Challenges */}
        <h3 className="modal-section-title">
          <AlertCircle size={18} color="#f59e0b" />
          <span>Core Engineering Challenges</span>
        </h3>
        <ul className="modal-list">
          {project.challenges.map((c, idx) => (
            <li key={idx} className="modal-list-item">{c}</li>
          ))}
        </ul>

        {/* Architectural Solution */}
        <h3 className="modal-section-title">
          <Cpu size={18} color={project.accentColor} />
          <span>Architecture & Technical Implementation</span>
        </h3>
        <ul className="modal-list">
          {project.architecture.map((a, idx) => (
            <li key={idx} className="modal-list-item">{a}</li>
          ))}
        </ul>

        {/* Tech Stack */}
        <h3 className="modal-section-title">
          <Layers size={18} color="var(--indigo-400)" />
          <span>Technologies Deployed</span>
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '0.5rem' }}>
          {project.stack.map((t, idx) => (
            <span key={idx} className="project-stack-badge" style={{ fontSize: '0.82rem', padding: '0.3rem 0.7rem' }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
