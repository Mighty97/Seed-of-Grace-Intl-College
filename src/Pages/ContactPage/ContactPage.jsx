import React, { useState } from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import './ContactPage.css'

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
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
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormStatus('');
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      details: 'No. 45, Education Avenue, GRA',
      subDetails: 'Ibadan, Oyo State, Nigeria'
    },
    {
      icon: '📞',
      title: 'Phone Numbers',
      details: '+234 803 456 7890',
      subDetails: '+234 805 123 4567'
    },
    {
      icon: '✉️',
      title: 'Email Address',
      details: 'info@sgic.edu.ng',
      subDetails: 'admissions@sgic.edu.ng'
    },
    {
      icon: '⏰',
      title: 'Working Hours',
      details: 'Mon - Fri: 8:00 AM - 5:00 PM',
      subDetails: 'Sat: 9:00 AM - 2:00 PM'
    }
  ];

  const socialMedia = [
    { name: 'Facebook', icon: 'f', color: '#1877F2', link: '#' },
    { name: 'Twitter', icon: '𝕏', color: '#000000', link: '#' },
    { name: 'Instagram', icon: '📷', color: '#E4405F', link: '#' },
    { name: 'LinkedIn', icon: 'in', color: '#0A66C2', link: '#' },
    { name: 'YouTube', icon: '▶', color: '#FF0000', link: '#' }
  ];

  return (
    <>
     <title>SGIC | Contact Us</title>
<Header />

      <div className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="hero-content">
            <div className="hero-badge">📞 GET IN TOUCH</div>
            <h1 className="hero-title">
              Contact <span>Us</span>
            </h1>
            <p className="hero-subtitle">
              We'd love to hear from you. Reach out to us for inquiries, admissions, 
              or any questions about our institution.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="contact-container">
          {/* Contact Info Cards */}
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-card">
                <span className="info-icon">{info.icon}</span>
                <h3 className="info-title">{info.title}</h3>
                <p className="info-details">{info.details}</p>
                <p className="info-subdetails">{info.subDetails}</p>
              </div>
            ))}
          </div>

          {/* Contact Form and Social Media */}
          <div className="contact-content">
            {/* Contact Form */}
            <div className="form-section">
              <h2 className="form-title">Send us a Message</h2>
              <p className="form-subtitle">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder="+234 800 000 0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Subject *</label>
                  <select
                    name="subject"
                    className="form-select"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="general">General Information</option>
                    <option value="academic">Academic Programs</option>
                    <option value="facilities">Facilities & Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    className="form-textarea"
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {formStatus === 'success' && (
                  <div className="form-status success">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                {formStatus === 'sending' && (
                  <div className="form-status sending">
                    ⏳ Sending your message...
                  </div>
                )}
              </form>
            </div>

            {/* Social Media Section */}
            <div className="social-section">
              <div className="social-card">
                <h3 className="social-title">Connect With Us</h3>
                <p className="social-subtitle">
                  Follow us on social media to stay updated with our latest news, 
                  events, and achievements.
                </p>
                <div className="social-links">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="social-link"
                      style={{ backgroundColor: social.color }}
                      title={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="social-card">
                <h3 className="social-title">Quick Response</h3>
                <p className="social-subtitle">
                  Our admission office is always ready to assist you. Visit us 
                  during working hours or schedule an appointment for a school tour.
                </p>
                <div className="info-details" style={{ marginTop: '1rem' }}>
                  <strong>Response Time:</strong><br/>
                  We typically respond to inquiries within 24 hours during working days.
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="map-container">
            <div className="map-header">
              <h3>📍 Find Us on the Map</h3>
            </div>
            <div className="map-wrapper">
              <div className="map-placeholder">
                <div className="map-icon">🗺️</div>
                <h4>No. 45, Education Avenue, GRA</h4>
                <p>Ibadan, Oyo State, Nigeria</p>
              </div>
              {/* Replace this with actual Google Maps iframe */}
              {/* <iframe 
                src="YOUR_GOOGLE_MAPS_EMBED_URL"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};


