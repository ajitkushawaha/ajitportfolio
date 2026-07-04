'use client'

import React, { useEffect, useState } from 'react'
import { Linkedin, Github, Mail, ArrowUpRight, Globe, Clock } from 'lucide-react'

export default function Footer() {
  const [time, setTime] = useState('')
  const prefix = ''
  const homeLink = '/'

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit' as const,
        minute: '2-digit' as const,
        second: '2-digit' as const,
        hour12: true,
      }
      const formatter = new Intl.DateTimeFormat('en-US', options)
      setTime(formatter.format(new Date()))
    }
    
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        .site-footer {
          position: relative;
          border-top: 1px solid rgba(143, 211, 232, 0.1);
          background: #070e17;
          padding: 80px 0 48px 0;
          overflow: hidden;
          width: 100%;
        }

        .site-footer * {
          box-sizing: border-box;
        }

        .footer-glow-1 {
          position: absolute;
          top: 0;
          left: 20%;
          width: 400px;
          height: 250px;
          background: rgba(255, 107, 53, 0.03);
          filter: blur(120px);
          border-radius: 50%;
          pointer-events: none;
        }

        .footer-glow-2 {
          position: absolute;
          bottom: 0;
          right: 20%;
          width: 500px;
          height: 200px;
          background: rgba(59, 130, 246, 0.03);
          filter: blur(150px);
          border-radius: 50%;
          pointer-events: none;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 10;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: 60px;
          margin-bottom: 80px;
        }

        @media (max-width: 991px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .footer-right {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        @media (max-width: 600px) {
          .footer-right {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        .footer-meta-tag {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: #FF6B35;
          font-weight: 600;
          display: block;
          margin-bottom: 12px;
        }

        .footer-email-link {
          font-size: clamp(20px, 3vw, 32px);
          font-weight: 600;
          color: #ffffff;
          text-decoration: none;
          letter-spacing: -0.02em;
          position: relative;
          display: inline-block;
          transition: color 0.3s;
        }

        .footer-email-link:hover {
          color: #FF6B35;
        }

        .footer-email-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, #FF6B35, #3b82f6);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s;
        }

        .footer-email-link:hover::after {
          transform: scaleX(1);
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(143, 211, 232, 0.03);
          border: 1px solid rgba(143, 211, 232, 0.08);
          border-radius: 100px;
          padding: 10px 20px;
          width: fit-content;
        }

        .status-dot-pulse {
          position: relative;
          display: flex;
          height: 8px;
          width: 8px;
        }

        .status-dot-ping {
          position: absolute;
          width: 100%;
          height: 100%;
          background: #34d399;
          border-radius: 50%;
          opacity: 0.75;
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        .status-dot-core {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
        }

        .status-text {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          color: #cbd5e1;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .footer-card {
          padding: 24px;
          background: rgba(143, 211, 232, 0.02);
          border: 1px solid rgba(143, 211, 232, 0.05);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 200px;
        }

        .nav-links-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 24px;
        }

        .footer-nav-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          color: #8FA2B8;
          text-decoration: none;
          transition: color 0.3s;
          padding: 4px 0;
        }

        .footer-nav-link-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #FF6B35;
          transform: scale(0);
          transition: transform 0.3s;
        }

        .footer-nav-link:hover {
          color: #ffffff;
        }

        .footer-nav-link:hover .footer-nav-link-dot {
          transform: scale(1);
        }

        .social-buttons {
          display: flex;
          gap: 16px;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: rgba(143, 211, 232, 0.03);
          border: 1px solid rgba(143, 211, 232, 0.08);
          border-radius: 12px;
          color: #cbd5e1;
          transition: all 0.3s;
          text-decoration: none;
        }

        .social-btn:hover {
          background: rgba(255, 107, 53, 0.1);
          border-color: rgba(255, 107, 53, 0.3);
          color: #FF6B35;
          transform: translateY(-2px);
        }

        .footer-info-lines {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          color: #8FA2B8;
          margin-top: auto;
        }

        .info-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .info-icon-blue { color: #3b82f6; }
        .info-icon-orange { color: #FF6B35; }

        .footer-bottom-bar {
          border-top: 1px solid rgba(143, 211, 232, 0.08);
          padding-top: 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        @media (max-width: 600px) {
          .footer-bottom-bar {
            flex-direction: column;
            text-align: center;
          }
        }

        .copyright-text {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          color: #5C7088;
          letter-spacing: 0.08em;
        }

        .footer-huge-name-container {
          margin-top: 64px;
          text-align: center;
          position: relative;
        }

        .footer-huge-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(48px, 10vw, 150px);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 0.9;
          margin: 0;
          text-transform: uppercase;
          background: linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.005) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          user-select: none;
          transition: background 0.7s;
        }

        [data-theme="light"] .site-footer {
          background: #ffffff;
          border-top-color: rgba(14, 27, 46, 0.1);
        }
        [data-theme="light"] .footer-card,
        [data-theme="light"] .status-badge,
        [data-theme="light"] .social-btn {
          background: #ffffff;
          border-color: rgba(14, 27, 46, 0.12);
        }
        [data-theme="light"] .footer-email-link,
        [data-theme="light"] .footer-nav-link:hover {
          color: #0E1B2E;
        }
        [data-theme="light"] .status-text,
        [data-theme="light"] .footer-nav-link,
        [data-theme="light"] .footer-info-lines,
        [data-theme="light"] .footer-meta-tag {
          color: #3A4D62 !important;
        }
        [data-theme="light"] .footer-bottom-bar {
          border-top-color: rgba(14, 27, 46, 0.1);
        }
        [data-theme="light"] .footer-huge-name {
          background: linear-gradient(to bottom, rgba(14,27,46,0.12), rgba(14,27,46,0.02));
          -webkit-background-clip: text;
          background-clip: text;
        }
      ` }} />

      <footer className="site-footer">
        <div className="footer-glow-1" />
        <div className="footer-glow-2" />

        <div className="footer-container">
          
          <div className="footer-grid">
            
            {/* Left Block */}
            <div className="footer-left">
              <div>
                <span className="footer-meta-tag">Let&apos;s collaborate</span>
                <a href="mailto:ajit.kushwaha.work@gmail.com" className="footer-email-link">
                  ajit.kushwaha.work@gmail.com
                </a>
              </div>

              <div className="status-badge">
                <div className="status-dot-pulse">
                  <div className="status-dot-ping" />
                  <div className="status-dot-core" />
                </div>
                <span className="status-text">Available for opportunities</span>
              </div>
            </div>

            {/* Right Blocks */}
            <div className="footer-right">
              
              <div className="footer-card">
                <div>
                  <span className="footer-meta-tag" style={{ color: '#8FA2B8' }}>Navigation</span>
                  <div className="nav-links-grid">
                    <a href={homeLink} className="footer-nav-link">
                      <span className="footer-nav-link-dot" />
                      Home
                    </a>
                    <a href={`${prefix}/projects`} className="footer-nav-link">
                      <span className="footer-nav-link-dot" />
                      Projects
                    </a>
                    <a href={`${prefix}/blog`} className="footer-nav-link">
                      <span className="footer-nav-link-dot" />
                      Blog
                    </a>
                    <a href={`${prefix}/#about`} className="footer-nav-link">
                      <span className="footer-nav-link-dot" />
                      About
                    </a>
                    <a href={`${prefix}/#resume`} className="footer-nav-link">
                      <span className="footer-nav-link-dot" />
                      Resume
                    </a>
                    <a href={`${prefix}/#contact`} className="footer-nav-link">
                      <span className="footer-nav-link-dot" />
                      Contact
                    </a>
                  </div>
                </div>
              </div>

              <div className="footer-card">
                <div>
                  <span className="footer-meta-tag" style={{ color: '#8FA2B8' }}>Elsewhere</span>
                  <div className="social-buttons">
                    <a 
                      href="https://www.linkedin.com/in/ajitreact/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-btn"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://github.com/ajitkushawaha" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-btn"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="footer-info-lines">
                  <div className="info-row">
                    <Globe className="w-3.5 h-3.5 info-icon-blue" />
                    <span>AHMEDABAD, IN — 23.0°N 72.5°E</span>
                  </div>
                  <div className="info-row">
                    <Clock className="w-3.5 h-3.5 info-icon-orange animate-pulse" />
                    <span>LOCAL TIME: {time || 'Loading...'} (IST)</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="footer-bottom-bar">
            <span className="copyright-text">
              © {new Date().getFullYear()} AJIT KUSHWAHA. ALL RIGHTS RESERVED.
            </span>
            <span className="copyright-text">
              CRAFTED WITH NEXT.JS & VANILLA CSS
            </span>
          </div>

          <div className="footer-huge-name-container">
            <h2 className="footer-huge-name">
              AJIT KUSHWAHA
            </h2>
          </div>

        </div>
      </footer>
    </>
  )
}
