'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function Scripts() {
  useEffect(() => {
    // Theme initialization - improved to prevent flash
    const initializeTheme = () => {
      try {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        let theme = 'light'; // default
        
        if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
          theme = savedTheme;
        } else if (prefersDark) {
          theme = 'dark';
        }
        
        document.documentElement.setAttribute('data-theme', theme);
        
        // Also set a class for additional styling if needed
        document.documentElement.classList.toggle('dark', theme === 'dark');
      } catch (e) {
        // Fallback to light theme if localStorage is not available
        document.documentElement.setAttribute('data-theme', 'light');
        document.documentElement.classList.remove('dark');
      }
    };

    // Initialize theme immediately
    initializeTheme();

    // Listen for theme changes from other components
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        initializeTheme();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Service Worker registration
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(() => console.log("Service Worker Registered"))
        .catch((error) => console.log("Service Worker Registration Failed:", error));
    }

    // EmailJS initialization
    const initEmailJS = () => {
      if (typeof window !== 'undefined' && (window as any).emailjs) {
        (window as any).emailjs.init({
          publicKey: "TI2qhqsmhp02z3SZd",
        });
      } else {
        setTimeout(initEmailJS, 100);
      }
    };
    initEmailJS();

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <>
      {/* EmailJS */}
      <Script 
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        strategy="afterInteractive"
      />
      
      {/* Google AdSense */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6750572764171645"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ajit Kushwaha",
            "alternateName": "ajitReact",
            "url": "https://ajitReact.in",
            "image": "https://ajitReact.in/assets/images/my-avatar.png",
            "sameAs": [
              "https://github.com/ajitkushwaha",
              "https://linkedin.com/in/ajitkushwaha",
              "https://twitter.com/ajitkushwaha"
            ],
            "jobTitle": "React & MERN Stack Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "ajitReact"
            },
            "description": "Ajit Kushwaha (ajitReact) is a passionate React and MERN Stack Developer based in Ahmedabad, India. Specializing in modern web applications, responsive design, and full-stack development.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ahmedabad",
              "addressRegion": "Gujarat",
              "addressCountry": "India"
            },
            "knowsAbout": [
              "React.js",
              "Node.js",
              "MongoDB",
              "Express.js",
              "JavaScript",
              "TypeScript",
              "Next.js",
              "Web Development",
              "Full Stack Development",
              "MERN Stack"
            ],
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Web Developer",
              "occupationLocation": {
                "@type": "City",
                "name": "Ahmedabad"
              }
            }
          })
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ajitReact",
            "url": "https://ajitReact.in",
            "logo": "https://ajitReact.in/assets/images/logo.svg",
            "description": "Professional web development services by Ajit Kushwaha. Specializing in React, MERN stack, and modern web applications.",
            "founder": {
              "@type": "Person",
              "name": "Ajit Kushwaha"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ahmedabad",
              "addressRegion": "Gujarat",
              "addressCountry": "India"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "contact@ajitReact.in"
            },
            "sameAs": [
              "https://github.com/ajitkushwaha",
              "https://linkedin.com/in/ajitkushwaha"
            ]
          })
        }}
      />

      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Ajit Kushwaha Portfolio - ajitReact",
            "url": "https://ajitReact.in",
            "description": "Professional portfolio of Ajit Kushwaha (ajitReact), React and MERN Stack Developer based in Ahmedabad, India.",
            "author": {
              "@type": "Person",
              "name": "Ajit Kushwaha",
              "alternateName": "ajitReact"
            },
            "publisher": {
              "@type": "Organization",
              "name": "ajitReact"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://ajitReact.in/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </>
  )
}
