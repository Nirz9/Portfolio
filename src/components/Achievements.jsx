/* Achievements — Cards in a grid like the HTML feature cards */
import { useReveal } from '../hooks/useReveal';

const achievements = [
  { icon: '🏅', number: '01', title: 'ML Specialisation', sub: 'Coursera / DeepLearning.AI · 2024', desc: "Andrew Ng's 3-course ML specialisation covering supervised, unsupervised, and reinforcement learning." },
  { icon: '🧠', number: '02', title: 'Deep Learning Workshop', sub: 'National Institute · 2024', desc: 'Intensive 3-day workshop on Neural Networks, CNNs, RNNs, and Transformers with hands-on labs.' },
  { icon: '🏆', number: '03', title: 'Smart India Hackathon', sub: 'Government of India · 2024', desc: "Participated in India's largest hackathon, developing an AI-powered solution for a national problem statement." },
  { icon: '🐍', number: '04', title: 'Python for DS & AI', sub: 'IBM / Coursera · 2023', desc: 'Mastered data science libraries including NumPy, Pandas, Matplotlib, and Seaborn for analytical workflows.' },
  { icon: '⭐', number: '05', title: 'Academic Excellence', sub: 'University · 2023', desc: 'Recognised for outstanding performance and consistent high grades in Computer Science core subjects.' },
  { icon: '👥', number: '06', title: 'AI Study Group Founder', sub: 'College Community · 2023', desc: 'Founded a peer-learning AI group with 20+ members, organising weekly sessions on ML papers and projects.' },
];

export default function Achievements() {
  useReveal();

  return (
    <section className="section" id="achievements" aria-labelledby="achievements-title" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">Recognition</div>
            <h2 id="achievements-title">Milestones worth<br />mentioning.</h2>
          </div>
          <p>Certifications, awards, and experiences that reflect a commitment to continuous learning and real-world application.</p>
        </div>

        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 19 }}>
          {achievements.map(({ icon, number, title, sub, desc }) => (
            <article key={number} className="feature-card" style={{ cursor: 'default' }}>
              <div style={{ display: 'grid', placeItems: 'center', width: 44, height: 44, background: '#f1f4eb', border: '1px solid #e5ebdb', borderRadius: 12, marginBottom: 24 }}>
                <span style={{ fontSize: '1.2rem' }}>{icon}</span>
              </div>
              <h3 style={{ marginBottom: 6, fontSize: '1.05rem' }}>{title}</h3>
              <div style={{ fontSize: '0.65rem', fontFamily: 'monospace', color: '#7d896f', marginBottom: 12 }}>{sub}</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', margin: 0, lineHeight: 1.7 }}>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
