'use client'

import React from 'react'

interface BlogProps {
  isActive: boolean
}

export default function Blog({ isActive }: BlogProps) {
  const blogPosts = [
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
      image: 'https://media.licdn.com/dms/image/v2/D4D12AQGkQVeRMgtOFg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1727235859473?e=1755129600&v=beta&t=Ys6zpy7Q5hG5sQgxHWNFnNdFTCg4griP8ojJSdi1ezw',
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
      image: 'https://media.licdn.com/dms/image/v2/D4D12AQFd3dRXB74cwQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1727228074225?e=1755129600&v=beta&t=fgEhxwLKwbDJA7wxzE8iTYrcU63O8BBGTCmh_jMPwEc',
      link: 'https://www.linkedin.com/pulse/copy-micro-frontends-modern-approach-building-web-ajit-kushwaha-uiw5f/?trackingId=1%2FegxDLVRnG5IxIykDcDqg%3D%3D',
      description: 'A Modern Approach to Building Scalable Web Applications'
    }
  ]

  return (
    <article className={`article blog ${isActive ? 'active' : ''}`} data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogPosts.map((post) => (
            <li key={post.id} className="blog-post-item">
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <figure className="blog-banner-box">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    loading="lazy" 
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>
                    <span className="dot"></span>
                    <time dateTime={post.date}>{post.date}</time>
                  </div>

                  <h3 className="h3 blog-item-title">{post.title}</h3>
                  <p className="blog-text">{post.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
