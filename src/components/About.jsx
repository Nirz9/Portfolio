/* About section — "Good on the surface. Better underneath." style */
import { useReveal } from '../hooks/useReveal';

const interests = [
  'Artificial Intelligence', 'Machine Learning', 'Deep Learning',
  'Data Science', 'Neural Networks', 'Intelligent Automation',
];

const infoItems = [
  { label: 'Currently', value: 'B.Tech Computer Science (AI/ML)' },
  { label: 'Location', value: 'India · Open to Remote' },
  { label: 'Focus',    value: 'Building real-world AI systems' },
  { label: 'Goal',     value: 'AI/ML Engineer · Research & Industry' },
];

export default function About() {
  useReveal();

  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        {/* Header */}
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">The approach</div>
            <h2 id="about-title">Good on the surface.<br />Better underneath.</h2>
          </div>
          <p>Because the best AI systems don't just work — they're built with intention, precision, and a deep understanding of the problem they're solving.</p>
        </div>

        {/* Two-column */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
          {/* Bio */}
          <div>
            <p className="reveal" style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: 20 }}>
              Hi, I'm <strong style={{ color: 'var(--ink)' }}>Neeraj Rajput</strong> — a Computer Science student with a deep passion for Artificial Intelligence and Machine Learning. I believe technology has the power to transform how the world works, and I'm building toward that.
            </p>
            <p className="reveal" style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: 20 }}>
              My journey started with a curiosity about how machines can learn to make decisions. Since then I've immersed myself in building real-world intelligent systems — from demand forecasting models to email security classifiers — and I haven't looked back.
            </p>
            <p className="reveal" style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: 32 }}>
              I thrive at the intersection of research and engineering: understanding theory deeply and applying it to create practical, impactful solutions. Always learning. Always building.
            </p>

            {/* Interests */}
            <div className="reveal">
              <p style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--muted)', marginBottom: 14 }}>
                Areas of interest
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {interests.map(i => (
                  <span key={i} className="tag-light">{i}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Info card */}
          <div className="reveal" style={{ '--delay': '120ms' }}>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 20, padding: 32 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28, paddingBottom: 24, borderBottom: '1px solid var(--line)' }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--accent)', display: 'grid', placeItems: 'center', fontSize: 24, fontWeight: 800, fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.05em' }}>
                  NR
                </div>
                <div>
                  <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.04em' }}>Neeraj Rajput</div>
                  <div style={{ fontSize: '0.75rem', color: '#658626', marginTop: 3 }}>AI & ML Developer</div>
                </div>
              </div>

              {infoItems.map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, padding: '13px 0', borderBottom: '1px solid var(--line)' }}>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#82936b', flexShrink: 0 }}>{label}</span>
                  <span style={{ fontSize: '0.83rem', fontWeight: 600, textAlign: 'right', color: 'var(--ink)' }}>{value}</span>
                </div>
              ))}

              <div style={{ marginTop: 24, padding: '16px', background: '#f3f9e8', borderRadius: 12, border: '1px solid #dce8c4' }}>
                <p style={{ margin: 0, fontSize: '0.82rem', color: '#4f6337', lineHeight: 1.7, fontStyle: 'italic' }}>
                  "The goal isn't to replace humans — it's to build AI that amplifies human potential and solves what we couldn't alone."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
