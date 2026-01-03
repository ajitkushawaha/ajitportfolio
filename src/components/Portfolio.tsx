'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Eye } from 'lucide-react'

interface PortfolioProps {
  isActive: boolean
}

export default function Portfolio({ isActive }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'frontend development', label: 'Frontend Development' },
    { id: 'applications', label: 'Applications' },
    { id: 'web development', label: 'Web development' }
  ]

  const projects = [
    {
       id: 1,
      title: 'KwickLingo Chat widget',
      category: 'Web development',
      image: '/assets/images/project-8.png',
      link: 'https://kwicklingo.com/',
      description: 'Applications'
    },
  
    {
      id: 2,
      title: 'Visa4.com',
      category: 'web development',
      image: '/assets/images/project-11.png',
      link: 'www.visa4.com',
      description: 'Mern stack development'
    },
     {
      id: 3,
      title: 'Rakpolyplast.com',
      category: 'frontend development',
      image: '/assets/images/rakpolyplast.png',
      link: 'https://rakpolyplast.com/',
      description: 'Frontend Development'
    },
  
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'frontend development',
      image: '/assets/images/portfolio.png',
      link: 'https://ajitkushawaha.github.io',
      description: 'Frontend Development'
    },
    {
      id: 5,
      title: 'Parking Management App',
      category: 'applications',
      image: '/assets/images/PmsMobile.jpg',
      link: 'https://pms.conceptserve.com/',
      description: 'React Native Application'
    },
      {
      id: 6,
      title: 'Restaurant Website',
      category: 'frontend development',
      image: '/assets/images/project-3.png',
      link: 'https://ajitkushawaha.github.io/eat-meet',
      description: 'Frontend Development'
    },
   
    {
      id: 7,
      title: 'Facebook clone',
      category: 'frontend development',
      image: '/assets/images/project-5.png',
      link: 'https://ajitkushawaha.github.io/facebook-clone/',
      description: 'Frontend Development'
    },
    {
      id: 8,
      title: 'Adventure and Tourism Website Design',
      category: 'frontend development',
      image: '/assets/images/natureWeb.png',
      link: 'https://ajitkushawaha.github.io/nature/',
      description: 'Frontend Development'
    },
    {
      id: 9,
      title: 'Incredible Man',
      category: 'frontend development',
      image: '/assets/images/project-6.png',
      link: 'https://ajitkushawaha.github.io/incredible-Man/',
      description: 'Frontend Development'
    },
    {
      id: 10,
      title: 'YouTube Clone',
      category: 'frontend development',
      image: '/assets/images/yt.png',
      link: 'https://github.com/ajitkushawaha/Youtube',
      description: 'Frontend Development'
    },
    {
      id: 11,
      title: 'Airbnb',
      category: 'frontend development',
      image: '/assets/images/airbnb.png',
      link: 'https://github.com/ajitkushawaha/Airbnbs',
      description: 'Frontend Development'
    },
    {
      id: 12,
      title: 'Hotel Mansarover',
      category: 'web development',
      image: '/assets/images/project-7.png',
      link: 'https://github.com/ajitkushawaha/BookingApp',
      description: 'Mern stack development'
    },
     {
      id: 13,
      title: 'Parking management system',
      category: 'web development',
      image: '/assets/images/project-1.png',
      link: '#',
      description: 'React development'
    },
    {
      id: 14,
      title: 'Contact Manager',
      category: 'web development',
      image: '/assets/images/cm.png',
      link: 'https://github.com/ajitkushawaha/contactManager',
      description: 'Mern stack development'
    },
      {
      id: 15,
      title: 'BuiAiSolution',
      category: 'web development',
      image: '/assets/images/project-2.png',
      link: '#',
      description: 'Mern stack development'
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <article className={`article portfolio ${isActive ? 'active' : ''}`} data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {filters.map((filter) => (
            <li key={filter.id} className="filter-item">
              <button 
                className={activeFilter === filter.id ? 'active' : ''}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            </li>
          ))}
        </ul>

        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li 
              key={project.id} 
              className="project-item active" 
              data-filter-item 
              data-category={project.category}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <Eye size={24} />
                  </div>
                  <Image 
                    src={project.image} 
                    alt={`Screenshot of ${project.title}`}
                    width={800}
                    height={600}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </figure>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
