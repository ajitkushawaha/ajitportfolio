import React from 'react'
import Image from 'next/image'
import { Eye } from 'lucide-react'

interface Project {
  id: number
  title: string
  category: string
  image: string
  link: string
  description: string
}

interface ProjectListProps {
  projects: Project[]
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <ul className="project-list">
      {projects.map((project) => (
        <li
          key={project.id}
          className="project-item active"
          data-filter-item
          data-category={project.category}
        >
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <figure className="project-img">
              <div className="project-item-icon-box">
                <Eye size={24} />
              </div>
              <Image
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                width={800}
                height={600}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </figure>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-category">{project.description}</p>
          </a>
        </li>
      ))}
    </ul>
  )
}