import React, { useState } from 'react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

  const handleViewCert = (cert) => {
    setActiveCert(cert);
  };

  const closeCertModal = () => {
    setActiveCert(null);
  };

  return (
    <section id="certifications" className="section-padding certifications-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <i className="fa-solid fa-award" aria-hidden="true"></i>
            Certifications & Training
          </span>
          <h2 className="section-title">
            Academic & Professional <span className="text-gradient">Credentials</span>
          </h2>
          <p className="section-description">
            Accredited course completions, skill assessments, and continuous technical certifications.
          </p>
        </div>

        {/* Timeline Layout for Desktop / Stacked for Mobile */}
        <div className="cert-timeline-container">
          <div className="timeline-center-line" aria-hidden="true"></div>

          {certificationsData.map((cert, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={cert.id} 
                className={`timeline-item ${isEven ? 'item-left' : 'item-right'}`}
              >
                {/* Timeline Center Node */}
                <div className="timeline-node">
                  <div className="node-dot">
                    <i className={cert.icon} aria-hidden="true"></i>
                  </div>
                </div>

                {/* Timeline Card Content */}
                <div className="timeline-card glass-card">
                  <div className="cert-card-header">
                    <span className="cert-org-badge">
                      <i className="fa-solid fa-building-columns" aria-hidden="true"></i>
                      {cert.organization}
                    </span>
                    <span className="cert-status-badge">
                      <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
                      Verified
                    </span>
                  </div>

                  <h3 className="cert-card-title">{cert.title}</h3>
                  <p className="cert-card-meta">
                    <span className="cert-meta-item">
                      <i className="fa-regular fa-calendar-check" aria-hidden="true"></i>
                      Certified Completion
                    </span>
                    <span className="cert-meta-item">
                      <i className="fa-solid fa-shield-halved" aria-hidden="true"></i>
                      {cert.status}
                    </span>
                  </p>

                  <div className="cert-card-footer">
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm cert-view-btn"
                      onClick={() => handleViewCert(cert)}
                    >
                      <i className="fa-solid fa-file-lines" aria-hidden="true"></i>
                      <span>View Credential Details</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for Certificate Verification Details */}
      {activeCert && (
        <div className="cert-modal-backdrop" onClick={closeCertModal} role="dialog" aria-modal="true">
          <div className="cert-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-info">
                <span className="cert-org-badge">{activeCert.organization}</span>
                <h4 className="modal-title">{activeCert.title}</h4>
              </div>
              <button 
                type="button" 
                className="modal-close-btn" 
                onClick={closeCertModal}
                aria-label="Close dialog"
              >
                <i className="fa-solid fa-xmark" aria-hidden="true"></i>
              </button>
            </div>
            
            <div className="modal-body cert-modal-body">
              <div className="cert-modal-icon-banner">
                <i className={`${activeCert.icon} large-cert-icon`} aria-hidden="true"></i>
              </div>
              <p className="cert-statement">
                Official certificate for <strong>{activeCert.title}</strong> issued by <strong>{activeCert.organization}</strong>.
              </p>
              <div className="cert-attributes">
                <div className="cert-attr-row">
                  <span className="attr-label">Issuing Body:</span>
                  <span className="attr-value">{activeCert.organization}</span>
                </div>
                <div className="cert-attr-row">
                  <span className="attr-label">Status:</span>
                  <span className="attr-value highlight-success">{activeCert.status}</span>
                </div>
                <div className="cert-attr-row">
                  <span className="attr-label">Document:</span>
                  <span className="attr-value">Certificate on record (Available upon recruiter verification)</span>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-primary btn-sm" onClick={closeCertModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
