/* Footer — dark footer matching HTML's footer-dark style */
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Mail } from 'lucide-react';

const navLinks = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Education',    href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',      href: '#contact' },
];

const socials = [
  { icon: <GithubIcon size={18} />,   href: 'https://github.com/Nirz9',   label: 'GitHub' },
  { icon: <LinkedinIcon size={18} />, href: 'https://linkedin.com',        label: 'LinkedIn' },
  { icon: <Mail size={18} />,         href: 'mailto:neeraj@email.com',     label: 'Email' },
];

export default function Footer() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer-dark" style={{ paddingTop: 60, paddingBottom: 40 }}>
      <div className="container">
        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: 32, paddingBottom: 40, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          {/* Brand */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'Manrope, sans-serif', fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.06em', background: 'none', border: 'none', color: '#f5f7f0', marginBottom: 14, cursor: 'pointer' }}
            >
              <span style={{ display: 'grid', placeItems: 'center', width: 31, height: 31, background: 'var(--accent)', color: 'var(--dark)', borderRadius: 9, fontFamily: 'monospace', fontSize: 16, letterSpacing: '-0.15em', paddingRight: 3 }}>
                /n
              </span>
              neeraj<span style={{ color: 'var(--accent)' }}>.</span>
            </button>
            <p style={{ margin: 0, fontSize: '0.82rem', color: '#738066', maxWidth: 260, lineHeight: 1.7 }}>
              AI & Machine Learning Developer building intelligent solutions that solve real-world problems.
            </p>
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 28px' }}>
            {navLinks.map(({ label, href }) => (
              <button
                key={label}
                onClick={() => scrollTo(href)}
                style={{ fontSize: '0.82rem', color: '#738066', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#f5f7f0'}
                onMouseLeave={e => e.target.style.color = '#738066'}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div style={{ display: 'flex', gap: 10 }}>
            {socials.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{ width: 40, height: 40, borderRadius: 10, border: '1px solid rgba(255,255,255,0.08)', display: 'grid', placeItems: 'center', color: '#738066', transition: 'color 0.2s, border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#f5f7f0'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#738066'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, paddingTop: 28 }}>
          <p style={{ margin: 0, fontSize: '0.75rem', color: '#4a5242' }}>
            © {new Date().getFullYear()} Neeraj Rajput · Built with React & Tailwind CSS · AI & ML Developer
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: '0.75rem', color: '#4a5242', background: 'none', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 8, padding: '8px 14px', cursor: 'pointer', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#a7b39b'}
            onMouseLeave={e => e.currentTarget.style.color = '#4a5242'}
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
