import React from 'react'
import HomeClient from '@/components/HomeClient'
import { BlogPost } from '@/components/Blog'

async function getBlogPosts(): Promise<BlogPost[]> {
  // This data is now fetched/defined on the server
  return [
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
