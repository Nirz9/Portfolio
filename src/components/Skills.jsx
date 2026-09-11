/* Skills — "Modern foundations. Room for great ideas." style */
import { useReveal } from '../hooks/useReveal';

const stack = [
  { icon: '🐍', name: 'Python' },
  { icon: '🔷', name: 'TensorFlow' },
  { icon: '🧠', name: 'Keras' },
  { icon: '📊', name: 'Pandas' },
  { icon: '⚛️', name: 'React' },
  { icon: '🔧', name: 'Scikit-learn' },
  { icon: '📓', name: 'Jupyter' },
  { icon: '🐙', name: 'GitHub' },
];

const categories = [
  {
    number: '01',
    title: 'Programming Languages',
    desc: 'Fluent in Python for AI/ML, C++ for performance-critical tasks, Java for object-oriented design, and JavaScript for web interfaces.',
    skills: ['Python', 'C++', 'Java', 'JavaScript'],
  },
  {
    number: '02',
    title: 'AI & Machine Learning',
    desc: 'Building and training models with industry-standard frameworks. Proficient in classical ML, deep learning architectures, and NLP pipelines.',
    skills: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'Keras', 'Scikit-learn', 'NLP'],
  },
  {
    number: '03',
    title: 'Web & Development',
    desc: 'Creating interfaces that make intelligent systems accessible. Comfortable from frontend to deployment.',
    skills: ['React', 'HTML/CSS', 'Git', 'GitHub', 'REST APIs'],
  },
  {
    number: '04',
    title: 'Data & Tools',
    desc: 'Transforming raw data into meaningful insights through analysis, visualization, and statistical methods.',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Data Visualization', 'Jupyter Notebook'],
  },
];

export default function Skills() {
  useReveal();

  return (
    <>
      {/* Stack bar — matches the HTML "stack" section */}
      <section style={{ padding: '33px 0 38px', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }} aria-label="Technology stack">
        <div className="container reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 150, fontSize: '0.72rem', lineHeight: 1.6, color: 'var(--muted)' }}>
            Modern foundations.<br />Room for great ideas.
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '22px 35px', flex: 1, maxWidth: 820, justifyContent: 'space-between' }}>
            {stack.map(({ icon, name }) => (
              <span key={name} style={{ display: 'flex', alignItems: 'center', gap: 9, fontFamily: 'Manrope, sans-serif', fontWeight: 750, color: '#5f6759', fontSize: '1.13rem', letterSpacing: '-0.04em' }}>
                <b style={{ fontFamily: 'monospace', fontSize: '1.3rem', fontWeight: 500 }}>{icon}</b> {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Skills cards */}
      <section className="section" id="skills" aria-labelledby="skills-title">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="eyebrow">Technical skills</div>
              <h2 id="skills-title">Built on strong<br />foundations.</h2>
            </div>
            <p>A curated set of technologies and methodologies I've developed through real projects and continuous learning.</p>
          </div>

          <div className="features-grid reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 19 }}>
            {categories.map(({ number, title, desc, skills }) => (
              <article key={title} className="feature-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 39 }}>
                  <div style={{ display: 'grid', placeItems: 'center', width: 44, height: 44, background: '#f1f4eb', border: '1px solid #e5ebdb', borderRadius: 12 }}>
                    <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', color: '#7d896f', fontWeight: 700 }}>{number}</span>
                  </div>
                </div>
                <h3 style={{ marginBottom: 12 }}>{title}</h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--muted)', marginBottom: 20, lineHeight: 1.7 }}>{desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {skills.map(s => (
                    <span key={s} className="tag-light">{s}</span>
                  ))}
                </div>
                <div style={{ marginTop: 20 }}>
                  <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', color: '#7d896f' }}>PROFICIENCY · ACTIVE</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
