document.addEventListener('DOMContentLoaded', () => {

    // --- Hamburger Menu Logic ---
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            const isNavOpen = hamburger.classList.toggle('open');
            mobileNav.style.display = isNavOpen ? 'block' : 'none';
        });
    }

    // --- Accordion Logic ---
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const button = item.querySelector('.accordion-button');
        const content = item.querySelector('.accordion-content');

        if (button && content) {
            button.addEventListener('click', () => {
                const isOpen = button.classList.toggle('open');
                
                if (isOpen) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    content.style.paddingTop = '1rem';
                    content.style.paddingBottom = '1.5rem';
                } else {
                    content.style.maxHeight = '0';
                    content.style.paddingTop = '0';
                    content.style.paddingBottom = '0';
                }
            });
        }
    });

    // --- Intersection Observer for Animations ---
    const animatedElements = document.querySelectorAll('.animated');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // --- Smart Sticky Header ---
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const isNavOpen = hamburger && hamburger.classList.contains('open');

        if (currentScrollY > lastScrollY && currentScrollY > 100 && !isNavOpen) {
            // Scrolling down
            header.classList.add('header-hidden');
        } else {
            // Scrolling up or at the top
            header.classList.remove('header-hidden');
        }
        lastScrollY = currentScrollY;
    });

});
