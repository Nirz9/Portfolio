import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About',     href: '#about' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact',   href: '#contact' },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <nav className="container" style={{ minHeight: 82, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 30 }}>
        {/* Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'Manrope, sans-serif', fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.06em', background: 'none', border: 'none', color: 'var(--ink)' }}
        >
          <span style={{ display: 'grid', placeItems: 'center', width: 31, height: 31, background: 'var(--ink)', color: 'var(--accent)', borderRadius: 9, fontFamily: 'monospace', fontSize: 16, letterSpacing: '-0.15em', paddingRight: 3 }}>
            /n
          </span>
          neeraj<span style={{ color: '#7c9e37' }}>.</span>
        </button>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 31 }} className="hidden md:flex">
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              style={{ fontSize: '0.82rem', color: '#586052', background: 'none', border: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--ink)'}
              onMouseLeave={e => e.target.style.color = '#586052'}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="btn btn-dark"
            style={{ minHeight: 42, padding: '9px 17px', fontSize: '0.78rem' }}
          >
            Let's work together <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(v => !v)}
          style={{ border: '1px solid var(--line)', background: 'transparent', borderRadius: 9, width: 44, height: 44, fontSize: 20 }}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden container"
            style={{ paddingBottom: 24, display: 'flex', flexDirection: 'column', gap: 8 }}
          >
            {navLinks.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                style={{ textAlign: 'left', padding: '13px 6px', fontSize: '0.9rem', fontWeight: 500, background: 'none', border: 'none', color: 'var(--ink)', borderBottom: '1px solid var(--line)' }}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#contact')}
              className="btn btn-dark"
              style={{ marginTop: 8 }}
            >
              Let's work together →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
