import React, { useEffect } from 'react';
import { X, Layers, AlertCircle, Cpu } from 'lucide-react';

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
        <div className="modal-header">
          <div>
            <div className="modal-meta">
              <span className="project-company-tag">{project.company}</span>
              <span className="project-timeline">{project.timeline}</span>
            </div>
            <h2 className="modal-title">{project.title}</h2>
            <div className="modal-role">
              Role: <strong>{project.role}</strong>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
            <X size={20} />
          </button>
        </div>

        <p className="modal-summary">{project.summary}</p>

        {/* Key Metrics */}
        <div className="project-metrics-row modal-metrics">
          {project.impactMetrics.map((m, idx) => (
            <div key={idx} className="project-metric-item">
              <span className="project-metric-val">{m.value}</span>
              <span className="project-metric-lbl">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Engineering Challenges */}
        <div className="modal-section">
          <h3 className="modal-section-title">
            <AlertCircle size={18} className="modal-icon-accent" />
            <span>Core Engineering Challenges</span>
          </h3>
          <ul className="modal-list">
            {project.challenges.map((c, idx) => (
              <li key={idx} className="modal-list-item">{c}</li>
            ))}
          </ul>
        </div>

        {/* Architectural Solution */}
        <div className="modal-section">
          <h3 className="modal-section-title">
            <Cpu size={18} className="modal-icon-accent" />
            <span>Architecture & Technical Implementation</span>
          </h3>
          <ul className="modal-list">
            {project.architecture.map((a, idx) => (
              <li key={idx} className="modal-list-item">{a}</li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="modal-section">
          <h3 className="modal-section-title">
            <Layers size={18} className="modal-icon-accent" />
            <span>Technologies Deployed</span>
          </h3>
          <div className="modal-stack-wrap">
            {project.stack.map((t, idx) => (
              <span key={idx} className="project-stack-badge">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
