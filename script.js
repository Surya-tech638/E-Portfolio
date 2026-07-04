// ---------- Mobile Nav Toggle ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const icon = navToggle.querySelector('i');
    if (navLinks.classList.contains('open')) {
        icon.className = 'fas fa-times';
    } else {
        icon.className = 'fas fa-bars';
    }
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.querySelector('i').className = 'fas fa-bars';
    });
});

// ---------- Navbar background on scroll ----------
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        navbar.style.background = 'rgba(11,13,21,0.88)';
        navbar.style.borderBottom = '1px solid rgba(255,255,255,0.06)';
    } else {
        navbar.style.background = 'rgba(11,13,21,0.72)';
        navbar.style.borderBottom = '1px solid rgba(255,255,255,0.04)';
    }
});

// ---------- Contact Form ----------
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Simple email validation
    if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('✅ Thank you, ' + name + '! Your message has been sent.\nI\'ll get back to you soon.');
    form.reset();
});

// ---------- Smooth reveal (optional fade) ----------
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

// Elements to animate
const elements = document.querySelectorAll(
    '.project-card, .cert-card, .skill-card, .stat-card, .edu-card, .contact-link, .about-details .detail-item'
);
elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Also observe the BASD detail box
const basdBox = document.querySelector('#projects .container > div:last-child');
if (basdBox) {
    basdBox.style.opacity = '0';
    basdBox.style.transform = 'translateY(20px)';
    basdBox.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(basdBox);
}

// Initial check for elements already in view
setTimeout(() => {
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
    if (basdBox) {
        const rect = basdBox.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            basdBox.style.opacity = '1';
            basdBox.style.transform = 'translateY(0)';
        }
    }
}, 200);

console.log('🚀 Surya K Portfolio — built with ❤️');
