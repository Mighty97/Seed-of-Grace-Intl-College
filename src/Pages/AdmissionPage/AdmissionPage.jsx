import React, { useState } from 'react';
import './AdmissionPage.css'

export function AdmissionPage() {
  const [activePage, setActivePage] = useState('criteria');
  const [formData, setFormData] = useState({
    studentFirstName: '',
    studentLastName: '',
    dateOfBirth: '',
    gender: '',
    gradeApplying: '',
    previousSchool: '',
    parentFirstName: '',
    parentLastName: '',
    relationship: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    medicalConditions: '',
    additionalInfo: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        setFormStatus('');
        setActivePage('criteria');
        setFormData({
          studentFirstName: '',
          studentLastName: '',
          dateOfBirth: '',
          gender: '',
          gradeApplying: '',
          previousSchool: '',
          parentFirstName: '',
          parentLastName: '',
          relationship: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          medicalConditions: '',
          additionalInfo: ''
        });
      }, 3000);
    }, 2000);
  };

  const admissionCriteria = [
    {
      icon: '📝',
      title: 'Age Requirements',
      items: [
        'JSS 1: 10-12 years old',
        'SSS 1: 13-15 years old',
        'Birth certificate or age declaration required'
      ]
    },
    {
      icon: '📚',
      title: 'Academic Requirements',
      items: [
        'Previous school report cards',
        'Entrance examination (for SSS students)',
        'Transfer certificate from previous school'
      ]
    },
    {
      icon: '🏥',
      title: 'Medical Requirements',
      items: [
        'Recent medical certificate',
        'Immunization records',
        'Disclosure of any medical conditions'
      ]
    },
    {
      icon: '💰',
      title: 'Financial Requirements',
      items: [
        'Registration fee payment',
        'First term tuition payment',
        'Evidence of financial capability'
      ]
    },
    {
      icon: '📄',
      title: 'Documentation',
      items: [
        'Birth certificate or sworn affidavit',
        'Passport photographs (4 copies)',
        'Parent/Guardian ID card copies'
      ]
    },
    {
      icon: '👨‍👩‍👧',
      title: 'Parent/Guardian Requirements',
      items: [
        'Valid contact information',
        'Emergency contact details',
        'Consent for school policies'
      ]
    }
  ];

  return (
    <>
   
      <div className="admission-page">
        {/* Hero Section */}
        <section className="admission-hero">
          <div className="hero-content">
            <div className="hero-badge">🎓 JOIN US</div>
            <h1 className="hero-title">
              <span>Admissions</span> 2025/2026
            </h1>
            <p className="hero-subtitle">
              Begin your journey to academic excellence. Apply now and become part 
              of our vibrant learning community.
            </p>
          </div>
        </section>

        {/* Navigation Tabs */}
        <nav className="page-nav">
          <div className="nav-container">
            <button 
              className={`nav-tab ${activePage === 'criteria' ? 'active' : ''}`}
              onClick={() => setActivePage('criteria')}
            >
              Admission Criteria
            </button>
            <button 
              className={`nav-tab ${activePage === 'application' ? 'active' : ''}`}
              onClick={() => setActivePage('application')}
            >
              Application Form
            </button>
          </div>
        </nav>

        {/* Admission Criteria Page */}
        {activePage === 'criteria' && (
          <div className="content-container">
            <div className="criteria-intro">
              <h2 className="criteria-title">Admission Requirements</h2>
              <p className="criteria-subtitle">
                To ensure a smooth admission process, please review the following 
                requirements carefully. All criteria must be met before your application 
                can be processed.
              </p>
            </div>

            <div className="criteria-grid">
              {admissionCriteria.map((criteria, index) => (
                <div key={index} className="criteria-card">
                  <span className="criteria-icon">{criteria.icon}</span>
                  <h3 className="criteria-card-title">{criteria.title}</h3>
                  <ul className="criteria-list">
                    {criteria.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="apply-section">
              <h3>Ready to <span>Apply?</span></h3>
              <p>
                Complete our online application form to start your admission process. 
                Our admissions team will review your application and contact you within 
                48 hours.
              </p>
              <button 
                className="apply-btn"
                onClick={() => setActivePage('application')}
              >
                Apply Now →
              </button>
            </div>
          </div>
        )}

        {/* Application Form Page */}
        {activePage === 'application' && (
          <div className="content-container">
            <div className="form-container">
              <div className="form-header">
                <h2>Application Form</h2>
                <p>Please fill out all required fields accurately</p>
              </div>

              <div>
                {/* Student Information */}
                <div className="form-section">
                  <h3 className="section-title">Student Information</h3>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        First Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="studentFirstName"
                        className="form-input"
                        value={formData.studentFirstName}
                        onChange={handleChange}
                        placeholder="Enter first name"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Last Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="studentLastName"
                        className="form-input"
                        value={formData.studentLastName}
                        onChange={handleChange}
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        Date of Birth <span className="required">*</span>
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        className="form-input"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Gender <span className="required">*</span>
                      </label>
                      <select
                        name="gender"
                        className="form-select"
                        value={formData.gender}
                        onChange={handleChange}
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        Grade Applying For <span className="required">*</span>
                      </label>
                      <select
                        name="gradeApplying"
                        className="form-select"
                        value={formData.gradeApplying}
                        onChange={handleChange}
                      >
                        <option value="">Select grade</option>
                        <option value="jss1">JSS 1</option>
                        <option value="jss2">JSS 2</option>
                        <option value="jss3">JSS 3</option>
                        <option value="sss1">SSS 1</option>
                        <option value="sss2">SSS 2</option>
                        <option value="sss3">SSS 3</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Previous School</label>
                      <input
                        type="text"
                        name="previousSchool"
                        className="form-input"
                        value={formData.previousSchool}
                        onChange={handleChange}
                        placeholder="Enter previous school name"
                      />
                    </div>
                  </div>
                </div>

                {/* Parent/Guardian Information */}
                <div className="form-section">
                  <h3 className="section-title">Parent/Guardian Information</h3>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        First Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="parentFirstName"
                        className="form-input"
                        value={formData.parentFirstName}
                        onChange={handleChange}
                        placeholder="Enter first name"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Last Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="parentLastName"
                        className="form-input"
                        value={formData.parentLastName}
                        onChange={handleChange}
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        Relationship <span className="required">*</span>
                      </label>
                      <select
                        name="relationship"
                        className="form-select"
                        value={formData.relationship}
                        onChange={handleChange}
                      >
                        <option value="">Select relationship</option>
                        <option value="father">Father</option>
                        <option value="mother">Mother</option>
                        <option value="guardian">Guardian</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Email Address <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-input"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        Phone Number <span className="required">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-input"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 800 000 0000"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        City <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        className="form-input"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter city"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group full-width">
                      <label className="form-label">
                        Home Address <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        className="form-input"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter full address"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">
                        State <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="state"
                        className="form-input"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="Enter state"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="form-section">
                  <h3 className="section-title">Additional Information</h3>
                  
                  <div className="form-group full-width">
                    <label className="form-label">Medical Conditions</label>
                    <textarea
                      name="medicalConditions"
                      className="form-textarea"
                      value={formData.medicalConditions}
                      onChange={handleChange}
                      placeholder="Please list any medical conditions or allergies"
                    ></textarea>
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label">Additional Comments</label>
                    <textarea
                      name="additionalInfo"
                      className="form-textarea"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      placeholder="Any additional information you'd like to share"
                    ></textarea>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="form-actions">
                  <button 
                    className="back-btn"
                    onClick={() => setActivePage('criteria')}
                  >
                    ← Back to Criteria
                  </button>
                  <button 
                    className="submit-btn"
                    onClick={handleSubmit}
                    disabled={formStatus === 'sending'}
                  >
                    {formStatus === 'sending' ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>

                {formStatus === 'success' && (
                  <div className="form-status success">
                    ✓ Application submitted successfully! We'll contact you within 48 hours.
                  </div>
                )}
                {formStatus === 'sending' && (
                  <div className="form-status sending">
                    ⏳ Submitting your application...
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};


