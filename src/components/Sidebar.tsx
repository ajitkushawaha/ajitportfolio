'use client'

import React, { useState } from 'react'
import { 
  Mail, 
  Phone, 
  Calendar, 
  MapPin, 
  ChevronDown,
  Linkedin,
  Github,
  Globe,
  MessageCircle
} from 'lucide-react'

export default function Sidebar() {
  const [showContacts, setShowContacts] = useState(true)

  return (
    <aside className={`sidebar ${showContacts ? 'active' : ''}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img 
            src="https://avatars.githubusercontent.com/u/107255611?v=4"
            alt="Ajit Kushwaha - React and MERN Stack Developer" 
            width="80" 
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Ajit Kushwaha">Ajit Kushwaha</h1>
          <p className="title">React  Developer</p>
        </div>

        <button 
          className="info_more-btn" 
          onClick={() => setShowContacts(!showContacts)}
        >
          <span>{showContacts ? 'Hide Contacts' : 'Show Contacts'}</span>
          <ChevronDown size={16} />
        </button>
      </div>

      <div className={`sidebar-info_more ${showContacts ? 'active' : ''}`}>
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <Mail size={20} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:akk3311600@gmail.com" className="contact-link">
                akk3311600@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <Phone size={20} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+917617028576" className="contact-link">
                +91 7617028576
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <Calendar size={20} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1999-06-15">June 15, 1999</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <MapPin size={20} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Ahmedabad, Gujarat, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a 
              href="https://www.linkedin.com/in/ajju-kushwaha77/" 
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
          </li>

          <li className="social-item">
            <a 
              href="https://github.com/ajitkushawaha" 
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
          </li>

          <li className="social-item">
            <a 
              href="https://ajitkushawaha.github.io" 
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe size={20} />
            </a>
          </li>

          <li className="social-item">
            <a 
              href="https://wa.me/7617028576?text=Hello%20there!%20I%20would%20like%20to%20connect%20with%20you."
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
            </a>
          </li>
        </ul>
      </div>
      <div className='brand-container'>
        <p className="brand">ajitReact.in</p>
      </div>

    </aside>
  )
}
