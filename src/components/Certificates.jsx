import { useState, useEffect } from 'react'

const certificates = [
  {
    image: '/images/java.jpg',
    alt: 'Java Programming Certificate',
    title: 'Java Full Stack',
    issuer: 'Issued by Code For Success',
  },
  {
    image: '/images/html.jpg',
    alt: 'Spring Boot Certificate',
    title: 'HTML + CSS',
    issuer: 'Issued by Pearson',
  },
]

export default function Certificates() {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (index) => {
    setCurrentIndex(index)
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalOpen(false)
    document.body.style.overflow = ''
  }

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + certificates.length) % certificates.length)
  }

  const next = () => {
    setCurrentIndex((currentIndex + 1) % certificates.length)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalOpen) return
      if (e.key === 'Escape') closeModal()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [modalOpen, currentIndex])

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2>Certificates</h2>
        <div className="certificates-container">
          {certificates.map((cert, index) => (
            <div className="certificate-card" key={index} onClick={() => openModal(index)}>
              <div className="certificate-img-container">
                <img src={cert.image} alt={cert.alt} loading="lazy" />
              </div>
              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className={`certificate-modal${modalOpen ? ' active' : ''}`} onClick={(e) => {
          if (e.target === e.currentTarget) closeModal()
        }}>
          <div className="modal-content">
            <img src={certificates[currentIndex].image} alt={certificates[currentIndex].title} />
            <button className="close-modal" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-nav">
              <button className="modal-prev" onClick={prev}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="modal-next" onClick={next}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <div className="certificate-counter">
              {currentIndex + 1} / {certificates.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
