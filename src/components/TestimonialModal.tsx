'use client'

import React from 'react'
import { X } from 'lucide-react'

interface TestimonialModalProps {
  isOpen: boolean
  testimonial: any
  onClose: () => void
}

export default function TestimonialModal({ isOpen, testimonial, onClose }: TestimonialModalProps) {
  if (!isOpen || !testimonial) return null

  return (
    <>
      <div className="overlay active" onClick={onClose}></div>
      
      <div className="modal-container active">
        <section className="testimonials-modal">
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>

          <div className="modal-img-wrapper">
            <figure className="modal-avatar-box">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                width="80" 
              />
            </figure>
            <img src="/assets/images/icon-quote.svg" alt="quote icon" />
          </div>

          <div className="modal-content">
            <h4 className="h3 modal-title">{testimonial.name}</h4>
            <time dateTime="2025-02-14">14 Feb, 2025</time>
            <div>
              <p>{testimonial.text}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
