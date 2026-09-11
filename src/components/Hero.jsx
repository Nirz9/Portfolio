import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/* Code lines for the editor visual */
const codeLines = [
  { ln: '01', content: <span style={{ color: '#77876b' }}>// Building intelligence, one model at a time.</span> },
  { ln: '02', content: <><span style={{ color: '#c8b1ed' }}>const</span>{' '}developer = {'{'}</> },
  { ln: '03', content: <>&nbsp;&nbsp;name: <span style={{ color: '#d4f76a' }}>'Neeraj Rajput'</span>,</> },
  { ln: '04', content: <>&nbsp;&nbsp;focus: <span style={{ color: '#d4f76a' }}>'AI & Machine Learning'</span>,</> },
  { ln: '05', content: <>&nbsp;&nbsp;mindset: <span style={{ color: '#d4f76a' }}>'Always iterating'</span>,</> },
  { ln: '06', content: <>&nbsp;&nbsp;goal: <span style={{ color: '#d4f76a' }}>'Intelligent systems'</span></> },
  { ln: '07', content: <>{'}'};</> },
  { ln: '08', content: '' },
  { ln: '09', content: <><span style={{ color: '#c8b1ed' }}>function</span>{' '}<span style={{ color: '#a8c9d9' }}>buildIntelligence</span>() {'{'}</> },
  { ln: '10', content: <>&nbsp;&nbsp;<span style={{ color: '#c8b1ed' }}>return</span> &lt;<span style={{ color: '#d4f76a' }}>AI</span> powered={'{'}<span style={{ color: '#a8c9d9' }}>true</span>{'}'} /&gt;;</> },
  { ln: '11', content: <>{'}'};</> },
];

/* Use IntersectionObserver for reveal effect */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Hero() {
  useReveal();

  return (
    <section
      style={{ position: 'relative', overflow: 'hidden', padding: '86px 0 72px' }}
      aria-labelledby="hero-title"
    >
      {/* Radial gradient blob */}
      <div style={{
        content: '', position: 'absolute', width: 570, height: 570,
        right: -200, top: -130,
        background: 'radial-gradient(circle, rgba(212,237,172,0.44), transparent 68%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 55, alignItems: 'center' }}>
        {/* Copy */}
        <div>
          <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '8px 12px', border: '1px solid #dce5d2', background: '#eef3e8', borderRadius: 999, fontSize: '0.69rem', color: '#4f6337', marginBottom: 27 }}>
            <span className="status-dot" />
            Open to opportunities · AI & ML Developer
          </div>

          <h1 id="hero-title" className="reveal" style={{ '--delay': '80ms', marginBottom: 24, color: 'var(--ink)' }}>
            Ideas into<br />
            <span style={{ color: '#7c866f' }}>intelligence</span>.
          </h1>

          <p className="reveal" style={{ '--delay': '160ms', color: 'var(--muted)', maxWidth: 410, fontSize: '1rem', marginBottom: 29 }}>
            Hey, I'm Neeraj — a Computer Science student turning complex problems into intelligent, data-driven solutions with AI and Machine Learning. Built with care. Made to explore.
          </p>

          <div className="reveal" style={{ '--delay': '240ms', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}>
            <button className="btn btn-dark" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore my projects <span className="arrow">→</span>
            </button>
            <button className="btn btn-outline" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              My approach ↓
            </button>
            <a href="#" className="btn btn-outline" style={{ gap: 8 }}>
              Download CV
            </a>
          </div>

          <p className="reveal" style={{ '--delay': '300ms', display: 'flex', alignItems: 'center', gap: 9, marginTop: 8, fontSize: '0.72rem', color: 'var(--muted)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" style={{ width: 15, height: 15 }}>
              <path d="m8 5-7 7 7 7m8-14 7 7-7 7M14 3l-4 18"/>
            </svg>
            For the curious. The builders. The detail people.
          </p>
        </div>

        {/* Visual: code editor */}
        <div className="reveal" style={{ '--delay': '200ms', position: 'relative', padding: '35px 0 38px', minWidth: 0 }}>
          {/* Grid pattern */}
          <div style={{
            position: 'absolute', inset: -35,
            backgroundImage: 'linear-gradient(#929e7812 1px, transparent 1px), linear-gradient(90deg, #929e7812 1px, transparent 1px)',
            backgroundSize: '29px 29px',
            maskImage: 'radial-gradient(ellipse, black 35%, transparent 73%)',
          }} aria-hidden="true" />

          {/* Editor */}
          <div className="editor" aria-label="Illustrative code editor">
            <div className="editor-bar" aria-hidden="true">
              <span className="window-dot" style={{ background: '#a77e68' }} />
              <span className="window-dot" style={{ background: '#b6a774' }} />
              <span className="window-dot" />
              <span style={{ margin: '0 auto', color: '#8e9b84', font: '10px monospace', paddingRight: 35 }}>
                neeraj-portfolio.tsx
              </span>
            </div>
            <div className="code" aria-label="Neeraj's developer identity as code">
              {codeLines.map(({ ln, content }) => (
                <div key={ln} style={{ display: 'flex', whiteSpace: 'pre' }}>
                  <span style={{ color: '#58614f', userSelect: 'none', width: 30, flexShrink: 0 }}>{ln}</span>
                  <span>{content}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating tag */}
          <div style={{
            position: 'absolute', top: 15, right: 3, padding: '11px 15px', borderRadius: 10,
            border: '1px solid white', background: 'rgba(255,255,255,0.875)', backdropFilter: 'blur(12px)',
            boxShadow: 'var(--shadow)', font: '10px monospace', transform: 'rotate(5deg)',
          }} aria-hidden="true">
            <span style={{ color: '#698235' }}>✓</span> AI-powered solutions.
          </div>

          {/* Preview card */}
          <div className="preview-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--muted)', font: '9px monospace', marginBottom: 18 }}>
              <span>MODEL PREVIEW</span>
              <span style={{ color: '#698235', background: '#edf5e0', padding: '4px 6px', borderRadius: 4 }}>Active</span>
            </div>
            <div style={{ display: 'grid', placeItems: 'center', width: 37, height: 37, borderRadius: 11, background: 'var(--accent)', fontSize: 21, marginBottom: 15 }}>🧠</div>
            <h3 style={{ fontSize: '1rem', marginBottom: 7, fontFamily: 'Manrope, sans-serif' }}>Less noise. More insight.</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.7rem', lineHeight: 1.6, margin: 0 }}>
              A well-trained model sees patterns humans miss.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
