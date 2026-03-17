document.addEventListener('DOMContentLoaded', () => {

  // --- Scroll Reveal Animations ---
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  });

  // Observe all animated elements
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .img-reveal, .fade-in')
    .forEach(el => revealObserver.observe(el));


  // --- Navbar Scroll Effect ---
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const updateNavbar = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        // Only remove scrolled on pages with transparent nav (home page)
        if (!navbar.dataset.fixed) {
          navbar.classList.remove('scrolled');
        }
      }
    };

    // If navbar already has .scrolled class in HTML, mark it as fixed
    if (navbar.classList.contains('scrolled')) {
      navbar.dataset.fixed = 'true';
    }

    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();
  }


  // --- Mobile Menu Toggle ---
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');

      // Animate hamburger to X
      if (navLinks.classList.contains('active')) {
        mobileMenuBtn.innerHTML = '&#10005;';
      } else {
        mobileMenuBtn.innerHTML = '&#9776;';
      }
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '&#9776;';
      });
    });
  }


  // --- Smooth Parallax for Hero Image ---
  const heroImage = document.querySelector('.hero-image img');
  if (heroImage) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        heroImage.style.transform = `scale(1.05) translateY(${scrolled * 0.08}px)`;
      }
    }, { passive: true });
  }

});
