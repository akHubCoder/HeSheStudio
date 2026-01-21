document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links a');
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Toggle Mobile Menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Theme Toggle Logic
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            const icon = themeBtn.querySelector('i');

            if (body.classList.contains('light-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                // Optional: Save preference to localStorage
                // localStorage.setItem('theme', 'light');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                // localStorage.setItem('theme', 'dark');
            }

            // Trigger scroll event to update header bg immediately
            window.dispatchEvent(new Event('scroll'));
        });
    }

    // Navbar Scroll Effect (Dynamic based on theme)
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        const isLight = body.classList.contains('light-mode');

        if (window.scrollY > 50) {
            if (isLight) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            } else {
                header.style.background = 'rgba(10, 10, 10, 0.95)';
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
            }
        } else {
            // Reset to transparent/var defaults handled by CSS mostly, but we override here
            if (isLight) {
                header.style.background = 'rgba(255, 255, 255, 0.9)'; // Slightly transparent at top
                header.style.boxShadow = 'none';
            } else {
                header.style.background = 'rgba(10, 10, 10, 0.8)';
                header.style.boxShadow = 'none';
            }
        }
    });
});
