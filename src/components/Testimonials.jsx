/* Testimonials — quote-card grid exactly matching the HTML */
import { useReveal } from '../hooks/useReveal';

const quotes = [
  {
    text: "Neeraj is one of the most intellectually curious students I have taught. His ability to connect theoretical AI concepts to practical applications is genuinely impressive.",
    caption: 'Prof. [Name] · Assistant Professor, Computer Science',
  },
  {
    text: "Working with Neeraj on his demand prediction project was a pleasure. Exceptional analytical thinking, systematic approach, and remarkable accuracy in his ML models.",
    caption: 'Dr. [Name] · AI Research Mentor',
  },
  {
    text: "Neeraj is the kind of teammate who elevates everyone around him. Deep ML knowledge combined with the ability to explain complex ideas clearly — a rare combination.",
    caption: '[Name] · Fellow Developer & Collaborator',
  },
];

export default function Testimonials() {
  useReveal();

  return (
    <section className="section" style={{ paddingTop: 0 }} aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">The collaboration standard</div>
            <h2 id="testimonials-title">The kind of feedback<br />worth building for.</h2>
          </div>
          <p>Clear communication. Considered decisions. Work that feels as good to build as it looks.</p>
        </div>

        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 19 }}>
          {quotes.map(({ text, caption }) => (
            <figure key={caption} className="quote-card">
              <div style={{ fontFamily: 'Georgia, serif', fontSize: '3rem', color: '#92a36e', lineHeight: 1 }} aria-hidden="true">"</div>
              <blockquote style={{ margin: '5px 0 30px', fontSize: '0.95rem', lineHeight: 1.75, letterSpacing: '-0.015em', color: 'var(--ink)' }}>
                {text}
              </blockquote>
              <figcaption style={{ borderTop: '1px solid #d9dfcf', paddingTop: 18, fontSize: '0.72rem', color: '#68765a' }}>
                {caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="reveal" style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: 17 }}>
          Illustrative quotes — replace with approved testimonials before publishing.
        </p>
      </div>
    </section>
  );
}
