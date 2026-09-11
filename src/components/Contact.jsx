/* Contact — FAQ + form */
import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Mail, Send, Loader, CheckCircle } from 'lucide-react';

const faqs = [
  { q: 'Are you open to internships or part-time roles?', a: "Absolutely — I'm actively looking for AI/ML internships, research opportunities, and part-time developer roles where I can contribute meaningfully and continue to grow." },
  { q: 'What kind of projects do you want to work on?', a: "I'm most excited about intelligent systems that solve real problems — demand prediction, NLP applications, computer vision, and AI-powered automation. Happy to explore any domain." },
  { q: 'Can you work remotely?', a: "Yes, completely remote works great for me. I'm also open to hybrid or on-site opportunities if they are the right fit." },
  { q: "What's your typical response time?", a: 'I aim to respond to all messages within 24 hours. If your enquiry is urgent, please mention it in the subject line.' },
  { q: 'Do you contribute to open source?', a: 'Yes — I actively contribute to AI/ML repositories on GitHub, including documentation improvements, bug fixes, and example notebooks.' },
];

export default function Contact() {
  useReveal();
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    await new Promise(r => setTimeout(r, 1800));
    setStatus('sent');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <>
      {/* FAQ */}
      <section className="section" id="faq" aria-labelledby="faq-title" style={{ paddingTop: 12 }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 90 }}>
          <div className="reveal">
            <div className="eyebrow">FAQ</div>
            <h2 id="faq-title">Questions worth<br />asking.</h2>
            <p style={{ color: 'var(--muted)', maxWidth: 280 }}>If you don't find your answer here, just reach out — happy to talk.</p>
          </div>
          <div className="reveal" style={{ '--delay': '80ms' }}>
            {faqs.map(({ q, a }) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="section" id="contact" aria-labelledby="contact-title" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
            {/* Left */}
            <div className="reveal">
              <div className="eyebrow">Get in touch</div>
              <h2 id="contact-title">Let's build something<br />intelligent together.</h2>
              <p style={{ color: 'var(--muted)', maxWidth: 380, marginBottom: 32 }}>
                Whether you're a recruiter, collaborator, or fellow AI enthusiast — I'd love to connect and explore what we could build.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
                {[
                  { icon: <GithubIcon size={18} />, label: 'GitHub', handle: '@Nirz9', href: 'https://github.com/Nirz9', color: '#658626', bg: '#f3f9e8' },
                  { icon: <LinkedinIcon size={18} />, label: 'LinkedIn', handle: 'Neeraj Rajput', href: 'https://linkedin.com', color: '#658626', bg: '#f3f9e8' },
                  { icon: <Mail size={18} />, label: 'Email', handle: 'neeraj@email.com', href: 'mailto:neeraj@email.com', color: '#658626', bg: '#f3f9e8' },
                ].map(({ icon, label, handle, href, color, bg }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 12, transition: 'border-color 0.2s, transform 0.2s', textDecoration: 'none', color: 'var(--ink)' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#b8c8a0'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.transform = 'none'; }}
                  >
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: bg, border: '1px solid #dce8c4', display: 'grid', placeItems: 'center', color, flexShrink: 0 }}>
                      {icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--muted)', fontFamily: 'monospace' }}>{label}</div>
                      <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{handle}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div style={{ padding: 18, background: '#eef3e8', border: '1px solid #dce5d2', borderRadius: 12 }}>
                <p style={{ margin: 0, fontSize: '0.82rem', color: '#4f6337', lineHeight: 1.7 }}>
                  <strong>Currently open</strong> — Internships · Research Collaboration · Freelance AI Projects · Full-time Roles
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="reveal" style={{ '--delay': '100ms' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 22, padding: 32 }}>
                {status === 'sent' ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px 0', textAlign: 'center', gap: 16 }}>
                    <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#eef3e8', border: '1px solid #c9e0a0', display: 'grid', placeItems: 'center' }}>
                      <CheckCircle size={28} color="#658626" />
                    </div>
                    <h3 style={{ fontFamily: 'Manrope, sans-serif', marginBottom: 8 }}>Message sent!</h3>
                    <p style={{ color: 'var(--muted)', fontSize: '0.9rem', margin: 0 }}>Thank you for reaching out. I'll respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                      {[
                        { name: 'name',  label: 'Your name',  type: 'text',  placeholder: 'John Doe' },
                        { name: 'email', label: 'Email',       type: 'email', placeholder: 'john@company.com' },
                      ].map(({ name, label, type, placeholder }) => (
                        <div key={name}>
                          <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: 8 }}>{label}</label>
                          <input
                            type={type} name={name} value={form[name]} placeholder={placeholder} required
                            onChange={e => setForm(f => ({ ...f, [name]: e.target.value }))}
                            style={{ width: '100%', background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: 9, padding: '12px 14px', fontSize: '0.87rem', color: 'var(--ink)', outline: 'none', transition: 'border-color 0.2s' }}
                            onFocus={e => e.target.style.borderColor = '#7a9c37'}
                            onBlur={e => e.target.style.borderColor = 'var(--line)'}
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: 8 }}>Subject</label>
                      <input
                        type="text" name="subject" value={form.subject} placeholder="e.g. Internship opportunity" required
                        onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                        style={{ width: '100%', background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: 9, padding: '12px 14px', fontSize: '0.87rem', color: 'var(--ink)', outline: 'none', transition: 'border-color 0.2s' }}
                        onFocus={e => e.target.style.borderColor = '#7a9c37'}
                        onBlur={e => e.target.style.borderColor = 'var(--line)'}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: 8 }}>Message</label>
                      <textarea
                        name="message" value={form.message} rows={5} placeholder="Tell me about your project or opportunity..." required
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        style={{ width: '100%', background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: 9, padding: '12px 14px', fontSize: '0.87rem', color: 'var(--ink)', outline: 'none', resize: 'none', transition: 'border-color 0.2s' }}
                        onFocus={e => e.target.style.borderColor = '#7a9c37'}
                        onBlur={e => e.target.style.borderColor = 'var(--line)'}
                      />
                    </div>
                    <button type="submit" disabled={status === 'sending'} className="btn btn-dark" style={{ justifyContent: 'center', gap: 10 }}>
                      {status === 'sending' ? <><Loader size={16} style={{ animation: 'spin 1s linear infinite' }} /> Sending…</> : <><Send size={16} /> Send message</>}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
