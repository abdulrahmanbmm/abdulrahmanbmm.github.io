import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import ProjectModal from './ProjectModal';

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'mobile', label: 'Mobile (React Native)' },
    { id: 'cloud', label: 'Backend & Cloud' },
    { id: 'realtime', label: 'Real-Time & WebRTC' },
    { id: 'fintech', label: 'FinTech & Payments' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category.includes(activeFilter));

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Case Studies & Architecture</div>
          <h2 className="section-title">
            Featured Works & <span className="section-title-highlight">Production Systems</span>
          </h2>
          <p className="section-description">
            Selected projects demonstrating end-to-end engineering excellence — from real-time WebRTC healthcare platforms to resilient multi-gateway payment backends.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              className={`filter-btn ${activeFilter === opt.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card-header">
                <div className="project-role-badge">
                  <span className="project-company-tag">
                    {project.company}
                  </span>
                  <span className="project-timeline">{project.timeline}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
              </div>

              {/* Impact Metrics */}
              <div className="project-metrics-row">
                {project.impactMetrics.slice(0, 4).map((m, mIdx) => (
                  <div key={mIdx} className="project-metric-item">
                    <span className="project-metric-val">
                      {m.value}
                    </span>
                    <span className="project-metric-lbl">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Stack Chips */}
              <div className="project-stack-wrap">
                {project.stack.slice(0, 5).map((tech, tIdx) => (
                  <span key={tIdx} className="project-stack-badge">
                    {tech}
                  </span>
                ))}
                {project.stack.length > 5 && (
                  <span className="project-stack-badge project-stack-badge-more">
                    +{project.stack.length - 5} more
                  </span>
                )}
              </div>

              {/* Card Footer */}
              <div className="project-card-footer">
                <span className="project-role-label">
                  Role: <strong>{project.role}</strong>
                </span>
                <button
                  className="btn-inspect"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Inspect ${project.title} architecture`}
                >
                  <span>Inspect Architecture</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Deep-Dive */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
