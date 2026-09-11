/* FinalCTA — dark cta-box matching HTML's CTA section */
import { useReveal } from '../hooks/useReveal';

export default function FinalCTA() {
  useReveal();

  return (
    <section className="section" style={{ paddingBottom: 0 }} aria-labelledby="cta-title">
      <div className="container" style={{ paddingBottom: 80 }}>
        <div
          className="reveal"
          style={{
            background: 'var(--dark)',
            color: '#f5f7f0',
            borderRadius: 28,
            padding: '88px 72px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Radial glow */}
          <div style={{
            position: 'absolute', width: 500, height: 500,
            right: -150, top: -150,
            background: 'radial-gradient(circle, rgba(212,247,106,0.08), transparent 65%)',
            pointerEvents: 'none',
          }} aria-hidden="true" />

          <div className="eyebrow" style={{ justifyContent: 'center', color: '#a7b39b' }}>Ready to start</div>
          <h2 id="cta-title" style={{ color: '#f5f7f0', marginBottom: 20 }}>
            Have an idea?<br />Let's turn it into<br />
            <span style={{ color: 'var(--accent)' }}>something intelligent.</span>
          </h2>
          <p style={{ color: '#97a18f', maxWidth: 480, margin: '0 auto 36px', fontSize: '1rem', lineHeight: 1.75 }}>
            I'm always excited to work on meaningful projects, explore new ideas, and collaborate with forward-thinking people. Let's build the future together.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 48 }}>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-lime"
            >
              Start a conversation <span className="arrow">→</span>
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn"
              style={{ border: '1px solid #2c3427', color: '#a7b39b', background: 'transparent' }}
            >
              Explore my work →
            </button>
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px 60px', paddingTop: 36, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            {[
              { value: '3+', label: 'AI Projects' },
              { value: '97%+', label: 'Model Accuracy' },
              { value: '5+', label: 'Certifications' },
              { value: '24h', label: 'Response Time' },
            ].map(({ value, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.05em', color: 'var(--accent)' }}>{value}</div>
                <div style={{ fontSize: '0.7rem', color: '#738066', marginTop: 4, fontFamily: 'monospace' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
