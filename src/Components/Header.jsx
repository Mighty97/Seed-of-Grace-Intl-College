import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import Logo from '../assets/images/logo.png'
import './Header.css';

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
            <Link to='/' ><img className="logo" src={Logo} alt="" /></Link>
            
            <div className='brand-info' >
              <span className="brand-name">Seed of Grace</span>
              <span className="brand-name-two">International College</span>
            </div>
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
                <Link to="/" className="nav-link">Home</Link>
              </li>

              <li className="nav-item"><Link to='/about' >
                <div 
                  className="nav-link" 
                  onClick={() => toggleDropdown('about')}
                >About Us
                  <span className={`dropdown-icon ${openDropdown === 'about' ? 'open' : ''}`}>▼</span>
                </div></Link>
                <div className={`dropdown-menu ${openDropdown === 'about' ? 'open' : ''}`}>
                  <a href="#school-facility" className="dropdown-item">School Facility</a>
                  <a href="#founder-message" className="dropdown-item">Founder/Chairman Message</a>
                  <a href="#school-hostel" className="dropdown-item">School Hostel</a>
                </div>
              </li>

              <li className="nav-item"><Link to='/curriculum' >
                <div 
                  className="nav-link" 
                  onClick={() => toggleDropdown('curriculum')}
                >
                  Curriculum
                  <span className={`dropdown-icon ${openDropdown === 'curriculum' ? 'open' : ''}`}>▼</span>
                </div></Link>
                <div className={`dropdown-menu ${openDropdown === 'curriculum' ? 'open' : ''}`}>
                  <a href="#co-curricular" className="dropdown-item">Co-Curricular</a>
                </div>
              </li>

              <li className="nav-item"><Link to='/admission'>
                <div 
                  className="nav-link" 
                  onClick={() => toggleDropdown('admission')}
                >
                  Admission
                  <span className={`dropdown-icon ${openDropdown === 'admission' ? 'open' : ''}`}>▼</span>
                </div></Link>
                <div className={`dropdown-menu ${openDropdown === 'admission' ? 'open' : ''}`}>
                  <a href="#admission-criteria" className="dropdown-item">Admission Criteria</a>
                  <a href="#application-form" className="dropdown-item">Application Form</a>
                </div>
              </li>

              <li className="nav-item">
                <Link to="/portal" className="nav-link">E-Portal</Link>
              </li>

              <li className="nav-item">
                <Link to="/blog" className="nav-link">Blog</Link>
              </li>

              <li className="nav-item">
                <Link to="/gallery" className="nav-link">Gallery</Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>

            <div className="header-buttons">
              <Link to="/admission" className="btn btn-primary">Apply Now</Link>
              <Link to="/portal" className="btn btn-secondary">E-Portal</Link>
            </div>
          </nav>
        </div>
      </header>

    </>
  );
};


