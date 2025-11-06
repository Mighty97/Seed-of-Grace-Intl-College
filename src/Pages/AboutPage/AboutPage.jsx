import React, { useState } from 'react';
import { Header } from '../../Components/Header'
import { Footer } from '../../components/Footer'
import { Typewriter } from '../../Components/Typewriter'
import './AboutPage.css'

export function AboutPage() {
  const [activeTab, setActiveTab] = useState('welcome');

  const whyChooseUs = [
    {
      icon: '🎓',
      title: 'Academic Excellence',
      description: 'World-class curriculum with experienced educators dedicated to student success.'
    },
    {
      icon: '🏆',
      title: 'Proven Track Record',
      description: 'Consistent outstanding results in national and international examinations.'
    },
    {
      icon: '🌟',
      title: 'Holistic Development',
      description: 'Focus on character building, leadership skills, and personal growth.'
    },
    {
      icon: '🔬',
      title: 'Modern Facilities',
      description: 'State-of-the-art laboratories, libraries, and learning resources.'
    },
    {
      icon: '👥',
      title: 'Small Class Sizes',
      description: 'Personalized attention with low student-teacher ratios.'
    },
    {
      icon: '🌍',
      title: 'Global Standards',
      description: 'International curriculum and partnerships with leading institutions.'
    }
  ];

  const hostelFeatures = [
    {
      icon: '🛏️',
      title: 'Comfortable Accommodation',
      description: 'Spacious, well-ventilated rooms with modern amenities and comfortable bedding.'
    },
    {
      icon: '🍽️',
      title: 'Nutritious Meals',
      description: 'Three balanced meals daily prepared by professional chefs with dietary considerations.'
    },
    {
      icon: '📚',
      title: 'Study Facilities',
      description: 'Dedicated study rooms and common areas with proper lighting and quiet zones.'
    },
    {
      icon: '🏥',
      title: '24/7 Healthcare',
      description: 'On-site medical facility with qualified nurses and regular doctor visits.'
    },
    {
      icon: '🔒',
      title: 'Security & Safety',
      description: 'Round-the-clock security personnel and monitored surveillance systems.'
    },
    {
      icon: '🎯',
      title: 'Supervised Activities',
      description: 'Trained hostel wardens and organized recreational activities for students.'
    }
  ];

  return (
    <>
    <title>SGIC | About Us</title>
     <Header />
     
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-content">
            <div className="hero-badge">📚 ABOUT US</div>
            <h1 className="hero-title">
              Welcome to <span>SGIC</span>
            </h1>
            <p className="hero-subtitle">
              Empowering minds, shaping futures. Discover our journey of excellence 
              in education and commitment to developing tomorrow's leaders.
            </p>
          </div>
        </section>
        <Typewriter />
        {/* Navigation Tabs */}
        <nav className="page-nav">
          <div className="nav-container">
            <button 
              className={`nav-tab ${activeTab === 'welcome' ? 'active' : ''}`}
              onClick={() => setActiveTab('welcome')}
            >
              Welcome & Why Choose Us
            </button>
            <button 
              className={`nav-tab ${activeTab === 'leadership' ? 'active' : ''}`}
              onClick={() => setActiveTab('leadership')}
            >
              Founder & Chairman
            </button>
            <button 
              className={`nav-tab ${activeTab === 'hostel' ? 'active' : ''}`}
              onClick={() => setActiveTab('hostel')}
            >
              School Hostel
            </button>
          </div>
        </nav>

        {/* Welcome & Why Choose Us Section */}
        {activeTab === 'welcome' && (
          <section className="content-section">
            <div className="welcome-content">
              <h2 className="section-title">Welcome to SGIC</h2>
              <p className="welcome-text">
                At SGIC (Saint Grace International College), we are committed to providing 
                an exceptional educational experience that goes beyond textbooks and classrooms. 
                Our institution stands as a beacon of academic excellence, where students are 
                empowered to discover their passions, develop their talents, and build the 
                foundation for a successful future.
              </p>
              <p className="welcome-text">
                Since our establishment, we have maintained an unwavering focus on holistic 
                education that nurtures not just intellectual growth, but also character 
                development, leadership skills, and social responsibility. Our dedicated 
                faculty, state-of-the-art facilities, and comprehensive curriculum create 
                an environment where every student can thrive and reach their full potential.
              </p>
              <p className="welcome-text">
                We believe that education is the most powerful tool for transformation, 
                and we are honored to be part of each student's journey toward excellence. 
                As we move forward by grace, we continue to set new standards in educational 
                excellence and student achievement.
              </p>
            </div>

            <h2 className="section-title" style={{ marginBottom: '2rem' }}>Why Choose Us</h2>
            <div className="features-grid">
              {whyChooseUs.map((feature, index) => (
                <div key={index} className="feature-card">
                  <span className="feature-icon">{feature.icon}</span>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Leadership Section */}
        {activeTab === 'leadership' && (
          <section className="content-section">
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>Our Leadership</h2>
            <div className="leadership-grid">
              {/* Founder */}
              <div className="leader-card">
                <div className="leader-image-wrapper">
                  <div className="leader-badge">FOUNDER</div>
                  <div className="leader-image">👨‍💼</div>
                </div>
                <div className="leader-content">
                  <h3 className="leader-name">Dr. John Idowu</h3>
                  <p className="leader-title">Founder & Visionary</p>
                  <p className="leader-speech">
                    "When I founded SGIC, my vision was clear: to create an institution 
                    that would not just educate minds, but transform lives. Education is 
                    the greatest gift we can give to our children, and I am humbled to 
                    see how our students have grown into leaders, innovators, and change-makers.
                  </p>
                  <p className="leader-speech">
                    Our commitment has always been to provide world-class education 
                    accessible to all, where every child is valued, nurtured, and given 
                    the opportunity to excel. As we continue to grow, we remain steadfast 
                    in our mission to shape futures and build a better tomorrow."
                  </p>
                  <div className="leader-quote">
                    "Excellence is not an act, but a habit we instill in every student."
                  </div>
                </div>
              </div>

              {/* Chairman */}
              <div className="leader-card">
                <div className="leader-image-wrapper">
                  <div className="leader-badge">CHAIRMAN</div>
                  <div className="leader-image">👨‍💼</div>
                </div>
                <div className="leader-content">
                  <h3 className="leader-name">Rev'd (Mrs) Mary Idowu</h3>
                  <p className="leader-title">Chairman, Board of Trustees</p>
                  <p className="leader-speech">
                    "As Chairman of SGIC, I am privileged to work with an exceptional 
                    team of educators and administrators who share our passion for 
                    excellence. Our school has consistently demonstrated that with the 
                    right environment, guidance, and resources, every student can achieve 
                    greatness.
                  </p>
                  <p className="leader-speech">
                    We are committed to maintaining the highest standards in education 
                    while ensuring our institution remains innovative and responsive to 
                    the changing needs of our society. Our investment in facilities, 
                    technology, and human resources reflects our dedication to providing 
                    nothing but the best for our students."
                  </p>
                  <div className="leader-quote">
                    "Investing in education is investing in the future of our nation."
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Hostel Section */}
        {activeTab === 'hostel' && (
          <section className="content-section">
            <div className="hostel-intro">
              <h2>Our <span>School Hostel</span></h2>
              <p>
                Experience a home away from home with our world-class boarding facilities. 
                Our hostel provides a safe, comfortable, and nurturing environment where 
                students can focus on their studies while developing independence and 
                life skills under proper supervision.
              </p>
            </div>

            <div className="hostel-features">
              {hostelFeatures.map((feature, index) => (
                <div key={index} className="hostel-card">
                  <span className="hostel-icon">{feature.icon}</span>
                  <div className="hostel-card-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </>
  );
};


