import React from 'react';

export default function AmbientBackground() {
  return (
    <div className="ambient-background-layer" aria-hidden="true">
      {/* High-tech blueprint grid overlay */}
      <div className="ambient-grid-overlay"></div>

      {/* Breathing Aurora Glow Orbs */}
      <div className="ambient-orb ambient-orb-1"></div>
      <div className="ambient-orb ambient-orb-2"></div>
      <div className="ambient-orb ambient-orb-3"></div>
      <div className="ambient-orb ambient-orb-4"></div>
    </div>
  );
}
