import { useEffect } from 'react';

/* Shared reveal hook — runs once after mount */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');

    // Fallback: no IntersectionObserver support → show everything
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('visible'));
      return;
    }

    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach(el => {
      // Already in the viewport on load → show immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('visible');
      } else {
        obs.observe(el);
      }
    });

    return () => obs.disconnect();
  }, []); // ← run only once after mount
}
