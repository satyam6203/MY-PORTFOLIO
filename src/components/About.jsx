export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Currently pursuing B.Tech degree in Computer Science and
              Engineering at Parul University, I specialize in many programming
              languages such as C, Java, Python, JavaScript and Java Full Stack
              development.
            </p>
            <p>
              I'm passionate about creating efficient, scalable web applications
              with clean code and intuitive user interfaces.
            </p>
            <div className="experience">
              <div className="exp-item">
                <h3>2+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="exp-item">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="/images/satyam.jpg" alt="About Me" />
          </div>
        </div>
      </div>
    </section>
  )
}
