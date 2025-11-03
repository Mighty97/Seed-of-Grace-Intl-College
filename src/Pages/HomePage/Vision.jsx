import React, { useState } from 'react';
import './Vision.css'

export function Vision() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
    
      <section className="three-column-section">
        <div className="section-container">
          {/* Column 1: Mission & Vision Flipping Card */}
          <div className="column">
            <div className="flip-container" onClick={handleFlip}>
              <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
                {/* Front Side - Mission */}
                <div className="flip-side flip-front">
                  <span className="flip-icon">🎯</span>
                  <h3 className="flip-title">Our Mission</h3>
                  <div className="flip-content">
                    <p>
                      To provide a transformative educational experience that empowers students 
                      to become critical thinkers, compassionate leaders, and lifelong learners 
                      who positively impact their communities and the world.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                      We are committed to fostering academic excellence, character development, 
                      and holistic growth in a nurturing environment that celebrates diversity 
                      and promotes innovation.
                    </p>
                  </div>
                  <div className="flip-indicator">
                    <span>Click to see our Vision</span>
                    <span className="flip-arrow">→</span>
                  </div>
                </div>

                {/* Back Side - Vision */}
                <div className="flip-side flip-back">
                  <span className="flip-icon">🌟</span>
                  <h3 className="flip-title">Our Vision</h3>
                  <div className="flip-content">
                    <p>
                      To be a leading institution recognized for excellence in education, 
                      where every student discovers their unique potential and develops the 
                      skills, values, and confidence needed to thrive in a rapidly changing world.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                      We envision a community where innovation meets tradition, and where 
                      students are prepared not just for academic success, but for meaningful 
                      lives of purpose and service.
                    </p>
                  </div>
                  <div className="flip-indicator">
                    <span className="flip-arrow">←</span>
                    <span>Click to see our Mission</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Goals */}
          <div className="column goal-column">
            <span className="goal-icon">🏆</span>
            <h3 className="goal-title">Our Goals</h3>
            <ul className="goal-list">
              <li className="goal-item">
                Deliver exceptional academic programs that challenge and inspire students 
                to reach their full potential
              </li>
              <li className="goal-item">
                Cultivate a culture of innovation, creativity, and critical thinking 
                across all disciplines
              </li>
              <li className="goal-item">
                Develop strong character, integrity, and social responsibility in 
                every student
              </li>
              <li className="goal-item">
                Foster a safe, inclusive, and supportive learning environment that 
                celebrates diversity
              </li>
              <li className="goal-item">
                Prepare students for success in higher education and future careers 
                through comprehensive guidance
              </li>
            </ul>
          </div>

          {/* Column 3: Student of the Week */}
          <div className="column student-column">
            <div className="student-image-wrapper">
              <div className="student-badge">⭐ STAR STUDENT</div>
              <div className="student-image">👩‍🎓</div>
            </div>
            <div className="student-info">
              <div className="student-label">Student of the Week</div>
              <h3 className="student-name">Sarah Johnson</h3>
              <p className="student-class">Grade 10A - Science Stream</p>
              <p className="student-description">
                Sarah has demonstrated exceptional dedication to her studies and exemplary 
                leadership qualities. Her outstanding performance in the recent science 
                competition and her tireless work as class representative have made her 
                a role model for her peers. She consistently goes above and beyond in helping 
                her classmates and contributing to school activities.
              </p>
              <div className="student-achievements">
                <span className="achievement-badge">🏅 Top Performer</span>
                <span className="achievement-badge">👥 Team Leader</span>
                <span className="achievement-badge">🌟 Excellence Award</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


