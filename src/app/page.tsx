import React from 'react'
import HomeClient from '@/components/HomeClient'
import { BlogPost } from '@/components/Blog'

async function getBlogPosts(): Promise<BlogPost[]> {
  // This data is now fetched/defined on the server
  return [
    {
      id: 5,
      title: 'Best Chat Widget(#Kwickingo) for Websites in 2025',
      category: 'Blog',
      date: 'Jan 20, 2025',
      image: 'https://www.kwicklingo.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1551434678-e076c223a692%3Fw%3D1200%26h%3D600%26fit%3Dcrop&w=3840&q=75',
      link: 'https://www.kwicklingo.com/blog/best-chat-widget-2025',
      description: 'Discover the best chat widgets(Kwickingo) to enhance customer engagement and support experience in 2025.'
    },
    {
      id: 1,
      title: 'Research Paper in React',
      category: 'Research',
      date: 'Feb 23, 2023',
      image: '/assets/images/research.png',
      link: 'https://ijsart.com/unleashing-the-power-of-react-js-a-comprehensive-study-on-front-end-development-and-framework-analysis-66076',
      description: 'A comprehensive study on front-end development and framework analysis'
    },
    {
      id: 2,
      title: 'Dev Disasters',
      category: 'Coding',
      date: 'Jan 14, 2025',
      image: '/assets/images/devdisater.png',
      link: 'https://www.linkedin.com/pulse/dev-disasters-hilarious-react-bugs-make-you-laugh-cry-ajit-kushwaha-awr8f?utm_source=share&utm_medium=member_android&utm_campaign=share_via',
      description: 'Hilarious React Bugs That Will Make You Laugh (or Cry!) 🐛💻😂'
    },
    {
      id: 3,
      title: '🛠️ Promises vs. Async/Await',
      category: 'Coding',
      date: 'Dec 2, 2024',
      image: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdxfi8d5r2n9ocze5magi.jpg',
      link: 'https://dev.to/ajitkushawaha/promises-vs-asyncawait-whats-the-difference-2hh2',
      description: "What's the Difference? 🤔"
    },
    {
      id: 4,
      title: 'Micro-Frontends',
      category: 'Coding',
      date: 'Jan 6, 2025',
      image: '/assets/images/modaern.png',
      link: 'https://www.linkedin.com/pulse/copy-micro-frontends-modern-approach-building-web-ajit-kushwaha-uiw5f/?trackingId=1%2FegxDLVRnG5IxIykDcDqg%3D%3D',
      description: 'A Modern Approach to Building Scalable Web Applications'
    }
  ]
}

export default async function Home() {
  const blogPosts = await getBlogPosts()
  return <HomeClient blogPosts={blogPosts} />
}
