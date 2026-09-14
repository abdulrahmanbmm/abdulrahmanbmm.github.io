import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Award, Calendar, Maximize2 } from 'lucide-react';

export default function PhotoModal({ isOpen, onClose, photo, photos = [], onSelectPhoto }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && photos.length > 1) {
        navigate(1);
      } else if (e.key === 'ArrowLeft' && photos.length > 1) {
        navigate(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, photo, photos]);

  if (!isOpen || !photo) return null;

  const currentIndex = photos.findIndex(p => p.url === photo.url);

  const navigate = (direction) => {
    if (photos.length <= 1 || !onSelectPhoto) return;
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = photos.length - 1;
    if (newIndex >= photos.length) newIndex = 0;
    onSelectPhoto(photos[newIndex]);
  };

  return (
    <div
      className="modal-backdrop photo-lightbox-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={photo.title || 'Photo Lightbox'}
    >
      <div
        className="photo-lightbox-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="photo-lightbox-header">
          <div className="photo-lightbox-meta">
            {photo.badge && (
              <span className="photo-badge-pill">{photo.badge}</span>
            )}
            {photos.length > 1 && currentIndex !== -1 && (
              <span className="photo-counter-pill">
                {currentIndex + 1} / {photos.length}
              </span>
            )}
          </div>

          <div className="photo-lightbox-actions">
            <a
              href={photo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="photo-btn-icon"
              title="Open full resolution in new tab"
            >
              <ExternalLink size={17} />
            </a>
            <button
              onClick={onClose}
              className="photo-btn-icon photo-btn-close"
              title="Close (Esc)"
              aria-label="Close"
            >
              <X size={19} />
            </button>
          </div>
        </div>

        {/* Main Image Stage with Navigation */}
        <div className="photo-lightbox-stage">
          {photos.length > 1 && (
            <button
              onClick={() => navigate(-1)}
              className="photo-nav-btn photo-nav-prev"
              title="Previous photo (Left arrow)"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="photo-img-wrapper">
            <img
              src={photo.url}
              alt={photo.title || 'Honors photo'}
              className="photo-lightbox-img"
            />
          </div>

          {photos.length > 1 && (
            <button
              onClick={() => navigate(1)}
              className="photo-nav-btn photo-nav-next"
              title="Next photo (Right arrow)"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        {/* Caption & Metadata Footer */}
        <div className="photo-lightbox-footer">
          <div className="photo-footer-title-row">
            <h3 className="photo-footer-title">{photo.title}</h3>
            {photo.date && (
              <span className="photo-footer-date">
                <Calendar size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px' }} />
                {photo.date}
              </span>
            )}
          </div>

          {photo.subtitle && (
            <div className="photo-footer-subtitle">{photo.subtitle}</div>
          )}

          {photo.caption && (
            <p className="photo-footer-caption">{photo.caption}</p>
          )}
        </div>
      </div>
    </div>
  );
}
