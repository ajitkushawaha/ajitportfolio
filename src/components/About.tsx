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
      text: "Ajit was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcorper nulla non metus auctor fringilla. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent blandit laoreet nibh.",
      date: "2025"
    },
    {
      name: "Saurabh",
      role: "React Developer",
      avatar: "/assets/images/avatar-4.png",
      text: "Ajit was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcorper nulla non metus auctor fringilla. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent blandit laoreet nibh.",
      date: "2024"
    },
    {
      name: 'Arpan Shah',
      role: "Full Stack Developer",
      avatar: "/assets/images/avatar-4.png",
      text: "Ajit was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcorper nulla non metus auctor fringilla. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent blandit laoreet nibh.",
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