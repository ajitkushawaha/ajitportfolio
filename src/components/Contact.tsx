'use client'

import React, { useState, useEffect } from 'react'
import { Send } from 'lucide-react'

interface ContactProps {
  isActive: boolean
}

export default function Contact({ isActive }: ContactProps) {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  })
  const [showThankYou, setShowThankYou] = useState(false)
  const [emailjsReady, setEmailjsReady] = useState(false)

  useEffect(() => {
    // Check if EmailJS is available
    const checkEmailJS = () => {
      if (typeof window !== 'undefined' && window.emailjs) {
        setEmailjsReady(true)
      } else {
        // Retry after a short delay
        setTimeout(checkEmailJS, 100)
      }
    }
    checkEmailJS()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!emailjsReady) {
      alert('Email service is not ready. Please try again in a moment.')
      return
    }

    try {
      const emailjs = window.emailjs
      if (emailjs) {
        await emailjs.send(
          'service_id', // Replace with your actual service ID
          'template_id', // Replace with your actual template ID
          {
            user_name: formData.user_name,
            user_email: formData.user_email,
            message: formData.message,
          },
          'TI2qhqsmhp02z3SZd' // Your public key
        )

        setShowThankYou(true)
        setFormData({ user_name: '', user_email: '', message: '' })

        setTimeout(() => {
          setShowThankYou(false)
        }, 3000)
      }
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Failed to send message. Please try again.')
    }
  }

  const closeModal = () => {
    setShowThankYou(false)
  }

  return (
    <article className={`article contact ${isActive ? 'active' : ''}`} data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            width="400"
            height="300"
            loading="lazy"
            src="https://maps.google.com/maps?width=400&amp;height=300&amp;hl=en&amp;q=anjali%20circle%20ahmedabad+(Sroj%20flat%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            title="Location Map"
          />
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form className="form" onSubmit={sendEmail}>
          <div className="input-wrapper">
            <input
              type="text"
              name="user_name"
              className="form-input"
              placeholder="Full name"
              required
              value={formData.user_name}
              onChange={handleInputChange}
            />

            <input
              type="email"
              name="user_email"
              className="form-input"
              placeholder="Email address"
              required
              value={formData.user_email}
              onChange={handleInputChange}
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleInputChange}
          />

          <button className="form-btn" type="submit" disabled={!emailjsReady}>
            <Send size={20} />
            <span>Send Message</span>
          </button>
        </form>
      </section>

      {showThankYou && (
        <div className="thankmodal" style={{ display: 'flex' }}>
          <div className="thankmodal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h2>Thank You!</h2>
            <p>Your message has been sent successfully.</p>
          </div>
        </div>
      )}
    </article>
  )
}
