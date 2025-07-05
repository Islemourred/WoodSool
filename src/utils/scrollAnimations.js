// Simple scroll animation utility
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  // Observe all elements with scroll-animate class
  const animatedElements = document.querySelectorAll('.scroll-animate, .scroll-animate-stagger');
  animatedElements.forEach(el => observer.observe(el));

  return observer;
}; 