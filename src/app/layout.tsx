import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ajit Kushwaha - React and MERN Stack Developer in Ahmedabad',
  description: 'Ajit Kushwaha is a React and MERN Stack Developer based in Ahmedabad, India. With 1+ years of experience, Ajit creates dynamic and responsive web applications.',
  keywords: 'React developer, MERN stack developer, web development, Ahmedabad',
  robots: 'index, follow',
  openGraph: {
    title: 'Ajit Kushwaha - React and MERN Stack Developer',
    description: 'Ajit Kushwaha is a React and MERN Stack Developer based in Ahmedabad, India. With 1+ years of experience in creating dynamic and responsive web applications.',
    images: ['https://ajitkushwaha.online/assets/images/my-avatar.png'],
    url: 'https://ajitkushawaha.github.io.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ajit Kushwaha - React and MERN Stack Developer',
    description: 'Ajit Kushwaha is a React and MERN Stack Developer based in Ahmedabad, India. With 1+ years of experience in creating dynamic and responsive web applications.',
    images: ['https://ajitkushwaha.online/assets/images/my-avatar.png'],
  },
  authors: [{ name: 'Ajit Kushwaha' }],
  creator: 'Ajit Kushwaha',
  publisher: 'Ajit Kushwaha',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ajitkushwaha.online'),
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ajit Kushwaha",
              "jobTitle": "React Developer",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "addressCountry": "India"
              },
              "email": "mailto:ajit.kushwaha.work@gmail.com",
              "telephone": "+91 7617028576",
              "url": "https://ajitkushawaha.online"
            })
          }}
        />
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function initEmailJS() {
                  if (typeof emailjs !== 'undefined') {
                    emailjs.init({
                      publicKey: "TI2qhqsmhp02z3SZd",
                    });
                  } else {
                    setTimeout(initEmailJS, 100);
                  }
                }
                initEmailJS();
              })();
            `
          }}
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6750572764171645" crossOrigin="anonymous"></script>
        <link rel="shortcut icon" href="/assets/images/logo.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="manifest" href="/manifest.json" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ("serviceWorker" in navigator) {
                navigator.serviceWorker
                  .register("/service-worker.js")
                  .then(() => console.log("Service Worker Registered"))
                  .catch((error) => console.log("Service Worker Registration Failed:", error));
              }
            `
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
