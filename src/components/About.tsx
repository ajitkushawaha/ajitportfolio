'use client'

import React from 'react'

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

      <section className="about-text">
        <p>
          I'm a React and MERN Stack Developer based in Ahmedabad, India, with over 2 year of experience in creating dynamic and responsive web applications.
          I specialize in building modern, scalable web solutions using cutting-edge technologies.
        </p>

        <p>
          My passion lies in turning complex business requirements into elegant, user-friendly applications. I focus on creating 
          performant, maintainable code while ensuring exceptional user experiences. From frontend interfaces to backend APIs, 
          I deliver complete web solutions that drive business growth and user engagement.
        </p>
      </section>

      {/* Service */}
      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src="/assets/images/icon-design.svg" alt="design icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web Applications</h4>
              <p className="service-item-text">
                Full-stack web applications with modern technologies like React, Node.js, and databases. 
                Custom solutions for businesses with user authentication, real-time features, and API integration.
              </p>
              <div className="service-pricing">
                <div className="pricing-tiers">
                  <div className="pricing-tier">
                    <span className="tier-name">Basic</span>
                    <span className="tier-price">₹15,000 - ₹40,000</span>
                  </div>
                  <div className="pricing-tier">
                    <span className="tier-name">Standard</span>
                    <span className="tier-price">₹40,000 - ₹1,20,000</span>
                  </div>
                  <div className="pricing-tier">
                    <span className="tier-name">Premium</span>
                    <span className="tier-price">₹1,20,000 - ₹4,00,000+</span>
                  </div>
                </div>
                <div className="service-features">
                  <span className="feature-tag">Custom Design</span>
                  <span className="feature-tag">Database Integration</span>
                  <span className="feature-tag">API Development</span>
                  <span className="feature-tag">Deployment</span>
                </div>
              </div>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="/assets/images/icon-dev.svg" alt="Web development icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Static Websites</h4>
              <p className="service-item-text">
                Fast, responsive static websites built with modern frameworks. 
                Perfect for portfolios, business sites, and landing pages with SEO optimization.
              </p>
              <div className="service-pricing">
                <div className="pricing-tiers">
                  <div className="pricing-tier">
                    <span className="tier-name">Basic</span>
                    <span className="tier-price">₹4,000 - ₹12,000</span>
                  </div>
                  <div className="pricing-tier">
                    <span className="tier-name">Standard</span>
                    <span className="tier-price">₹12,000 - ₹25,000</span>
                  </div>
                  <div className="pricing-tier">
                    <span className="tier-name">Premium</span>
                    <span className="tier-price">₹25,000 - ₹65,000+</span>
                  </div>
                </div>
                <div className="service-features">
                  <span className="feature-tag">Responsive Design</span>
                  <span className="feature-tag">SEO Optimization</span>
                  <span className="feature-tag">Contact Forms</span>
                  <span className="feature-tag">Analytics</span>
                </div>
              </div>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="/assets/images/icon-app.svg" alt="mobile app icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile Apps</h4>
              <p className="service-item-text">
                Cross-platform mobile applications using React Native and Flutter. 
                Native performance with beautiful UI/UX design for iOS and Android.
              </p>
              <div className="service-pricing">
                <div className="pricing-tiers">
                  <div className="pricing-tier">
                    <span className="tier-name">Basic</span>
                    <span className="tier-price">₹8,000 - ₹25,000</span>
                  </div>
                  <div className="pricing-tier">
                    <span className="tier-name">Standard</span>
                    <span className="tier-price">₹25,000 - ₹60,000</span>
                  </div>
                  <div className="pricing-tier">
                    <span className="tier-name">Premium</span>
                    <span className="tier-price">₹60,000 - ₹1,50,000+</span>
                  </div>
                </div>
                <div className="service-features">
                  <span className="feature-tag">Cross-platform</span>
                  <span className="feature-tag">Push Notifications</span>
                  <span className="feature-tag">Offline Support</span>
                  <span className="feature-tag">App Store Deployment</span>
                </div>
              </div>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="/assets/images/icon-photo.svg" alt="camera icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Shopify Development</h4>
              <p className="service-item-text">
                Complete Shopify store setup, theme customization, and app development. 
                E-commerce solutions with payment integration and inventory management.
              </p>
              <div className="service-pricing">
                <div className="pricing-tiers">
                  <div className="pricing-tier">
                    <span className="tier-name">Basic</span>
                    <span className="tier-price">₹12,000 - ₹25,000</span>
                  </div>
                  <div className="pricing-tier">
                    <span className="tier-name">Standard</span>
                    <span className="tier-price">₹25,000 - ₹65,000</span>
                  </div>
                  <div className="pricing-tier">
                    <span className="tier-name">Premium</span>
                    <span className="tier-price">₹65,000 - ₹2,00,000+</span>
                  </div>
                </div>
                <div className="service-features">
                  <span className="feature-tag">Custom Theme</span>
                  <span className="feature-tag">Payment Integration</span>
                  <span className="feature-tag">Inventory Management</span>
                  <span className="feature-tag">Marketing Tools</span>
                </div>
              </div>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="/assets/images/icon-quote.svg" alt="chat icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Chat Agents</h4>
              <p className="service-item-text">
                AI-powered chatbots and customer support agents. 
                24/7 automated customer service with natural language processing and analytics.
              </p>
              <div className="service-pricing">
                <div className="pricing-tiers">
                  <div className="pricing-tier">
                    <span className="tier-name">Basic</span>
                    <span className="tier-price">₹6,000 - ₹15,000</span>
                  </div>
                  <div className="pricing-tier">
                    <span className="tier-name">Standard</span>
                    <span className="tier-price">₹15,000 - ₹40,000</span>
                  </div>
                  <div className="pricing-tier">
                    <span className="tier-name">Premium</span>
                    <span className="tier-price">₹40,000 - ₹1,20,000+</span>
                  </div>
                </div>
                <div className="service-features">
                  <span className="feature-tag">AI Integration</span>
                  <span className="feature-tag">Multi-language</span>
                  <span className="feature-tag">Analytics Dashboard</span>
                  <span className="feature-tag">24/7 Support</span>
                </div>
              </div>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="/assets/images/icon-design.svg" alt="design icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">UI/UX Design</h4>
              <p className="service-item-text">
                User-centered design solutions with wireframes, prototypes, and user testing. 
                Creating intuitive and engaging user experiences for web and mobile applications.
              </p>
            </div>
          </li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <li key={index} className="testimonials-item">
              <div className="content-card" onClick={() => onTestimonialClick(testimonial)}>
                <figure className="testimonials-avatar-box">
                  <img src={testimonial.avatar} alt={testimonial.name} width="60" title={testimonial.name} />
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
