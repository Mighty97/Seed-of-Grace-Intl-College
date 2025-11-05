import React from 'react';
import './Edupartner.css'

export function LogoScroll() {
  const partners = [
    { name: 'WAEC', abbr: 'WAEC' },
    { name: 'NECO', abbr: 'NECO' },
    { name: 'IELTS', abbr: 'IELTS' },
    { name: 'IJMB', abbr: 'IJMB' },
    { name: 'JUPEB', abbr: 'JUPEB' },
    { name: 'British Council', abbr: 'BC' },
    { name: 'Cambridge International', abbr: 'CIE' }
  ];

  return (
    <>
    
      <section className="logo-scroll-section">
        <div className="floating-icon icon-1">🎓</div>
        <div className="floating-icon icon-2">📚</div>
        <div className="floating-icon icon-3">🏆</div>

        <div className="logo-scroll-header">
          <div className="logo-scroll-label">Our Accreditations & Partners</div>
          <h2 className="logo-scroll-title">Recognized Excellence</h2>
        </div>

        <div className="logo-scroll-wrapper">
          <div className="logo-scroll-track">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div key={`first-${index}`} className="logo-item">
                <div className="logo-badge">PARTNER</div>
                <div className="logo-abbr">{partner.abbr}</div>
                <div className="logo-name">{partner.name}</div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div key={`second-${index}`} className="logo-item">
                <div className="logo-badge">PARTNER</div>
                <div className="logo-abbr">{partner.abbr}</div>
                <div className="logo-name">{partner.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
