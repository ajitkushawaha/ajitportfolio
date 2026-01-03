'use client'

import React, { useState, useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Resume from '@/components/Resume'
import Portfolio from '@/components/Portfolio'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import TestimonialModal from '@/components/TestimonialModal'
import InstallButton from '@/components/InstallButton'
import ThemeToggle from '@/components/ThemeToggle'
import KeyboardShortcuts from '@/components/KeyboardShortcuts'
import ScrollToTop from '@/components/ScrollToTop'

interface Testimonial {
  name: string
  role: string
  avatar: string
  text: string
  date: string
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null)

  // Load active section from localStorage on mount
  useEffect(() => {
    const sections = ['about', 'resume', 'portfolio', 'blog', 'contact']
    const savedSection = localStorage.getItem('activeSection')
    if (savedSection && sections.includes(savedSection)) {
      setActiveSection(savedSection)
    }
  }, [])

  const handleNavClick = (section: string) => {
    setActiveSection(section)
    // Save to localStorage
    localStorage.setItem('activeSection', section)
    
    // Smooth scroll to section
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }
  }

  const handleTestimonialClick = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedTestimonial(null)
  }

  return (
    <main>
      <ThemeToggle />
      <KeyboardShortcuts />
      <ScrollToTop />
      
      <Sidebar />

      <div className="main-content">
        <Navbar activeSection={activeSection} onNavClick={handleNavClick} />
        
        <About 
          isActive={activeSection === 'about'} 
          onTestimonialClick={handleTestimonialClick} 
        />
        
        <Resume isActive={activeSection === 'resume'} />
        
        <Portfolio isActive={activeSection === 'portfolio'} />
        
        <Blog isActive={activeSection === 'blog'} />
        
        <Contact isActive={activeSection === 'contact'} />
      </div>

      <TestimonialModal 
        isOpen={modalOpen} 
        testimonial={selectedTestimonial} 
        onClose={closeModal} 
      />
      
      <InstallButton />
      
      <div id="toast">Ajit&apos;s Profile is available for installation!</div>
    </main>
  )
}
