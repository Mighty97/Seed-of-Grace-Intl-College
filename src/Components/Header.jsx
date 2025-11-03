import React, { useState, useEffect } from 'react';
import './Header.css'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  return (
    <>
      

      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo-section">
            <div className="logo">ES</div>
            <span className="brand-name">Elite School</span>
          </div>

          <button 
            className="mobile-menu-btn" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>

          <nav className={`nav-container ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="#home" className="nav-link">Home</a>
              </li>

              <li className="nav-item">
                <div 
                  className="nav-link" 
                  onClick={() => toggleDropdown('about')}
                >
                  About Us
                  <span className={`dropdown-icon ${openDropdown === 'about' ? 'open' : ''}`}>▼</span>
                </div>
                <div className={`dropdown-menu ${openDropdown === 'about' ? 'open' : ''}`}>
                  <a href="#school-facility" className="dropdown-item">School Facility</a>
                  <a href="#founder-message" className="dropdown-item">Founder/Chairman Message</a>
                  <a href="#school-hostel" className="dropdown-item">School Hostel</a>
                </div>
              </li>

              <li className="nav-item">
                <div 
                  className="nav-link" 
                  onClick={() => toggleDropdown('curriculum')}
                >
                  Curriculum
                  <span className={`dropdown-icon ${openDropdown === 'curriculum' ? 'open' : ''}`}>▼</span>
                </div>
                <div className={`dropdown-menu ${openDropdown === 'curriculum' ? 'open' : ''}`}>
                  <a href="#co-curricular" className="dropdown-item">Co-Curricular</a>
                </div>
              </li>

              <li className="nav-item">
                <div 
                  className="nav-link" 
                  onClick={() => toggleDropdown('admission')}
                >
                  Admission
                  <span className={`dropdown-icon ${openDropdown === 'admission' ? 'open' : ''}`}>▼</span>
                </div>
                <div className={`dropdown-menu ${openDropdown === 'admission' ? 'open' : ''}`}>
                  <a href="#admission-criteria" className="dropdown-item">Admission Criteria</a>
                  <a href="#application-form" className="dropdown-item">Application Form</a>
                </div>
              </li>

              <li className="nav-item">
                <a href="#e-portal" className="nav-link">E-Portal</a>
              </li>

              <li className="nav-item">
                <a href="#blog" className="nav-link">Blog</a>
              </li>

              <li className="nav-item">
                <a href="#gallery" className="nav-link">Gallery</a>
              </li>

              <li className="nav-item">
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul>

            <div className="header-buttons">
              <a href="#apply" className="btn btn-primary">Apply Now</a>
              <a href="#portal" className="btn btn-secondary">E-Portal</a>
            </div>
          </nav>
        </div>
      </header>

      <div style={{ padding: '2rem', background: '#f5f5f5', minHeight: '100vh' }}>
        <h1 style={{ textAlign: 'center', color: '#0a1628', marginBottom: '2rem' }}>Welcome to Elite School</h1>
        <p style={{ textAlign: 'center', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
          This is a demo content area. The header above features a responsive navigation system with dropdowns, 
          smooth animations, and a mobile-friendly hamburger menu. Scroll down to see the sticky header effect.
        </p>
        <div style={{ height: '150vh' }}></div>
      </div>
    </>
  );
};


