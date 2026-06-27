import { useState, useRef, useEffect } from 'react'

const skills = [
  { category: 'frontend', icon: 'fab fa-html5', title: 'HTML' },
  { category: 'frontend', icon: 'fab fa-css3-alt', title: 'CSS' },
  { category: 'frontend', icon: 'fab fa-js', title: 'JavaScript' },
  { category: 'frontend', icon: 'fab fa-react', title: 'React' },
  { category: 'frontend', title: 'TypeScript', isTs: true },
  { category: 'backend', icon: 'fab fa-java', title: 'Java' },
  { category: 'backend', icon: 'fas fa-leaf', title: 'Spring Boot' },
  { category: 'backend', icon: 'fas fa-server', title: 'REST APIs' },
  { category: 'devops', icon: 'fab fa-aws', title: 'AWS' },
  { category: 'devops', icon: 'fab fa-microsoft', title: 'Azure' },
  { category: 'devops', icon: 'fab fa-docker', title: 'Docker' },
  { category: 'devops', icon: 'fab fa-git-alt', title: 'Git' },
  { category: 'devops', icon: 'fab fa-linux', title: 'Linux' },
  { category: 'devops', icon: 'fas fa-gears', title: 'Jenkins' },
  { category: 'devops', icon: 'fas fa-vial', title: 'JUnit' },
  { category: 'database', icon: 'fas fa-database', title: 'SQL' },
  { category: 'database', icon: 'fas fa-database', title: 'MongoDB', mongo: true },
]

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'DevOps', value: 'devops' },
  { label: 'Database', value: 'database' },
]

function SkillItem({ skill }) {
  if (skill.isTs) {
    return (
      <div className="skill-item" title="TypeScript">
        <span className="ts-icon">TS</span>
      </div>
    )
  }
  return (
    <div className="skill-item" title={skill.title}>
      <i className={`${skill.icon}${skill.mongo ? ' mongo-icon' : ''}`}></i>
    </div>
  )
}

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all')
  const trackRef = useRef(null)

  const handleFilter = (filter) => {
    setActiveFilter(filter)
    if (filter === 'all') {
      if (trackRef.current) {
        trackRef.current.classList.remove('static')
        trackRef.current.style.animation = 'none'
        void trackRef.current.offsetWidth
        trackRef.current.style.animation = 'scrollInfinite 12s linear infinite'
      }
    } else {
      if (trackRef.current) {
        trackRef.current.classList.add('static')
        trackRef.current.style.animation = 'none'
        trackRef.current.style.transform = 'translateX(0)'
      }
    }
  }

  const getVisibleSkills = () => {
    if (activeFilter === 'all') {
      return [...skills, ...skills]
    }
    return skills.filter(s => s.category === activeFilter)
  }

  const visibleSkills = getVisibleSkills()

  return (
    <section id="skills" className="skills-section">
      <div className="skills-card">
        <h1 className="skills-title">Skills</h1>
        <div className="skill-filters">
          {filters.map(f => (
            <button
              key={f.value}
              className={`filter-btn${activeFilter === f.value ? ' active' : ''}`}
              onClick={() => handleFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="skills-marquee">
          <div
            ref={trackRef}
            className={`skills-track${activeFilter !== 'all' ? ' static' : ''}`}
          >
            {visibleSkills.map((skill, i) => (
              <SkillItem key={`${skill.title}-${i}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
