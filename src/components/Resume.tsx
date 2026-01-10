import React from 'react'
import { BookOpen, Briefcase } from 'lucide-react'

interface ResumeProps {
  isActive: boolean
}

export default function Resume({ isActive }: ResumeProps) {
  const education = [
    {
      title: 'Master of Computer Application',
      period: '2021 — 2024',
      description: 'Rajasthan Institute of Engineering and Technology Completed MCA degree with a specialization in Frontend Development. Developed a comprehensive case study on React.js, showcasing expertise in building interactive user interfaces and single-page applications.'
    },
    {
      title: 'Bachelor of Computer Application',
      period: '2018 — 2021',
      description: 'I did my graduation Bachelor of Computer Applications from JP Institute of Engineering and Technology Meerut'
    }
  ]

  const experience = [
    {
      title: 'Co-Founder & CTO',
      company: 'Codyn',
      period: 'Nov 2024 - Present',
      description: 'Co-founded Codyn and leading the technology vision and execution. Architected and developed SaaS products including Kwicklingo. Built and maintained scalable web applications using React.js, Next.js, Node.js, and Tailwind CSS. Responsible for system design, product development, deployments, and technical decision-making.'
    }
    ,

    {
      title: 'React Developer',
      company: 'Conceptserve Technologies',
      period: 'Sep 2023 - Sep 2024',
      description: 'At Conceptserve Technologies, I focused on React web and mobile applications, where I developed advanced skills in React, intermediate skills in JavaScript, Redux, and Agile, and gained foundational knowledge in testing.'
    },
    {
      title: 'Trainee Web Designer',
      company: 'Rayna Technologies',
      period: 'June 2022 - 45 days',
      description: 'Developed webpages using HTML, CSS and JavaScript to meet customer requirements. Collaborated with senior developers to implement responsive designs and user-friendly interfaces. Gained hands-on experience with version control systems like Git.'
    }
  ]

  const skills = [
    { name: 'Front-End Development', percentage: 80 },
    { name: 'MERN Stack Development', percentage: 70 },
    { name: 'App Development', percentage: 60 },
    { name: 'Web Development', percentage: 80 }
  ]

  return (
    <article className={`article resume ${isActive ? 'active' : ''}`} data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOpen size={24} />
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {education.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.period}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <Briefcase size={24} />
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {experience.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.company}</span>
              <span>{item.period}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          {skills.map((skill, index) => (
            <li key={index} className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.percentage}>{skill.percentage}%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}