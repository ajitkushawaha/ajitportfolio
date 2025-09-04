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

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null)

  const sections = ['about', 'resume', 'portfolio', 'blog', 'contact']

  const handleNavClick = (section: string) => {
    setActiveSection(section)
  }

  const handleTestimonialClick = (testimonial: any) => {
    setSelectedTestimonial(testimonial)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedTestimonial(null)
  }

  return (
    <main>
      <Sidebar 
        isOpen={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)} 
      />
      
      <div className="main-content">
        <Navbar 
          activeSection={activeSection} 
          onNavClick={handleNavClick} 
        />

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
      
      <div id="toast">Ajit's Profile is available for installation!</div>
    </main>
  )
}
