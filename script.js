// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Header scroll effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Form validation for contact forms
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        
        let isValid = true;
        
        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(el => el.remove());
        
        // Validate name
        if (name === '') {
            showError('name', 'Name is required');
            isValid = false;
        }
        
        // Validate email
        if (email === '') {
            showError('email', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Please enter a valid email');
            isValid = false;
        }
        
        // Validate phone
        if (phone === '') {
            showError('phone', 'Phone number is required');
            isValid = false;
        }
        
        // Validate message
        if (message === '') {
            showError('message', 'Message is required');
            isValid = false;
        }
        
        if (isValid) {
            // Show success message
            showSuccessMessage();
            contactForm.reset();
        }
    });
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#ef4444';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;
    field.parentElement.appendChild(errorDiv);
    field.style.borderColor = '#ef4444';
}

function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.style.background = '#10b981';
    successDiv.style.color = 'white';
    successDiv.style.padding = '1rem';
    successDiv.style.borderRadius = '0.5rem';
    successDiv.style.marginTop = '1rem';
    successDiv.textContent = 'Thank you! We will contact you soon.';
    contactForm.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Quote calculator
const quoteForm = document.getElementById('quote-form');
if (quoteForm) {
    const fromLocation = document.getElementById('from-location');
    const toLocation = document.getElementById('to-location');
    const planType = document.getElementById('plan-type');
    const estimatedPrice = document.getElementById('estimated-price');
    
    const routePrices = {
        'sharjah-dubai': { daily: 30, weekly: 150, monthly: 450 },
        'international-jlt': { daily: 25, weekly: 130, monthly: 400 },
        'ajman-dubai': { daily: 35, weekly: 170, monthly: 500 },
        'dubai-abudhabi': { daily: 60, weekly: 300, monthly: 800 }
    };
    
    function calculatePrice() {
        const from = fromLocation?.value;
        const to = toLocation?.value;
        const plan = planType?.value;
        
        if (from && to && plan) {
            const route = `${from}-${to}`;
            const prices = routePrices[route] || { daily: 30, weekly: 150, monthly: 450 };
            const price = prices[plan] || 450;
            
            if (estimatedPrice) {
                estimatedPrice.textContent = `AED ${price}`;
            }
        }
    }
    
    fromLocation?.addEventListener('change', calculatePrice);
    toLocation?.addEventListener('change', calculatePrice);
    planType?.addEventListener('change', calculatePrice);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .route-card, .feature-item, .testimonial-card, .pricing-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Active navigation link based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});
