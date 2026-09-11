/* Education — numbered list style matching "Benefits" section from HTML */
import { useReveal } from '../hooks/useReveal';

const milestones = [
  {
    number: '01',
    title: 'B.Tech Computer Science Engineering',
    sub: 'University · 2022 – Present · AI/ML Specialisation',
    desc: 'Core coursework in Data Structures, Algorithms, Machine Learning, Deep Learning, DBMS, and Computer Networks. CGPA: 8.5+',
  },
  {
    number: '02',
    title: 'Machine Learning Specialisation',
    sub: 'Coursera / DeepLearning.AI · 2024 · Andrew Ng',
    desc: 'Three-course specialisation covering supervised/unsupervised learning, advanced ML strategies, and real-world project implementations.',
  },
  {
    number: '03',
    title: 'Smart Canteen Demand Prediction',
    sub: 'Personal Project · Python, Scikit-learn · 2024',
    desc: 'Built a full demand forecasting pipeline achieving 92%+ accuracy. Integrated historical data, weather patterns, and calendar events.',
  },
  {
    number: '04',
    title: 'Deep Learning Workshop',
    sub: 'National Technical Institute · 2024 · 3 Days',
    desc: 'Intensive hands-on workshop on Neural Networks, CNNs, RNNs, and Transformer architectures with practical labs.',
  },
  {
    number: '05',
    title: 'Spam & Phishing Email Classifier',
    sub: 'Personal Project · NLP, Python · 2023',
    desc: 'NLP-powered classifier achieving 97%+ accuracy using ensemble methods, TF-IDF vectorisation, and Random Forest.',
  },
  {
    number: '06',
    title: '12th Grade — PCM + Computer Science',
    sub: 'Senior Secondary · 2022',
    desc: 'Physics, Chemistry, Mathematics, and Computer Science. First exposure to programming sparked a lifelong passion for technology.',
  },
];

export default function Education() {
  useReveal();

  return (
    <section className="section" id="education" aria-labelledby="education-title">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'start' }}>
        <div className="reveal">
          <div className="eyebrow">The journey</div>
          <h2 id="education-title">Built through<br />real experience.</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 380, marginBottom: 32 }}>
            Every milestone shaped how I think about AI — from theory to implementation, from classroom to real-world impact.
          </p>
          <button className="btn btn-outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Work with me →
          </button>
        </div>

        <div>
          {milestones.map(({ number, title, sub, desc }) => (
            <article key={number} className="reveal" style={{ display: 'flex', gap: 20, padding: '26px 0', borderBottom: '1px solid var(--line)' }}>
              <span style={{ font: '0.72rem monospace', color: '#82936b', paddingTop: 5, flexShrink: 0 }}>{number}</span>
              <div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: 5 }}>{title}</h3>
                <div style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: '#82936b', marginBottom: 10 }}>{sub}</div>
                <p style={{ color: 'var(--muted)', fontSize: '0.85rem', margin: 0, lineHeight: 1.7 }}>{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
