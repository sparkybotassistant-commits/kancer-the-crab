// ===== Mobile Menu Toggle =====
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const body = document.body;
    
    // Create mobile menu
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
        <button class="mobile-menu-close" aria-label="Close menu">×</button>
        <a href="#services" class="mobile-nav-link">Services</a>
        <a href="#work" class="mobile-nav-link">Work</a>
        <a href="#process" class="mobile-nav-link">Process</a>
        <a href="#contact" class="mobile-nav-link">Contact</a>
    `;
    body.appendChild(mobileMenu);
    
    // Toggle menu
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        body.style.overflow = 'hidden';
    });
    
    // Close menu
    const closeBtn = mobileMenu.querySelector('.mobile-menu-close');
    closeBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        body.style.overflow = '';
    });
    
    // Close on link click
    mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            body.style.overflow = '';
        });
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            body.style.overflow = '';
        }
    });
});

// ===== Header Scroll Effect =====
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.borderColor = 'rgba(196, 18, 48, 0.3)';
        } else {
            header.style.borderColor = 'var(--border)';
        }
    }, { passive: true });
});

// ===== Scroll Animations (Snappy) =====
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe section containers
    const sections = document.querySelectorAll('section > .container');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    // Observe cards
    const cards = document.querySelectorAll('.service-card, .trust-item, .step');
    cards.forEach((card) => {
        card.classList.add('fade-in');
        observer.observe(card);
    });
    
    // Observe work links
    const workLinks = document.querySelectorAll('.work-link');
    workLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        link.style.transition = `opacity 0.4s ease ${index * 0.1}s, transform 0.4s ease ${index * 0.1}s`;
        
        const linkObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    linkObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        linkObserver.observe(link);
    });
});

// ===== Contact Form =====
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const business = document.getElementById('business').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        
        // Build email body
        let emailBody = `Hi Michael,%0D%0A%0D%0A`;
        emailBody += `I'm interested in your ${service} services.%0D%0A%0D%0A`;
        if (business) {
            emailBody += `Business: ${business}%0D%0A`;
        }
        emailBody += `%0D%0A${message || 'Please get back to me with more details.'}%0D%0A%0D%0A`;
        emailBody += `Thanks,%0D%0A${name}`;
        
        // Get email from contact method
        const emailLink = document.querySelector('.contact-method[href^="mailto"]');
        const emailAddress = emailLink ? emailLink.getAttribute('href').replace('mailto:', '') : '[INSERT_EMAIL]';
        
        if (emailAddress === '[INSERT_EMAIL]') {
            alert('Please update the email address in the contact section first. Look for [INSERT_EMAIL] in the HTML.');
            return;
        }
        
        window.location.href = `mailto:${emailAddress}?subject=Design Project Inquiry from ${name}&body=${emailBody}`;
    });
});

// ===== Smooth Scroll for Anchor Links =====
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ===== Current Year in Footer =====
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// ===== Active Navigation Link =====
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
});
