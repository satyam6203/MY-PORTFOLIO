export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p><i className="fas fa-envelope"></i> satyamkrsingh6203@gmail.com</p>
            <p><i className="fas fa-phone"></i> +91 6203909752</p>
            <p><i className="fas fa-map-marker-alt"></i> Vadodara, Gujarat, India</p>
            <div className="contact-social">
              <a href="https://github.com/satyam6203"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/satyam-kumar-singh-401047358"><i className="fab fa-linkedin"></i></a>
              <a href="https://x.com/SatyamK25379012"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
