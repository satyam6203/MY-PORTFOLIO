// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav');
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Scroll to top button
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Animate skills on scroll
    const skillItems = document.querySelectorAll('.skill-category li');
    
    function animateSkills() {
        skillItems.forEach(item => {
            const percent = item.getAttribute('data-percent');
            item.style.setProperty('--skill-percent', percent + '%');
            item.classList.add('show');
        });
    }
    
    // Intersection Observer for skills animation
    const skillsSection = document.querySelector('#skills');
    const observerOptions = {
        threshold: 0.2
    };
    
    const skillsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    skillsObserver.observe(skillsSection);
    
    // Certificate Modal functionality
    const certificateCards = document.querySelectorAll('.certificate-card');
    const certificateModal = document.querySelector('.certificate-modal');
    const modalContent = document.querySelector('.modal-content img');
    const closeModalBtn = document.querySelector('.close-modal');
    const modalPrevBtn = document.querySelector('.modal-prev');
    const modalNextBtn = document.querySelector('.modal-next');
    const certificateCounter = document.querySelector('.certificate-counter');
    
    let currentCertificateIndex = 0;
    const certificates = Array.from(certificateCards).map(card => {
        return {
            imgSrc: card.querySelector('img').getAttribute('src'),
            title: card.querySelector('h3').textContent,
            issuer: card.querySelector('p').textContent
        };
    });
    
    certificateCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            currentCertificateIndex = index;
            openCertificateModal(index);
        });
    });
    
    function openCertificateModal(index) {
        const certificate = certificates[index];
        modalContent.setAttribute('src', certificate.imgSrc);
        modalContent.setAttribute('alt', certificate.title);
        certificateCounter.textContent = `${index + 1} / ${certificates.length}`;
        certificateModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeCertificateModal() {
        certificateModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function showPrevCertificate() {
        currentCertificateIndex = (currentCertificateIndex - 1 + certificates.length) % certificates.length;
        openCertificateModal(currentCertificateIndex);
    }
    
    function showNextCertificate() {
        currentCertificateIndex = (currentCertificateIndex + 1) % certificates.length;
        openCertificateModal(currentCertificateIndex);
    }
    
    closeModalBtn.addEventListener('click', closeCertificateModal);
    modalPrevBtn.addEventListener('click', showPrevCertificate);
    modalNextBtn.addEventListener('click', showNextCertificate);
    
    // Close modal when clicking outside the content
    certificateModal.addEventListener('click', function(e) {
        if (e.target === certificateModal) {
            closeCertificateModal();
        }
    });
    
    // Keyboard navigation for modal
    document.addEventListener('keydown', function(e) {
        if (certificateModal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeCertificateModal();
            } else if (e.key === 'ArrowLeft') {
                showPrevCertificate();
            } else if (e.key === 'ArrowRight') {
                showNextCertificate();
            }
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.hero-content, .hero-image, .about-content, .skill-category, .project-card, .certificate-card, .timeline-item, .contact-info, .contact-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation
    document.querySelectorAll('.hero-content, .hero-image, .about-content, .skill-category, .project-card, .certificate-card, .timeline-item, .contact-info, .contact-form').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
});