import React, { useState } from 'react';
import './Video.css'

export function Video() {
  const [activePost, setActivePost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Welcome to the New Academic Year 2025/2026",
      date: "October 28, 2025",
      category: "Announcements"
    },
    {
      id: 2,
      title: "SGIC Students Excel in National Science Competition",
      date: "October 25, 2025",
      category: "Achievements"
    },
    {
      id: 3,
      title: "Tips for Effective Study Habits and Time Management",
      date: "October 20, 2025",
      category: "Education"
    },
    {
      id: 4,
      title: "Annual Sports Day: A Day of Excellence and Team Spirit",
      date: "October 15, 2025",
      category: "Events"
    },
    {
      id: 5,
      title: "How to Support Your Child's Learning at Home",
      date: "October 10, 2025",
      category: "Parent Resources"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Parent-Teacher Conference",
      date: "November 15, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Main Hall"
    },
    {
      id: 2,
      title: "Inter-House Drama Competition",
      date: "November 22, 2025",
      time: "2:00 PM",
      location: "School Auditorium"
    },
    {
      id: 3,
      title: "STEM Fair & Exhibition",
      date: "December 5, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Science Laboratory"
    },
    {
      id: 4,
      title: "End of Term Awards Ceremony",
      date: "December 18, 2025",
      time: "11:00 AM",
      location: "Main Hall"
    }
  ];

  return (
    <>
      

      <section className="media-section">
        <div className="media-container">
          {/* Column 1: YouTube Video */}
          <div className="media-column">
            <div className="column-header">
              <span className="column-icon">🎬</span>
              <h3 className="column-title">Featured Video</h3>
            </div>
            <div className="video-content">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="School Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-info">
                <h4 className="video-title">Welcome to SGIC - A Day in the Life</h4>
                <p className="video-description">
                  Experience a day at our school through the eyes of our students. 
                  Discover our state-of-the-art facilities, engaging classrooms, 
                  and vibrant school community.
                </p>
                <div className="video-stats">
                  <span className="video-stat">
                    <span>👁️</span>
                    <span>12.5K views</span>
                  </span>
                  <span className="video-stat">
                    <span>👍</span>
                    <span>890 likes</span>
                  </span>
                  <span className="video-stat">
                    <span>📅</span>
                    <span>2 weeks ago</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Latest Blog Posts */}
          <div className="media-column">
            <div className="column-header">
              <span className="column-icon">📝</span>
              <h3 className="column-title">Latest Posts</h3>
            </div>
            <div className="posts-content">
              <ul className="posts-list">
                {blogPosts.map((post) => (
                  <li
                    key={post.id}
                    className="post-item"
                    onClick={() => setActivePost(post.id)}
                  >
                    <span className="post-category">{post.category}</span>
                    <h4 className="post-title">{post.title}</h4>
                    <div className="post-date">
                      <span>📅</span>
                      <span>{post.date}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="view-all-posts">
                <button className="view-all-btn" onClick={() => window.location.href = '#blog'}>
                  View All Posts →
                </button>
              </div>
            </div>
          </div>

          {/* Column 3: Upcoming Events */}
          <div className="media-column">
            <div className="column-header">
              <span className="column-icon">📅</span>
              <h3 className="column-title">Upcoming Events</h3>
            </div>
            <div className="events-content">
              {upcomingEvents.length > 0 ? (
                <div className="events-list">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="event-card">
                      <span className="event-date-badge">{event.date}</span>
                      <h4 className="event-title">{event.title}</h4>
                      <div className="event-details">
                        <div className="event-detail">
                          <span className="event-icon">⏰</span>
                          <span>{event.time}</span>
                        </div>
                        <div className="event-detail">
                          <span className="event-icon">📍</span>
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-events">
                  <p>No upcoming events at the moment.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

