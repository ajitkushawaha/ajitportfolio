'use client'

import React, { useState } from 'react'
import ProjectList from './ProjectList'

interface PortfolioProps {
  isActive: boolean
}

export default function Portfolio({ isActive }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'saas', label: 'SaaS' },
    { id: 'professional', label: 'Professional' },
    { id: 'ventures', label: 'Ventures' },
    { id: 'labs', label: 'Labs' }
  ]

  const projects = [
    // SaaS
    {
      id: 1,
      title: 'KwickLingo Chat widget',
      category: 'saas',
      image: '/assets/images/project-8.png',
      link: 'https://kwicklingo.com/',
      description: 'AI-powered Chat Widget'
    },
     {
      id: 4,
      title: 'Manage MyCafe',
      category: 'saas',
      image: '/assets/images/managemycafe.png',
      link: 'https://managemy.cafe',
      description: 'Cafe Management System'
    },
    {
      id: 2,
      title: 'Parking management system',
      category: 'saas',
      image: '/assets/images/project-1.png',
      link: '#',
      description: 'Smart Parking Solution'
    },
    {
      id: 3,
      title: 'Parking Management App',
      category: 'saas',
      image: '/assets/images/PmsMobile.jpg',
      link: 'https://pms.conceptserve.com/',
      description: 'Mobile Parking Control'
    },
   
    {
      id: 5,
      title: 'BuiAiSolution',
      category: 'saas',
      image: '/assets/images/project-2.png',
      link: '#',
      description: 'AI Infrastructure Solutions'
    },

    // Client
    {
      id: 6,
      title: 'Visa4.com',
      category: 'professional',
      image: '/assets/images/visa4.png',
      link: 'https://www.visa4.com',
      description: 'Visa Consultancy Platform'
    },
    {
      id: 7,
      title: 'Growingwing',
      category: 'professional',
      image: '/assets/images/growingwing.png',
      link: '#',
      description: 'Educational Platform'
    },
    {
      id: 8,
      title: 'LucaBoat',
      category: 'professional',
      image: '/assets/images/LucaBoat.png',
      link: '#',
      description: 'Boat Rental Service'
    },
    {
      id: 9,
      title: 'Lms',
      category: 'professional',
      image: '/assets/images/project-5.png',
      link: '#',
      description: 'Learning Management System'
    },
    {
      id: 10,
      title: 'Gect Ngo',
      category: 'professional',
      image: '/assets/images/gectngo.png',
      link: '#',
      description: 'NGO Website'
    },
    {
      id: 11,
      title: 'Rakpolyplast',
      category: 'professional',
      image: '/assets/images/rakpolyplast.png',
      link: 'https://rakpolyplast.com/',
      description: 'Industrial Manufacturer'
    },
    {
      id: 12,
      title: 'Incredible Man',
      category: 'professional',
      image: '/assets/images/im.png',
      link: 'https://ajitkushawaha.github.io/incredible-Man/',
      description: 'Grooming Products store'
    },
    {
      id: 13,
      title: 'Visal',
      category: 'professional',
      image: '/assets/images/visal.png',
      link: 'https://vfms.co.in/',
      description: 'Vehicle Management System'
    },
    {
      id: 14,
      title: 'Mister Bouton',
      category: 'professional',
      image: '/assets/images/misterbouton.png',
      link: 'https://www.misterbouton.com/',
      description: 'Fashion E-commerce'
    },
    {
      id: 15,
      title: 'Blue City Real Estate',
      category: 'professional',
      image: '/assets/images/bluecity.png',
      link: 'https://bluecityrealestate.com/',
      description: 'Real Estate Platform'
    },
    {
      id: 16,
      title: 'London Crust',
      category: 'professional',
      image: '/assets/images/londan.png',
      link: 'https://londoncrust.vercel.app/',
      description: 'Bakery & Restaurant'
    },

    // MyProduct
    {
      id: 17,
      title: 'kwicklingo.com',
      category: 'ventures',
      image: '/assets/images/project-8.png',
      link: 'https://kwicklingo.com',
      description: 'AI Chatbot Product'
    },
    {
      id: 18,
      title: 'managemy.cafe',
      category: 'ventures',
      image: '/assets/images/managemycafe.png',
      link: 'https://managemy.cafe',
      description: 'Cafe POS System'
    },

    // College
    {
      id: 19,
      title: 'Village Fress',
      category: 'labs',
      image: '/assets/images/Village.png',
      link: 'https://villagefress.vercel.app/',
      description: 'Fresh Produce Platform'
    },
    {
      id: 20,
      title: 'YouTube Clone',
      category: 'labs',
      image: '/assets/images/yt.png',
      link: 'https://github.com/ajitkushawaha/Youtube',
      description: 'Video Streaming UI'
    },
    {
      id: 21,
      title: 'Airbnb Clone',
      category: 'labs',
      image: '/assets/images/airbnb.png',
      link: 'https://github.com/ajitkushawaha/Airbnbs',
      description: 'Vacation Rental UI'
    },
    {
      id: 22,
      title: 'Facebook Clone',
      category: 'labs',
      image: '/assets/images/project-5.png',
      link: 'https://ajitkushawaha.github.io/facebook-clone/',
      description: 'Social Media Clone'
    },
    {
      id: 23,
      title: 'Contact Manager',
      category: 'labs',
      image: '/assets/images/cm.png',
      link: 'https://github.com/ajitkushawaha/contactManager',
      description: 'MERN Contact App'
    },
    {
      id: 24,
      title: 'Restaurant Website',
      category: 'labs',
      image: '/assets/images/project-3.png',
      link: 'https://ajitkushawaha.github.io/eat-meet',
      description: 'React Food App'
    },
    {
      id: 25,
      title: 'Adventure Site',
      category: 'labs',
      image: '/assets/images/natureWeb.png',
      link: 'https://ajitkushawaha.github.io/nature/',
      description: 'Nature Exploration UI'
    },
    {
      id: 26,
      title: 'Portfolio Website',
      category: 'labs',
      image: '/assets/images/portfolio.png',
      link: 'https://ajitkushawaha.github.io',
      description: 'Static Portfolio Site'
    },
    {
      id: 27,
      title: 'MeowParivar',
      category: 'professional',
      image: '/assets/images/meowparivar.png',
      link: 'https://www.meowprivar.in',
      description: 'E-commerce for Pets'
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === activeFilter.toLowerCase())

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

        <ProjectList projects={filteredProjects} />
      </section>
    </article>
  )
}