/* Projects — Interactive showcase matching the HTML dashboard switcher concept */
import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const projects = [
  {
    id: 0,
    name: 'canteen',
    category: '01 / AI · DEMAND PREDICTION',
    title: 'Meet your smarter canteen.',
    description: 'An intelligent system that uses machine learning to predict daily food demand — reducing waste, optimising inventory, and improving resource allocation through data-driven decision making.',
    heading: 'Predict. Reduce. Optimise.',
    subtitle: 'A data-driven canteen intelligence system.',
    labels: ['Accuracy', 'Waste Reduced', 'Daily Predictions'],
    values: ['92%', '35%', '3+'],
    chart: 'Weekly demand overview',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
    bars: [40, 55, 48, 70, 58, 82, 65, 88, 72, 95, 80, 96],
    github: 'https://github.com/Nirz9',
  },
  {
    id: 1,
    name: 'inventory',
    category: '02 / AI · BUSINESS INTELLIGENCE',
    title: 'A little insight. A bigger operation.',
    description: 'A smart inventory management solution leveraging predictive analytics to monitor stock levels, forecast demand, trigger reorders, and minimise operational inefficiency across the supply chain.',
    heading: 'Smart stock. Smarter decisions.',
    subtitle: 'AI-powered inventory at every level.',
    labels: ['Cost Saved', 'Stock Accuracy', 'Alerts/Day'],
    values: ['30%', '97%', '12+'],
    chart: 'Stock level overview',
    tags: ['Python', 'TensorFlow', 'SQL', 'REST API'],
    bars: [55, 38, 65, 48, 80, 58, 90, 72, 84, 62, 92, 85],
    github: 'https://github.com/Nirz9',
  },
  {
    id: 2,
    name: 'spam',
    category: '03 / ML · CYBERSECURITY',
    title: 'Find the signal in the noise.',
    description: 'An NLP-powered email security system that detects spam and phishing attempts with high precision using ensemble machine learning and advanced text feature extraction.',
    heading: 'Detect. Classify. Protect.',
    subtitle: 'Your inbox, intelligently defended.',
    labels: ['Detection Accuracy', 'False Positives', 'Emails Scanned'],
    values: ['97%+', '<0.1%', '1M+'],
    chart: 'Detection accuracy overview',
    tags: ['Python', 'NLTK', 'TF-IDF', 'Random Forest'],
    bars: [62, 50, 74, 84, 65, 92, 75, 88, 68, 95, 82, 97],
    github: 'https://github.com/Nirz9',
  },
];

function DashboardPreview({ project }) {
  const bars = project.bars || [];
  return (
    <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid #e0e5d9', background: '#f7f8f4', color: 'var(--ink)' }}>
      {/* Browser bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#e9ece3', height: 36, padding: '0 13px' }}>
        <i style={{ width: 6, height: 6, background: '#bdc6b4', borderRadius: '50%' }} />
        <i style={{ width: 6, height: 6, background: '#bdc6b4', borderRadius: '50%' }} />
        <i style={{ width: 6, height: 6, background: '#bdc6b4', borderRadius: '50%' }} />
        <span style={{ font: '9px monospace', margin: '0 auto', color: '#75816a', paddingRight: 24 }}>
          {project.name} / overview
        </span>
      </div>

      {/* Dashboard */}
      <div style={{ display: 'grid', gridTemplateColumns: '122px 1fr', minHeight: 348 }}>
        {/* Sidebar */}
        <div style={{ borderRight: '1px solid #e0e5d9', padding: '23px 14px' }}>
          <span style={{ display: 'block', fontWeight: 800, fontSize: 14, letterSpacing: '-0.05em', marginBottom: 29, fontFamily: 'Manrope, sans-serif' }}>
            ⚡ {project.name}
          </span>
          {['Overview', 'Predictions', 'Insights', 'Settings'].map((nav, i) => (
            <span key={nav} style={{ display: 'block', fontSize: 9, color: i === 0 ? '#37482a' : '#7b8472', marginBottom: 9, padding: 8, borderRadius: 5, background: i === 0 ? '#e6efda' : 'transparent' }}>
              {nav}
            </span>
          ))}
        </div>

        {/* Main */}
        <div style={{ padding: '25px 22px', minWidth: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 23, gap: 10 }}>
            <div>
              <h3 style={{ fontSize: 15, margin: '0 0 5px', fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.03em' }}>{project.heading}</h3>
              <p style={{ fontSize: 9, color: 'var(--muted)', margin: 0 }}>{project.subtitle}</p>
            </div>
            <div style={{ width: 27, height: 27, borderRadius: '50%', background: '#dbe7c6', display: 'grid', placeItems: 'center', fontSize: 9, flexShrink: 0 }}>N</div>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 9, marginBottom: 16 }}>
            {project.labels.map((label, i) => (
              <div key={label} style={{ border: '1px solid #e0e5d9', borderRadius: 8, padding: '13px 10px', background: 'white' }}>
                <small style={{ fontSize: 8, color: 'var(--muted)', display: 'block', marginBottom: 8 }}>{label}</small>
                <strong style={{ fontFamily: 'Manrope, sans-serif', fontSize: 19, letterSpacing: '-0.05em' }}>{project.values[i]}</strong>
                <em style={{ fontSize: 7, fontStyle: 'normal', display: 'block', marginTop: 5, color: '#74913e' }}>Target metric</em>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div style={{ border: '1px solid #e0e5d9', borderRadius: 8, background: 'white', padding: '15px 14px 10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, marginBottom: 13 }}>
              <strong>{project.chart}</strong>
              <span style={{ fontSize: 7, color: 'var(--muted)' }}>ILLUSTRATIVE DATA</span>
            </div>
            <div style={{ height: 90, display: 'flex', alignItems: 'flex-end', gap: 7, borderBottom: '1px solid #dce3d3', background: 'repeating-linear-gradient(to top, transparent 0 29px, #f0f2eb 29px 30px)' }}>
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="bar"
                  style={{ '--h': h + '%', background: i % 3 === 2 ? '#8ca95b' : '#d8e7bb' }}
                />
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 6, color: '#88927d', marginTop: 8 }}>
              {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(d => <span key={d}>{d}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  useReveal();
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section className="section showcase" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow" style={{ color: '#a7b39b' }}>
              <span style={{ background: 'var(--accent)' }} />
              Selected work
            </div>
            <h2 id="projects-title" style={{ color: '#f5f7f0' }}>Intelligence<br />in practice.</h2>
          </div>
          <p style={{ color: '#97a18f' }}>Real-world AI projects demonstrating practical application of machine learning. Interactive previews — no signup required.</p>
        </div>

        {/* Controls */}
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, marginBottom: 24, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: 5, padding: 5, background: '#1b211a', border: '1px solid #2c3427', borderRadius: 11 }}>
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className="tab"
                aria-pressed={active === i}
                style={active === i ? { background: 'var(--accent)', color: 'var(--ink)' } : {}}
              >
                {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
              </button>
            ))}
          </div>
          <span style={{ font: '0.65rem monospace', color: '#87927c' }}>Interactive preview · AI portfolio</span>
        </div>

        {/* Project layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 32, alignItems: 'center' }}>
          <div className="reveal">
            <DashboardPreview project={project} />
          </div>

          <div className="reveal project-info" style={{ '--delay': '100ms', padding: '22px 10px' }}>
            <span style={{ color: '#738066', font: '0.73rem monospace', display: 'block', marginBottom: 24 }}>
              {project.category}
            </span>
            <h3 style={{ fontSize: '2rem', marginBottom: 14, color: '#f5f7f0', fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.04em' }}>
              {project.title}
            </h3>
            <p style={{ color: '#a1ac96', fontSize: '0.88rem', lineHeight: 1.75 }}>{project.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, margin: '25px 0 30px' }}>
              {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-lime" style={{ width: '100%', justifyContent: 'center' }}>
              View on GitHub <span className="arrow">→</span>
            </a>
            <p style={{ minHeight: 22, marginTop: 12, fontSize: '0.7rem', color: '#b4c68e' }}>
              Working concept · ML-powered · Real-world application
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
