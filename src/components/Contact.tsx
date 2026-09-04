import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

/**
 * Contact form submission:
 * - Set VITE_CONTACT_ENDPOINT in a .env file to a form-to-email endpoint
 *   (Formspree, Web3Forms, Getform, or your own API) for real async submits.
 * - With no endpoint configured, the form falls back to opening the
 *   visitor's mail client with the message pre-filled.
 */
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
const EMAIL = 'rommeltima07@gmail.com';

const SOCIALS = [
  {
    href: 'https://www.linkedin.com/in/rommel-tima-1940561ab/',
    label: 'LinkedIn',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z"></path></svg>
    ),
  },
  {
    href: 'https://github.com/rmtaiautomation-ai',
    label: 'GitHub',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.48.11-3.08 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.6.23 2.78.11 3.08.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"></path></svg>
    ),
  },
  {
    href: 'https://www.facebook.com/rommeltima',
    label: 'Facebook',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
    ),
  },
];

const INFO = [
  { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: 'Phone', value: '09770124038', href: 'tel:09770124038' },
  { icon: MapPin, label: 'Location', value: 'Taguig, Philippines' },
];

type Status = 'idle' | 'sending' | 'sent' | 'error';

const FIELD =
  'w-full bg-brand-dark/60 border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text placeholder:text-brand-text-muted focus:border-brand-blue focus:outline-none transition-colors';
const LABEL = 'block text-xs font-semibold tracking-widest uppercase text-brand-text-muted mb-2';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) return;
    setStatus('sending');
    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error('Request failed');
      } else {
        const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
      }
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative z-10 border-t border-brand-border/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-blue text-xs sm:text-sm font-bold tracking-[0.25em] uppercase flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-px bg-brand-blue"></span>
            Contact
            <span className="w-10 h-px bg-brand-blue"></span>
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.95]">
            <span className="text-brand-text">Let's Build Something</span>
            <br />
            <span className="text-brand-blue">Extraordinary.</span>
          </h2>
          <p className="text-brand-text-muted max-w-xl mx-auto mt-5">
            Have a project, an automation idea, or just want to connect? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              {INFO.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <>
                    <span className="w-11 h-11 shrink-0 rounded-lg bg-brand-blue/10 grid place-items-center">
                      <Icon className="text-brand-blue" size={20} />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold tracking-widest uppercase text-brand-text-muted">
                        {item.label}
                      </span>
                      <span className="block text-brand-text font-medium mt-0.5">{item.value}</span>
                    </span>
                  </>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} className="flex items-center gap-4 group">
                    {inner}
                  </a>
                ) : (
                  <div key={item.label} className="flex items-center gap-4">
                    {inner}
                  </div>
                );
              })}
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-text-muted mb-3">
                Connect Online
              </p>
              <div className="flex gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 grid place-items-center rounded-lg border border-brand-border text-brand-text-muted hover:text-brand-blue hover:border-brand-blue transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <blockquote className="bg-brand-card border border-brand-border rounded-2xl p-6 mt-auto">
              <p className="text-brand-text-muted italic leading-relaxed">
                "I build the automated systems that run quietly in the background — so the business can
                focus on the work that actually grows it."
              </p>
              <footer className="text-brand-blue font-semibold text-sm mt-3">— Rommel Tima</footer>
            </blockquote>
          </div>

          {/* Right column - form */}
          <form
            onSubmit={onSubmit}
            className="bg-brand-card border border-brand-border rounded-2xl p-6 sm:p-8 flex flex-col gap-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className={LABEL}>
                  Name <span className="text-brand-blue">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={update}
                  required
                  placeholder="Your name"
                  className={FIELD}
                />
              </div>
              <div>
                <label htmlFor="email" className={LABEL}>
                  Email <span className="text-brand-blue">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  required
                  placeholder="your@email.com"
                  className={FIELD}
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className={LABEL}>
                Subject <span className="text-brand-blue">*</span>
              </label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={update}
                required
                placeholder="What's this about?"
                className={FIELD}
              />
            </div>

            <div>
              <label htmlFor="message" className={LABEL}>
                Message <span className="text-brand-blue">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={update}
                required
                rows={6}
                placeholder="Tell me about your project or idea..."
                className={`${FIELD} resize-y min-h-32`}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-brand-blue hover:bg-[#c0121f] disabled:opacity-60 text-white font-bold tracking-widest uppercase text-sm px-6 py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
              <Send size={16} />
            </button>

            {status === 'sent' && (
              <p className="text-sm text-brand-blue font-medium text-center">
                Thanks — your message is on its way. I'll get back to you shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-400 font-medium text-center">
                Something went wrong. Email me directly at {EMAIL}.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
