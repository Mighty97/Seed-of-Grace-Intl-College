import React from 'react';
import PrincipalImage from '../../../public/images/principal.jpg'
import './Principal.css'

export function Principal() {
  return (
    <>
   
      <section className="principal-admission-section">
        <div className="section-container">
          {/* Principal Column */}
          <div className="principal-column">
            <div className="principal-image-container">
              <div className="principal-image-wrapper">
                <div className="principal-badge">PRINCIPAL</div>
                <img 
                  src={PrincipalImage}
                  alt="Principal"
                  className="principal-image"
                />
              </div>
            </div>

            <div className="principal-info">
              <h2 className="principal-name">Pst. Mayowa Olubude</h2>
              <p className="principal-title">Principal</p>
            </div>

            <h3 className="welcome-title">Principal's Welcome Address</h3>
            
            <div className="welcome-content">
              <p>
                Dear Parents, Students, and Visitors,
              </p>
              <p>
                It is with great pleasure and pride that I welcome you to our esteemed institution. 
                At SGIC, we are committed to providing an exceptional educational experience that 
                nurtures academic excellence, character development, and holistic growth.
              </p>
              <p>
                Our dedicated faculty and staff work tirelessly to create a supportive learning 
                environment where every student can discover their potential and achieve their dreams. 
                We believe in fostering critical thinking, creativity, and leadership skills that 
                prepare our students for success in an ever-changing world.
              </p>
              <p>
                Whether you are a prospective parent considering our school for your child or a 
                current member of our community, I encourage you to explore all that we have to offer. 
                Together, we move forward by grace, building a brighter future for our students.
              </p>
            </div>

            <div className="signature">
              <div className="signature-text">Pst. Mayowa Olubude</div>
              <div className="signature-role">Principal, SGIC</div>
            </div>
          </div>

          {/* Admission Column */}
          <div className="admission-column">
            <div className="admission-content">
              <div className="admission-badge">📚 NOW ENROLLING</div>
              
              <h2 className="admission-title">
                Admissions <span>Open</span> for 2025/2026
              </h2>
              
              <p className="admission-description">
                Join our community of learners and experience education that transforms lives. 
                We're accepting applications for the upcoming academic year.
              </p>

              <ul className="admission-features">
                <li>World-class facilities and resources</li>
                <li>Experienced and caring faculty</li>
                <li>Comprehensive curriculum</li>
                <li>Day and boarding options available</li>
                <li>Competitive scholarship opportunities</li>
                <li>Small class sizes for personalized attention</li>
              </ul>

              <div className="admission-footer">
                <button className="apply-btn" onClick={() => window.location.href = '#apply'}>
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


