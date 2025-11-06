import React, { useState } from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer'
import './CurriculumPage.css'

export function CurriculumPage() {
  const [activeTab, setActiveTab] = useState('junior');

  const juniorSchool = {
    departments: [
      {
        name: 'Languages & Humanities',
        icon: '📚',
        subjects: ['English Language', 'Literature', 'French', 'Social Studies', 'History', 'Religious Studies']
      },
      {
        name: 'Sciences',
        icon: '🔬',
        subjects: ['Basic Science', 'Mathematics', 'Basic Technology', 'Home Economics', 'Agricultural Science']
      },
      {
        name: 'Creative Arts',
        icon: '🎨',
        subjects: ['Fine Arts', 'Music', 'Cultural & Creative Arts', 'Physical Education']
      },
      {
        name: 'Computer Studies',
        icon: '💻',
        subjects: ['Basic Computer Studies', 'ICT', 'Digital Literacy']
      }
    ]
  };

  const seniorSchool = {
    departments: [
      {
        name: 'Sciences',
        icon: '🔬',
        subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Further Mathematics', 'Agricultural Science']
      },
      {
        name: 'Commercial',
        icon: '💼',
        subjects: ['Economics', 'Accounting', 'Commerce', 'Business Studies', 'Financial Accounting']
      },
      {
        name: 'Arts & Humanities',
        icon: '📖',
        subjects: ['Literature in English', 'Government', 'History', 'Christian Religious Studies', 'Islamic Studies', 'Geography']
      },
      {
        name: 'Languages',
        icon: '🗣️',
        subjects: ['English Language', 'French', 'Yoruba', 'Igbo', 'Hausa']
      },
      {
        name: 'Technology',
        icon: '⚙️',
        subjects: ['Technical Drawing', 'Computer Science', 'Data Processing', 'Basic Electronics']
      }
    ]
  };

  const extracurricular = [
    {
      category: 'Sports & Athletics',
      icon: '⚽',
      activities: [
        { name: 'Football', description: 'Inter-house and external competitions' },
        { name: 'Basketball', description: 'Training and tournaments' },
        { name: 'Athletics', description: 'Track and field events' },
        { name: 'Table Tennis', description: 'Individual and team competitions' },
        { name: 'Volleyball', description: 'Indoor and beach volleyball' }
      ]
    },
    {
      category: 'Arts & Culture',
      icon: '🎭',
      activities: [
        { name: 'Drama Club', description: 'Theater productions and performances' },
        { name: 'Music & Choir', description: 'Vocal training and concerts' },
        { name: 'Dance Troupe', description: 'Traditional and contemporary dance' },
        { name: 'Visual Arts', description: 'Painting, drawing, and exhibitions' },
        { name: 'Cultural Studies', description: 'Heritage and traditional festivals' }
      ]
    },
    {
      category: 'Academic Clubs',
      icon: '🧪',
      activities: [
        { name: 'Science Club', description: 'Experiments and science fairs' },
        { name: 'Mathematics Club', description: 'Problem-solving and competitions' },
        { name: 'Debate Society', description: 'Public speaking and debates' },
        { name: 'Literary & Dramatic Society', description: 'Reading and writing workshops' },
        { name: 'Quiz Team', description: 'Academic competitions and quizzes' }
      ]
    },
    {
      category: 'Leadership & Service',
      icon: '🤝',
      activities: [
        { name: 'Prefectorial Board', description: 'Student leadership and governance' },
        { name: 'Community Service', description: 'Outreach and volunteer programs' },
        { name: 'Environmental Club', description: 'Sustainability and green initiatives' },
        { name: 'Red Cross Society', description: 'First aid and health education' },
        { name: 'Peer Mentoring', description: 'Student support and guidance' }
      ]
    },
    {
      category: 'Technology & Innovation',
      icon: '💡',
      activities: [
        { name: 'Coding Club', description: 'Programming and web development' },
        { name: 'Robotics', description: 'Building and programming robots' },
        { name: 'Tech Innovation', description: 'STEM projects and competitions' },
        { name: 'Digital Media', description: 'Photography and video production' }
      ]
    }
  ];

  return (
    <>
     <Header />
      <div className="curriculum-page">
        {/* Hero Section */}
        <section className="curriculum-hero">
          <div className="hero-content">
            <div className="hero-badge">📚 ACADEMIC PROGRAMS</div>
            <h1 className="hero-title">
              Our <span>Curriculum</span>
            </h1>
            <p className="hero-subtitle">
              Comprehensive educational programs designed to nurture academic excellence, 
              critical thinking, and holistic development from junior to senior school.
            </p>
          </div>
        </section>

        {/* Navigation Tabs */}
        <nav className="page-nav">
          <div className="nav-container">
            <button 
              className={`nav-tab ${activeTab === 'junior' ? 'active' : ''}`}
              onClick={() => setActiveTab('junior')}
            >
              Junior School
            </button>
            <button 
              className={`nav-tab ${activeTab === 'senior' ? 'active' : ''}`}
              onClick={() => setActiveTab('senior')}
            >
              Senior School
            </button>
            <button 
              className={`nav-tab ${activeTab === 'extracurricular' ? 'active' : ''}`}
              onClick={() => setActiveTab('extracurricular')}
            >
              Extra-Curricular Activities
            </button>
          </div>
        </nav>

        {/* Junior School Section */}
        {activeTab === 'junior' && (
          <section className="content-section">
            <div className="section-header">
              <h2 className="section-title">Junior School Curriculum</h2>
              <p className="section-subtitle">
                Building strong foundations in core subjects and developing essential 
                learning skills for our young learners (JSS 1 - JSS 3).
              </p>
            </div>

            <div className="departments-grid">
              {juniorSchool.departments.map((dept, index) => (
                <div key={index} className="department-card">
                  <div className="department-header">
                    <div className="dept-icon">{dept.icon}</div>
                    <h3 className="dept-name">{dept.name}</h3>
                  </div>
                  <div className="subjects-list">
                    <div className="subjects-grid">
                      {dept.subjects.map((subject, idx) => (
                        <div key={idx} className="subject-item">
                          {subject}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="info-box">
              <h3>Comprehensive <span>Junior Education</span></h3>
              <p>
                Our junior school curriculum is designed to provide a solid foundation 
                in core academic subjects while fostering creativity, critical thinking, 
                and character development. Students benefit from interactive learning 
                methods, practical experiences, and continuous assessment to ensure 
                thorough understanding and retention.
              </p>
            </div>
          </section>
        )}

        {/* Senior School Section */}
        {activeTab === 'senior' && (
          <section className="content-section">
            <div className="section-header">
              <h2 className="section-title">Senior School Curriculum</h2>
              <p className="section-subtitle">
                Advanced learning programs preparing students for WAEC, NECO, and 
                university entrance examinations (SSS 1 - SSS 3).
              </p>
            </div>

            <div className="departments-grid">
              {seniorSchool.departments.map((dept, index) => (
                <div key={index} className="department-card">
                  <div className="department-header">
                    <div className="dept-icon">{dept.icon}</div>
                    <h3 className="dept-name">{dept.name}</h3>
                  </div>
                  <div className="subjects-list">
                    <div className="subjects-grid">
                      {dept.subjects.map((subject, idx) => (
                        <div key={idx} className="subject-item">
                          {subject}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="info-box">
              <h3>Excellence in <span>Senior Education</span></h3>
              <p>
                Our senior school offers specialized departments allowing students to 
                focus on their areas of interest and career aspirations. With 
                experienced faculty, modern laboratories, and comprehensive resources, 
                we prepare students for outstanding performance in external examinations 
                and successful admission to top universities.
              </p>
            </div>
          </section>
        )}

        {/* Extra-Curricular Section */}
        {activeTab === 'extracurricular' && (
          <section className="content-section">
            <div className="section-header">
              <h2 className="section-title">Extra-Curricular Activities</h2>
              <p className="section-subtitle">
                Beyond academics, we offer diverse activities to develop talents, 
                leadership skills, and well-rounded personalities.
              </p>
            </div>

            <div className="activities-container">
              {extracurricular.map((category, index) => (
                <div key={index} className="activity-category">
                  <div className="category-header">
                    <div className="category-icon">{category.icon}</div>
                    <h3 className="category-name">{category.category}</h3>
                  </div>
                  <div className="activities-grid">
                    {category.activities.map((activity, idx) => (
                      <div key={idx} className="activity-card">
                        <h4 className="activity-name">{activity.name}</h4>
                        <p className="activity-description">{activity.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="info-box">
              <h3>Holistic <span>Development</span></h3>
              <p>
                We believe education extends beyond the classroom. Our comprehensive 
                extra-curricular program ensures every student discovers their passions, 
                develops new skills, and builds confidence through diverse activities. 
                From sports to arts, technology to leadership, there's something for 
                everyone to excel and grow.
              </p>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </>
  );
};


