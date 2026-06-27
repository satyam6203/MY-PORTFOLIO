const education = [
  {
    date: '2015 - 2022',
    image: '/images/dmps.png',
    alt: 'Delhi Model Public School',
    school: 'Delhi Model Public School',
    detail: '10th Grade - 89%',
  },
  {
    date: '2022 - 2024',
    image: '/images/dmps.png',
    alt: 'Delhi Model Public School',
    school: 'Delhi Model Public School',
    detail: '12th Grade - 80%',
  },
  {
    date: '2024 - Present',
    image: '/images/pu.jpg',
    alt: 'Parul University',
    school: 'Parul University',
    detail: 'B.Tech in Computer Science - Current CGPA: 8.71',
  },
]

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-date">{edu.date}</div>
              <div className="timeline-content">
                <img
                  src={edu.image}
                  alt={edu.alt}
                  className="education-img"
                  loading="lazy"
                />
                <h3>{edu.school}</h3>
                <p>{edu.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
