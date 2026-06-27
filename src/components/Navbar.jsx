import { useState, useEffect } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(targetId)
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <a href="#hero" className="logo" onClick={(e) => handleNavClick(e, '#hero')}>
          Satyam Singh
        </a>
        <nav className={menuOpen ? 'active' : ''}>
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
          <a href="#certificates" onClick={(e) => handleNavClick(e, '#certificates')}>Certificates</a>
          <a href="#education" onClick={(e) => handleNavClick(e, '#education')}>Education</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      </div>
    </header>
  )
}
