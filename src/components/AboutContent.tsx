import Image from 'next/image'
import React from 'react'

export default function AboutContent() {
  return (
    <>
      <section className="about-text">
        <p>
          I’m a Co-Founder and Product-focused Full-Stack Engineer based in Ahmedabad, India.
          I design, build, and scale real-world SaaS products with a strong focus on performance,
          cost efficiency, and user experience.
        </p>

        <p>
          My work goes beyond writing code — I solve business problems through technology.
          From architecting scalable frontend systems to building backend APIs and optimizing AI
          infrastructure using techniques like RAG and indexed search, I focus on delivering
          practical, production-ready solutions. I care deeply about clean architecture,
          maintainability, and building products that can actually survive in the market.
        </p>
      </section>
      <section className="about-stats">
        <div className="stats-item">
          <h3 className="stat-number">3+</h3>
          <p className="stat-text">Years Exp.</p>
        </div>
        <div className="stats-item">
          <h3 className="stat-number">25+</h3>
          <p className="stat-text">Projects</p>
        </div>
        <div className="stats-item">
          <h3 className="stat-number">12+</h3>
          <p className="stat-text">Professional</p>
        </div>
        <div className="stats-item">
          <h3 className="stat-number">5+</h3>
          <p className="stat-text">SaaS Built</p>
        </div>
      </section>


      {/* Service */}
      <section className="service">
        <h3 className="h3 service-title">What i&apos;m doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <Image src="/assets/images/icon-design.svg" alt="design icon" width={40} height={40} />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">
                Web Applications
                <span className="status-badge available">Available</span>
              </h4>
              <p className="service-item-text">
                Full-stack web applications with modern technologies like React, Node.js, and databases.
                Custom solutions for businesses with user authentication, real-time features, and API integration.
              </p>
              <div className="service-pricing">
                <div className="pricing-range">
                  <span className="price-label">Project Range:</span>
                  <span className="price-value">₹15,000 - ₹4,00,000+</span>
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
              <Image src="/assets/images/icon-dev.svg" alt="Web development icon" width={40} height={40} />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">
                Static Websites
                <span className="status-badge available">Available</span>
              </h4>
              <p className="service-item-text">
                Fast, responsive static websites built with modern frameworks.
                Perfect for portfolios, business sites, and landing pages with SEO optimization.
              </p>
              <div className="service-pricing">
                <div className="pricing-range">
                  <span className="price-label">Project Range:</span>
                  <span className="price-value">₹4,000 - ₹65,000+</span>
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
              <Image src="/assets/images/icon-app.svg" alt="mobile app icon" width={40} height={40} />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">
                Mobile Apps
                <span className="status-badge busy">Busy</span>
              </h4>
              <p className="service-item-text">
                Cross-platform mobile applications using React Native and Flutter.
                Native performance with beautiful UI/UX design for iOS and Android.
              </p>
              <div className="service-pricing">
                <div className="pricing-range">
                  <span className="price-label">Project Range:</span>
                  <span className="price-value">₹8,000 - ₹2,50,000+</span>
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
              <Image src="/assets/images/icon-photo.svg" alt="camera icon" width={40} height={40} />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">
                Shopify Development
                <span className="status-badge available">Available</span>
              </h4>
              <p className="service-item-text">
                Complete Shopify store setup, theme customization, and app development.
                E-commerce solutions with payment integration and inventory management.
              </p>
              <div className="service-pricing">
                <div className="pricing-range">
                  <span className="price-label">Project Range:</span>
                  <span className="price-value">₹12,000 - ₹2,00,000+</span>
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
              <Image src="/assets/images/icon-quote.svg" alt="chat icon" width={40} height={40} />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">
                Chat Agents
                <span className="status-badge available">Available</span>
              </h4>
              <p className="service-item-text">
                AI-powered chatbots and customer support agents.
                24/7 automated customer service with natural language processing and analytics.
              </p>
              <div className="service-pricing">
                <div className="pricing-range">
                  <span className="price-label">Project Range:</span>
                  <span className="price-value">₹6,000 - ₹1,20,000+</span>
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
              <Image src="/assets/images/icon-design.svg" alt="design icon" width={40} height={40} />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">
                UI/UX Design
                <span className="status-badge available">Available</span>
              </h4>
              <p className="service-item-text">
                User-centered design solutions with wireframes, prototypes, and user testing.
                Creating intuitive and engaging user experiences for web and mobile applications.
              </p>
              <div className="service-pricing">
                <div className="pricing-range">
                  <span className="price-label">Project Range:</span>
                  <span className="price-value">₹6,000 - ₹80,000+</span>
                </div>
                <div className="service-features">
                  <span className="feature-tag">Wireframing</span>
                  <span className="feature-tag">Prototyping</span>
                  <span className="feature-tag">User Testing</span>
                  <span className="feature-tag">Visual Design</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  )
}