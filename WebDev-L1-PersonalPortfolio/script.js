// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light')) {
        body.classList.replace('light', 'dark');
        themeToggle.textContent = '☀️ Light';
    } else {
        body.classList.replace('dark', 'light');
        themeToggle.textContent = '🌙 Dark';
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navbar shadow on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Skill bars animation on scroll
const skillFills = document.querySelectorAll('.skill-fill');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transition = 'width 1s ease';
        }
    });
}, { threshold: 0.5 });

skillFills.forEach(fill => observer.observe(fill));