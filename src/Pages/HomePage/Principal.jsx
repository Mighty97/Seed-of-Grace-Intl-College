import React from 'react';
import PrincipalImage from '../../assets/images/principal.jpg'
import PrincipalImageTwo from '../../assets/images/principal2.jpg'
import './Principal.css'


export function Principal() {
  return (
    <>
     
      <section className="principal-admission-wrapper">
        <div className="component-container">
          {/* Principal Column */}
          <div className="principal-column">
            <div className="principal-image-section">
              <img 
                src={PrincipalImage}
                alt="Principal"
                className="principal-image"
              />
              <div className="principal-overlay">
                <div className="principal-badge">PRINCIPAL</div>
                <h2 className="principal-name">Pst. Mayowa Olubude</h2>
                <p className="principal-title">Principal</p>
              </div>
            </div>

            <div className="principal-content">
              <h3 className="welcome-heading">Principal's Welcome Address</h3>
              
              <p className="welcome-text">
                Dear Parents, Students, and Visitors,
              </p>
              
              <p className="welcome-text">
                It is with immense joy and pride that I welcome you to Seed of Grace 
                International College (SGIC). Our institution stands as a beacon of 
                academic excellence, where we are dedicated to nurturing young minds 
                and shaping future leaders.
              </p>
              
              <p className="welcome-text">
                At SGIC, we believe that every student possesses unique talents and 
                potential waiting to be discovered. Our committed faculty and staff 
                work tirelessly to create an environment where learning is not just 
                about acquiring knowledge, but about developing character, critical 
                thinking, and leadership skills.
              </p>
              
              
              <div className="signature-section">
                <img 
                  src={PrincipalImageTwo} 
                  alt="Signature"
                  className="signature-image"
                />
                <div className="signature-text">
                  <div className="signature-name">Pst. Mayowa Olubude</div>
                  <div className="signature-role">Principal, SGIC</div>
                </div>
              </div>
            </div>
          </div>

          {/* Admission Column */}
          <div className="admission-column">
            <div className="admission-content">
              <div className="admission-badge">📚 NOW ENROLLING</div>
              
              <h2 className="admission-title">
                Admissions <span>Open</span>
              </h2>
              
              <p className="admission-session">
                For 2025/2026 Academic Session
              </p>
              
              <p className="admission-description">
                Join our community of learners and experience education that transforms 
                lives. We are currently accepting applications for the upcoming academic 
                session across all levels.
              </p>

              <div className="admission-info-box">
                <div className="info-box-title">📅 Important Dates</div>
                <div className="info-box-content">
                  <strong>Application Deadline:</strong> August 15, 2025<br/>
                  <strong>Entrance Exam:</strong> August 20, 2025<br/>
                  <strong>Resumption Date:</strong> September 9, 2025
                </div>
              </div>

              <ul className="admission-features">
                <li>World-class facilities and resources</li>
                <li>Experienced and dedicated faculty</li>
                <li>Comprehensive academic curriculum</li>
                <li>Day and boarding options available</li>
                <li>Competitive scholarship opportunities</li>
                <li>Small class sizes for personalized attention</li>
                <li>Strong focus on character development</li>
                <li>Excellent extracurricular programs</li>
              </ul>

              <div className="admission-footer">
                <button className="apply-btn" onClick={() => window.location.href = '/admission'}>
                  Apply Now →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};



