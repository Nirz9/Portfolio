/* WhyMe — becomes the "Ways to work" / pricing-style section */
import { useReveal } from '../hooks/useReveal';

const cards = [
  {
    title: 'The Explorer',
    desc: "For recruiters, researchers, and curious minds who want to understand Neeraj's approach and capabilities.",
    price: 'Free',
    priceSub: 'Just look around. No account.',
    items: ['Interactive AI project demos', 'Skills & technical approach', 'Learning philosophy & mindset'],
    cta: 'Explore projects →',
    href: '#projects',
    featured: false,
  },
  {
    title: 'The Collaborator',
    desc: 'For teams, mentors, or companies looking for a driven AI developer to join a project or internship.',
    price: 'Open',
    priceSub: 'Internships · Research · Freelance',
    badge: 'Best fit right now',
    items: ['AI/ML model development', 'Data analysis & visualisation', 'Research & implementation', 'End-to-end project delivery'],
    cta: "Let's work together →",
    href: '#contact',
    featured: true,
  },
  {
    title: 'The Builder',
    desc: 'For founders, companies, or researchers with a bigger AI idea that needs thoughtful implementation.',
    price: "Let's scope.",
    priceSub: 'Custom project · Defined together',
    items: ['Custom ML system design', 'Scalable model architecture', 'Data pipeline & deployment', 'Milestone-based delivery'],
    cta: 'Share your idea →',
    href: '#contact',
    featured: false,
  },
];

export default function WhyMe() {
  useReveal();

  return (
    <section className="section" id="why-me" style={{ borderTop: '1px solid var(--line)' }} aria-labelledby="ways-title">
      <div className="container">
        <div className="center-heading reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 48px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Ways to work</div>
          <h2 id="ways-title">Start curious.<br />Build something good.</h2>
          <p style={{ color: 'var(--muted)' }}>Whether you want to explore, collaborate, or build — there's a clear path forward.</p>
        </div>

        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 19, alignItems: 'stretch' }}>
          {cards.map(({ title, desc, price, priceSub, badge, items, cta, href, featured }) => (
            <article key={title} className={`price-card${featured ? ' featured' : ''}`}>
              {badge && (
                <span style={{ position: 'absolute', top: -12, right: 23, background: 'var(--ink)', color: 'var(--accent)', borderRadius: 6, fontSize: '0.64rem', fontWeight: 600, padding: '6px 10px' }}>
                  {badge}
                </span>
              )}
              <h3 style={{ marginBottom: 9, fontFamily: 'Manrope, sans-serif' }}>{title}</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)', minHeight: 46, marginBottom: 0 }}>{desc}</p>
              <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '2.8rem', fontWeight: 750, letterSpacing: '-0.06em', margin: '12px 0 5px', color: 'var(--ink)' }}>
                {price}
              </div>
              <div style={{ fontSize: '0.69rem', color: 'var(--muted)', marginBottom: 26 }}>{priceSub}</div>
              <ul style={{ listStyle: 'none', padding: '23px 0 0', margin: '0 0 29px', borderTop: '1px solid var(--line)' }}>
                {items.map(item => (
                  <li key={item} style={{ fontSize: '0.81rem', marginBottom: 15, paddingLeft: 23, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#789446' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })}
                className={`btn ${featured ? 'btn-dark' : 'btn-outline'}`}
                style={{ marginTop: 'auto', width: '100%' }}
              >
                {cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
