'use client'

import Image from 'next/image'
import AboutContent from './AboutContent'

interface Testimonial {
  name: string
  role: string
  avatar: string
  text: string
  date: string
}

interface AboutProps {
  isActive: boolean
  onTestimonialClick: (testimonial: Testimonial) => void
}

export default function About({ isActive, onTestimonialClick }: AboutProps) {
  const testimonials: Testimonial[] = [
    {
      name: "Kanav Kohli",
      role: "Freelancer",
      avatar: "/assets/images/avatar-1.png",
      text: "Ajit is a highly skilled developer who truly understands business logic. He helped us architect a complex SaaS dashboard that significantly improved our team's workflow. His attention to detail in system performance and user experience is exceptional. Highly recommended for any serious product development.",
      date: "2025"
    },
    {
      name: "Saurabh",
      role: "React Developer",
      avatar: "/assets/images/avatar-4.png",
      text: "Working with Ajit on our AI integration project was a great experience. He implemented a RAG-based search system that works flawlessly. His deep knowledge of React and Node.js combined with his focus on clean, maintainable code makes him a top-tier engineer. A reliable partner for technical challenges.",
      date: "2024"
    },
    {
      name: 'Arpan Shah',
      role: "Full Stack Developer",
      avatar: "/assets/images/avatar-4.png",
      text: "Ajit delivered our cross-platform mobile app ahead of schedule. The UI is smooth, and the backend is robust. What sets him apart is his ability to think like a product owner—he often suggested features that we hadn't even considered. Excellent communication and professional delivery.",
      date: "2023"
    },


  ]

  return (
    <article className={isActive ? 'active' : ''} id="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <AboutContent />


      {/* Testimonials */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <li key={index} className="testimonials-item">
              <div className="content-card" onClick={() => onTestimonialClick(testimonial)}>
                <figure className="testimonials-avatar-box">
                  <Image src={testimonial.avatar} alt={testimonial.name} width={60} height={60} title={testimonial.name} />
                </figure>

                <h4 className="h4 testimonials-item-title">{testimonial.name}</h4>

                <div className="testimonials-text">
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Clients - Commented out as requested */}
      {/* <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src="/assets/images/logo-1-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="/assets/images/logo-2-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="/assets/images/logo-3-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="/assets/images/logo-4-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="/assets/images/logo-5-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="/assets/images/logo-6-color.png" alt="client logo" />
            </a>
          </li>
        </ul>
      </section> */}
    </article>
  )
}