'use client'

import React from 'react'
import { Palette, Code, Smartphone } from 'lucide-react'

interface AboutProps {
  isActive: boolean
  onTestimonialClick: (testimonial: any) => void
}

export default function About({ isActive, onTestimonialClick }: AboutProps) {
  const services = [
    {
      icon: <Palette size={40} />,
      title: 'Frontend Development',
      description: 'Building responsive, user-friendly, and visually appealing web interfaces using modern technologies.'
    },
    {
      icon: <Code size={40} />,
      title: 'MERN Stack Development',
      description: 'High-quality development of web applications using the MERN stack at a professional level.'
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile Apps',
      description: 'Professional development of applications for iOS and Android.'
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Arpan Shah',
      avatar: '/assets/images/avatar-4.png',
      text: `Ajit has been a valuable asset to ConceptServe Technologies. His strength lies in frontend development, where he consistently delivers clean, responsive, and user-focused interfaces. Beyond his frontend expertise, he has also stepped in to handle backend tasks when needed, showing versatility and a solid understanding of full-stack development.

      Ajit's proactive approach, attention to detail, and commitment to delivering quality work make him a dependable team member. It's been a pleasure working with him and seeing the impact he's had on our projects.`
    },
    {
      id: 2,
      name: 'Saurabh Rajput',
      avatar: '/assets/images/avatar-1.png',
      text: `Saurabh was hired to create a corporate identity. We were very pleased with the work done. He has a experience and is very concerned about the needs of the client. His attention to detail and creativity exceeded our expectations.`
    }
  ]

  return (
    <article className={`article about ${isActive ? 'active' : ''}`} data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          Hi, I'm a React Developer based in Ahmedabad, India, with over 1 year of hands-on experience creating
          dynamic and responsive web applications. I also have experience working independently as a freelancer,
          managing client projects and delivering tailored web solutions. My passion lies in turning complex
          challenges into sleek, intuitive, and effective solutions. With a focus on efficiency and user experience, I
          thrive on leveraging modern technologies to build impactful digital experiences.
        </p>

        <p>
          My job is to build websites using React that are not only functional and user-friendly but also visually
          appealing. I add a personal touch to each project, including those I've handled as a freelancer, to ensure
          they are both eye-catching and easy to navigate. My goal is to convey your message and identity in the most
          creative way possible. With experience in designing web solutions for notable brands and the ability to
          effectively manage freelance projects, I'm dedicated to delivering impactful and engaging digital
          experiences.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>

        <ul className="service-list">
          {services.map((service, index) => (
            <li key={index} className="service-item">
              <div className="service-icon-box">
                {service.icon}
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className="testimonials-item">
              <div 
                className="content-card" 
                onClick={() => onTestimonialClick(testimonial)}
                style={{ cursor: 'pointer' }}
              >
                <figure className="testimonials-avatar-box">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    width="60" 
                  />
                </figure>

                <h4 className="h4 testimonials-item-title">
                  {testimonial.name}
                </h4>

                <div className="testimonials-text">
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
