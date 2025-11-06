import React, { useEffect, useRef } from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import Staff1 from '../../assets/images/staff001.jpg'
import Staff2 from '../../assets/images/staff002.jpg'
import Staff3 from '../../assets/images/staff003.jpg'
import Staff4 from '../../assets/images/staff004.jpg'
import Staff5 from '../../assets/images/staff005.jpg'
import Staff6 from '../../assets/images/staff006.jpg'
import Staff7 from '../../assets/images/staff007.jpg'
import Staff8 from '../../assets/images/staff008.jpg'
import Staff9 from '../../assets/images/staff009.jpg'
import Staff10 from '../../assets/images/staff010.jpg'
import Staff11 from '../../assets/images/staff011.jpg'
import './Staff.css'

export function Staff() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1;

    const autoScroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(autoScroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  const mainStaff = [
    {
      id: 1,
      name: "Mr Oluwaseun Kuforiji",
      position: "College Accountant",
      image: Staff6,
      email: "seun@sgic.com",
      phone: "+1 234 567 8900"
    },
    {
      id: 2,
      name: "Pst. Mayowa Olubude",
      position: "Principal",
      image: Staff11,
      email: "principal@sgic.com",
      phone: "+1 234 567 8901"
    },
    {
      id: 3,
      name: "Mr Peter Obaaro",
      position: "Director of Works",
      image: Staff8,
      email: "peter@sgic.com",
      phone: "+1 234 567 8902"
    }
  ];

  const otherStaff = [
    {
      id: 4,
      name: "Miss Rhoda",
      image: Staff2
    },
    {
      id: 5,
      name: "Mr Felix Adebayo",
      image: Staff4
    },
    {
      id: 6,
      name: "Mrs. Tosin Olubude",
      image: Staff1
    },
    {
      id: 7,
      name: "Mr Bamidele Obende",
      image: Staff3
    },
    {
      id: 8,
      name: "Mrs. Funmilayo Ayo-Dada",
      image: Staff5
    },
    {
      id: 9,
      name: "Mr David Odewoye",
      image: Staff7
    },
    {
      id: 10,
      name: "Miss Faith Olajide",
      image: Staff9
    },
    {
      id: 11,
      name: "Mr Olusola Awolusi",
      image: Staff10
    }
  ];

  return (
    <>
    

      <section className="staff-section">
        <div className="staff-container">
          <div className="staff-header">
            <h2 className="staff-title">Meet Our Staff</h2>
            <p className="staff-subtitle">Dedicated professionals committed to excellence</p>
          </div>

          {/* Main Staff - 3 Big Cards */}
          <div className="main-staff-grid">
            {mainStaff.map((staff) => (
              <div key={staff.id} className="main-staff-card">
                <div className="main-staff-image-wrapper">
                  <img 
                    src={staff.image} 
                    alt={staff.name} 
                    className="main-staff-image"
                  />
                  <div className="main-staff-overlay">
                    <div className="staff-social">
                      <div className="social-icon">
                        <Mail size={16} />
                      </div>
                      <div className="social-icon">
                        <Phone size={16} />
                      </div>
                      <div className="social-icon">
                        <Linkedin size={16} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-staff-info">
                  <h3 className="main-staff-name">{staff.name}</h3>
                  <p className="main-staff-position">{staff.position}</p>
                  <div className="main-staff-contact">
                    <div className="contact-item">
                      <Mail size={14} />
                      <span>{staff.email}</span>
                    </div>
                    <div className="contact-item">
                      <Phone size={14} />
                      <span>{staff.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section Divider */}
          <div className="section-divider">
            <h3 className="divider-title">Our Team</h3>
            <div className="divider-line"></div>
          </div>

          {/* Other Staff - Auto Scrolling */}
          <div className="other-staff-section">
            <div className="scroll-container">
              <div className="scroll-wrapper" ref={scrollRef}>
                <div className="scroll-content">
                  {[...otherStaff, ...otherStaff].map((staff, index) => (
                    <div key={`${staff.id}-${index}`} className="other-staff-card">
                      <div className="other-staff-image-wrapper">
                        <img 
                          src={staff.image} 
                          alt={staff.name} 
                          className="other-staff-image"
                        />
                        <div className="other-staff-name-overlay">
                          <div className="other-staff-name">{staff.name}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


