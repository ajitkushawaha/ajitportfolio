import React from 'react'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Scripts from '@/components/Scripts'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Ajit Kushwaha (ajitReact) - React & MERN Stack Developer | Ahmedabad, India',
    template: '%s | Ajit Kushwaha - ajitReact'
  },
  description: 'Ajit Kushwaha (ajitReact) is a passionate React and MERN Stack Developer based in Ahmedabad, India. Specializing in modern web applications, responsive design, and full-stack development with 1+ years of experience. Visit www.ajitreact.site for professional web development services.',
  keywords: [
    'Ajit Kushwaha',
    'ajitReact',
    'www.ajitreact.site',
    'React developer',
    'MERN stack developer', 
    'JavaScript developer',
    'Node.js developer',
    'MongoDB developer',
    'Express.js developer',
    'web development',
    'frontend developer',
    'full-stack developer',
    'Ahmedabad',
    'India',
    'portfolio',
    'web applications',
    'responsive design',
    'UI/UX development',
    'React.js developer',
    'Next.js developer',
    'TypeScript developer',
    'web developer Ahmedabad',
    'freelance web developer',
    'custom web development',
    'e-commerce development',
    'mobile app development'
  ],
  authors: [{ name: 'Ajit Kushwaha', url: 'https://www.ajitreact.site' }],
  creator: 'Ajit Kushwaha (ajitReact)',
  publisher: 'Ajit Kushwaha',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.ajitreact.site'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ajitreact.site',
    title: 'Ajit Kushwaha (ajitReact) - React & MERN Stack Developer',
    description: 'Ajit Kushwaha (ajitReact) is a passionate React and MERN Stack Developer based in Ahmedabad, India. Specializing in modern web applications and full-stack development. Visit www.ajitreact.site for professional web development services.',
    siteName: 'Ajit Kushwaha Portfolio - ajitReact',
    images: [
      {
        url: '/assets/images/my-avatar.png',
        width: 1200,
        height: 630,
        alt: 'Ajit Kushwaha (ajitReact) - React & MERN Stack Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ajit Kushwaha (ajitReact) - React & MERN Stack Developer',
    description: 'Ajit Kushwaha (ajitReact) is a passionate React and MERN Stack Developer based in Ahmedabad, India. Specializing in modern web applications and full-stack development.',
    images: ['/assets/images/my-avatar.png'],
    creator: '@ajitkushwaha', // Add your Twitter handle if you have one
  },
  other: {
    'theme-color': '#1976d2',
    'color-scheme': 'light dark',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Ajit Kushwaha - ajitReact',
    'application-name': 'Ajit Kushwaha Portfolio - ajitReact',
    'msapplication-TileColor': '#1976d2',
    'msapplication-config': '/browserconfig.xml',
    'author': 'Ajit Kushwaha (ajitReact)',
    'subject': 'Web Development Portfolio',
    'language': 'English',
    'distribution': 'Global',
    'rating': 'General',
    'revisit-after': '7 days',
    'google-site-verification': 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
      <head>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  
                  let theme = 'light';
                  if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
                    theme = savedTheme;
                  } else if (prefersDark) {
                    theme = 'dark';
                  }
                  
                  document.documentElement.setAttribute('data-theme', theme);
                  document.documentElement.classList.toggle('dark', theme === 'dark');
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'light');
                  document.documentElement.classList.remove('dark');
                }
              })();
            `
          }}
        /> */}
        <link rel="shortcut icon" href="/assets/images/logo.ico" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
