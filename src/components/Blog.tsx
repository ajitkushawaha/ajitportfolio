import React from 'react'
import Image from 'next/image'

export interface BlogPost {
  id: number
  title: string
  category: string
  date: string
  image: string
  link: string
  description: string
}

interface BlogProps {
  isActive: boolean
  posts: BlogPost[]
}

export default function Blog({ isActive, posts }: BlogProps) {
  return (
    <article className={`article blog ${isActive ? 'active' : ''}`} data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {posts.map((post) => (
            <li key={post.id} className="blog-post-item">
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <figure className="blog-banner-box">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    width={800}
                    height={450}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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