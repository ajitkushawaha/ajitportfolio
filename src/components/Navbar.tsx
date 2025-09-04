'use client'

import React from 'react'

interface NavbarProps {
  activeSection: string
  onNavClick: (section: string) => void
}

export default function Navbar({ activeSection, onNavClick }: NavbarProps) {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li key={item.id} className="navbar-item">
            <button
              className={`navbar-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => onNavClick(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
