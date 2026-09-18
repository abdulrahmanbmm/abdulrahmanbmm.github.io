import React from 'react';

export default function Signature({ variant = 'default', className = '' }) {
  if (variant === 'seal') {
    return (
      <div className={`signature-seal-card ${className}`}>
        <div className="seal-badge-row">
          <div className="seal-badge">
            <span className="seal-dot"></span>
            <span>Software Engineer SIGNATURE</span>
          </div>
          <span className="seal-id">AUTH-AB-2025</span>
        </div>

        <div className="signature-svg-wrapper">
          <svg
            className="signature-svg"
            viewBox="0 0 420 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Abdulrahman Bello Handwritten Signature"
          >
            <defs>
              <linearGradient id="sigGradientGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="35%" stopColor="#818cf8" />
                <stop offset="70%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <filter id="sigGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Cursive 'Abdulrahman' */}
            <path
              className="sig-path-draw"
              d="M 28 85 C 22 62, 38 28, 54 22 C 65 18, 72 26, 68 45 C 62 70, 52 92, 48 95 C 56 80, 72 45, 82 45 C 88 45, 85 58, 80 72 C 77 80, 83 78, 89 68 C 96 55, 102 48, 108 52 C 114 56, 110 68, 106 78 C 115 65, 128 50, 136 54 C 142 58, 138 72, 134 80 C 142 66, 154 52, 162 55 C 168 58, 164 74, 160 82 C 168 68, 178 54, 185 55 C 190 56, 188 68, 184 78 C 192 65, 204 52, 212 55 C 218 58, 214 74, 210 82"
              stroke="url(#sigGradientGold)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#sigGlow)"
            />

            {/* Crossbar on A */}
            <path
              className="sig-path-draw sig-delay-1"
              d="M 36 62 Q 65 58 78 64"
              stroke="url(#sigGradientGold)"
              strokeWidth="2.4"
              strokeLinecap="round"
            />

            {/* Cursive 'Bello' */}
            <path
              className="sig-path-draw sig-delay-2"
              d="M 235 24 C 230 46, 222 75, 218 94 C 226 82, 238 68, 252 68 C 265 68, 272 78, 268 90 C 264 100, 250 102, 238 96 C 248 82, 258 42, 268 28 C 274 20, 282 24, 278 40 C 272 65, 264 88, 260 95 C 270 82, 282 42, 292 28 C 298 20, 306 24, 302 40 C 296 65, 288 88, 284 95 C 294 82, 308 68, 320 70 C 330 72, 332 84, 324 92 C 315 100, 302 96, 305 84"
              stroke="url(#sigGradientGold)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#sigGlow)"
            />

            {/* Top Loop of B */}
            <path
              className="sig-path-draw sig-delay-1"
              d="M 230 28 C 245 22, 262 26, 260 42 C 258 55, 242 58, 230 58"
              stroke="url(#sigGradientGold)"
              strokeWidth="2.4"
              strokeLinecap="round"
            />

            {/* Dynamic Flourish Underline */}
            <path
              className="sig-path-draw sig-delay-3"
              d="M 45 102 C 120 114, 220 112, 330 96 C 365 91, 395 86, 405 88"
              stroke="url(#sigGradientGold)"
              strokeWidth="3.2"
              strokeLinecap="round"
            />

            {/* Trailing Accent Dots */}
            <circle cx="408" cy="88" r="2.8" fill="#fbbf24" className="sig-dot-pulse" />
            <circle cx="415" cy="86" r="1.8" fill="#38bdf8" className="sig-dot-pulse" />
          </svg>
        </div>

        <div className="seal-caption">
          <span className="seal-name">Abdulrahman Bello</span>
          <span className="seal-role">Senior Software Engineer & Systems Architect</span>
        </div>
      </div>
    );
  }

  if (variant === 'closing') {
    return (
      <div className={`signature-closing-block ${className}`}>
        <p className="signature-closing-quote">
          "Architecture isn't just about making code work today. It's about designing digital systems that remain resilient, scalable, and profitable tomorrow."
        </p>

        <div className="signature-svg-wrapper signature-closing-svg">
          <svg
            className="signature-svg"
            viewBox="0 0 420 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sigGradientClosing" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>
            </defs>
            <path
              className="sig-path-draw"
              d="M 28 85 C 22 62, 38 28, 54 22 C 65 18, 72 26, 68 45 C 62 70, 52 92, 48 95 C 56 80, 72 45, 82 45 C 88 45, 85 58, 80 72 C 77 80, 83 78, 89 68 C 96 55, 102 48, 108 52 C 114 56, 110 68, 106 78 C 115 65, 128 50, 136 54 C 142 58, 138 72, 134 80 C 142 66, 154 52, 162 55 C 168 58, 164 74, 160 82 C 168 68, 178 54, 185 55 C 190 56, 188 68, 184 78 C 192 65, 204 52, 212 55 C 218 58, 214 74, 210 82"
              stroke="url(#sigGradientClosing)"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="sig-path-draw sig-delay-1"
              d="M 36 62 Q 65 58 78 64"
              stroke="url(#sigGradientClosing)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              className="sig-path-draw sig-delay-2"
              d="M 235 24 C 230 46, 222 75, 218 94 C 226 82, 238 68, 252 68 C 265 68, 272 78, 268 90 C 264 100, 250 102, 238 96 C 248 82, 258 42, 268 28 C 274 20, 282 24, 278 40 C 272 65, 264 88, 260 95 C 270 82, 282 42, 292 28 C 298 20, 306 24, 302 40 C 296 65, 288 88, 284 95 C 294 82, 308 68, 320 70 C 330 72, 332 84, 324 92 C 315 100, 302 96, 305 84"
              stroke="url(#sigGradientClosing)"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="sig-path-draw sig-delay-1"
              d="M 230 28 C 245 22, 262 26, 260 42 C 258 55, 242 58, 230 58"
              stroke="url(#sigGradientClosing)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              className="sig-path-draw sig-delay-3"
              d="M 45 102 C 120 114, 220 112, 330 96 C 365 91, 395 86, 405 88"
              stroke="url(#sigGradientClosing)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="408" cy="88" r="2.5" fill="#fbbf24" />
          </svg>
        </div>

        <div className="signature-signer-tag">
          <strong>Abdulrahman Bello</strong>
          <span>Senior Software Engineer · Katagum, Nigeria</span>
        </div>
      </div>
    );
  }

  // Default compact hero signature
  return (
    <div className={`signature-hero-badge ${className}`}>
      <span className="signature-hero-label">Signed by the Architect</span>
      <div className="signature-hero-svg-box">
        <svg
          className="signature-svg"
          viewBox="0 0 420 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sigGradientDefault" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="60%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
          <path
            className="sig-path-draw"
            d="M 28 85 C 22 62, 38 28, 54 22 C 65 18, 72 26, 68 45 C 62 70, 52 92, 48 95 C 56 80, 72 45, 82 45 C 88 45, 85 58, 80 72 C 77 80, 83 78, 89 68 C 96 55, 102 48, 108 52 C 114 56, 110 68, 106 78 C 115 65, 128 50, 136 54 C 142 58, 138 72, 134 80 C 142 66, 154 52, 162 55 C 168 58, 164 74, 160 82 C 168 68, 178 54, 185 55 C 190 56, 188 68, 184 78 C 192 65, 204 52, 212 55 C 218 58, 214 74, 210 82"
            stroke="url(#sigGradientDefault)"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="sig-path-draw sig-delay-1"
            d="M 36 62 Q 65 58 78 64"
            stroke="url(#sigGradientDefault)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            className="sig-path-draw sig-delay-2"
            d="M 235 24 C 230 46, 222 75, 218 94 C 226 82, 238 68, 252 68 C 265 68, 272 78, 268 90 C 264 100, 250 102, 238 96 C 248 82, 258 42, 268 28 C 274 20, 282 24, 278 40 C 272 65, 264 88, 260 95 C 270 82, 282 42, 292 28 C 298 20, 306 24, 302 40 C 296 65, 288 88, 284 95 C 294 82, 308 68, 320 70 C 330 72, 332 84, 324 92 C 315 100, 302 96, 305 84"
            stroke="url(#sigGradientDefault)"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="sig-path-draw sig-delay-1"
            d="M 230 28 C 245 22, 262 26, 260 42 C 258 55, 242 58, 230 58"
            stroke="url(#sigGradientDefault)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            className="sig-path-draw sig-delay-3"
            d="M 45 102 C 120 114, 220 112, 330 96 C 365 91, 395 86, 405 88"
            stroke="url(#sigGradientDefault)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <circle cx="408" cy="88" r="2.8" fill="#fbbf24" />
        </svg>
      </div>
      <span className="signature-hero-name">Abdulrahman Bello</span>
    </div>
  );
}
