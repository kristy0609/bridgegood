// BRIDGEGOOD AI for Social Good Hackathon
// Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for empty hash
            if (href === '#' || href === '') {
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Background shapes hover in place (no parallax effect)
    
    // Add scroll effect to navbar
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Update navbar styling when scrolled
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.06)';
            navbar.style.padding = '12px 0';
            navbar.classList.add('scrolled');
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.03)';
            navbar.style.padding = '20px 0';
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }, { passive: true });
    
    // Animate elements on scroll
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
    
    // Observe all animated cards and elements
    const animatedElements = document.querySelectorAll('.bento-tile, .expect-card, .meet-card, .pillar-card, .criteria-card, .role-card, .timeline-item, .tier-card, .faq-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Mobile menu toggle (if needed in future)
    const createMobileMenu = () => {
        const navLinks = document.querySelector('.nav-links');
        if (window.innerWidth <= 768 && navLinks) {
            // Add mobile menu functionality here if needed
        }
    };
    
    window.addEventListener('resize', createMobileMenu);
    createMobileMenu();
    
    // Add active state to navigation links based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    const highlightNav = () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            
            if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.style.color = 'var(--primary-color)';
            } else if (navLink) {
                navLink.style.color = '';
            }
        });
    };
    
    window.addEventListener('scroll', highlightNav);
    
    // Form validation (if registration form is added)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form validation and submission logic here
            console.log('Form submitted');
        });
    });
    
    // Horizontal Scroll Arrows for Submissions Section
    const scrollWrapper = document.querySelector('.submissions-scroll-wrapper');
    const leftArrow = document.querySelector('.scroll-arrow-left');
    const rightArrow = document.querySelector('.scroll-arrow-right');
    
    if (scrollWrapper && leftArrow && rightArrow) {
        const updateArrowVisibility = () => {
            const scrollLeft = scrollWrapper.scrollLeft;
            const scrollWidth = scrollWrapper.scrollWidth;
            const clientWidth = scrollWrapper.clientWidth;
            
            // Show/hide left arrow
            if (scrollLeft > 10) {
                leftArrow.classList.add('visible');
            } else {
                leftArrow.classList.remove('visible');
            }
            
            // Show/hide right arrow
            if (scrollLeft < scrollWidth - clientWidth - 10) {
                rightArrow.classList.add('visible');
            } else {
                rightArrow.classList.remove('visible');
            }
        };
        
        // Initial check
        updateArrowVisibility();
        
        // Update on scroll
        scrollWrapper.addEventListener('scroll', updateArrowVisibility);
        
        // Update on window resize
        window.addEventListener('resize', updateArrowVisibility);
        
        // Arrow click handlers - scroll by 3 cards
        // Card width is 380px + gap of 24px (var(--spacing-lg)) = 404px per card
        // 3 cards = 1212px
        leftArrow.addEventListener('click', () => {
            scrollWrapper.scrollBy({
                left: -1212,
                behavior: 'smooth'
            });
        });
        
        rightArrow.addEventListener('click', () => {
            scrollWrapper.scrollBy({
                left: 1212,
                behavior: 'smooth'
            });
        });
    }
    
    // Console message
    console.log('%c🌉 BRIDGEGOOD - AI for Social Good Hackathon', 'font-size: 16px; font-weight: bold; color: #FF6B35;');
    console.log('%c#DesignForSocialGood', 'font-size: 12px; color: #004E89;');
});

