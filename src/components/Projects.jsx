const projects = [
  {
    title: 'CartiFy',
    image: '/images/catify.png',
    alt: 'Quiz App',
    description: 'A full-stack CartiFy built with React, Spring Boot, and MySQL',
    tech: ['TypeScript', 'Spring Boot', 'MySQL'],
    code: 'https://github.com/satyam6203/Quiz-App.git',
    titleColor: '#00927c',
  },
  {
    title: 'Smart Contact Manager',
    image: '/images/sm.jpg',
    alt: 'Contact Manager',
    description: 'A contact management system with user authentication and cloud storage',
    tech: ['Tailwind CSS', 'Spring Boot', 'Cloudanary'],
    code: 'https://github.com/satyam6203/SCM.git',
  },
  {
    title: 'Real-time Chat App',
    image: '/images/chat1.jpg',
    alt: 'Chat App',
    description: 'A web-based chat application with real-time messaging using WebSockets',
    tech: ['React', 'WebSockets', 'Spring Boot'],
    code: 'https://github.com/satyam6203/CHAT-APP.git',
  },
  {
    title: 'Hotel Service App',
    image: '/images/hotel1.jpg',
    alt: 'Hotel App',
    description: 'A web-based Hotel Application with real-time messaging using WebSockets',
    tech: ['React', 'AWS S3', 'Spring Boot'],
    code: 'https://github.com/satyam6203/HOTEL-SERVICE.git',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <div className="image-container">
                  <img src={project.image} alt={project.alt} loading="lazy" />
                </div>
              </div>
              <div className="project-info">
                <h3 style={project.titleColor ? { color: project.titleColor } : undefined}>
                  {project.title}
                </h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href="#" className="btn btn-small">Live Demo</a>
                  <a href={project.code} className="btn btn-small btn-outline">Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
