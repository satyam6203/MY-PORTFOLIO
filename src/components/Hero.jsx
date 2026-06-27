export default function Hero() {
  const scrollTo = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h2>Hello, I'm <span>Satyam Kumar Singh</span></h2>
          <p>
            I'm a skilled <strong>Java Full Stack Developer</strong> with
            expertise in building scalable web applications using Java and
            Spring Boot.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-secondary" onClick={(e) => scrollTo(e, '#projects')}>
              Projects
            </a>
            <a
              href="/Document/Satyam-Resume (3).pdf"
              download="Satyam_Singh_CV.pdf"
              className="btn btn-primary"
            >
              Download CV
            </a>
          </div>
          <div className="social-links">
            <a href="https://github.com/satyam6203"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/satyam-kumar-singh-401047358/"><i className="fab fa-linkedin"></i></a>
            <a href="https://x.com/SatyamK25379012"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/satyam.jpg" alt="Satyam Singh" />
          <div className="tech-icons">
            <i className="fab fa-java"></i>
            <i className="fab fa-js"></i>
            <i className="fas fa-database"></i>
          </div>
        </div>
      </div>
    </section>
  )
}
