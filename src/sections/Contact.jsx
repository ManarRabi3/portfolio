import React, { useState } from 'react'
import useInView from '../hooks/useInView'

export default function Contact() {
  const [ref, inView] = useInView()
  const [copied, setCopied] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'
  const [focused, setFocused] = useState(null)

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(null), 2000)
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      setTimeout(() => setStatus(null), 3000)
      return
    }
    // Build mailto link with all fields
    const subject = encodeURIComponent(form.subject || `Message from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:manar@fayoum.edu.eg?subject=${subject}&body=${body}`
    setStatus('sent')
    setTimeout(() => {
      setStatus(null)
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const inputStyle = (name) => ({
    width: '100%',
    padding: '12px 16px',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${focused === name ? 'var(--border-bright)' : 'var(--border)'}`,
    borderRadius: '10px',
    color: 'var(--text)',
    fontSize: '14px',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxShadow: focused === name ? '0 0 0 3px rgba(124, 106, 255, 0.1)' : 'none',
    boxSizing: 'border-box',
  })

  const labelStyle = {
    display: 'block',
    fontSize: '13px',
    fontWeight: 500,
    color: 'var(--text-muted)',
    marginBottom: '8px',
    letterSpacing: '0.3px',
  }

  const contactItems = [
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>,
      label: 'Email',
      value: 'manar@fayoum.edu.eg',
      href: 'mailto:manar@fayoum.edu.eg',
      color: '#7c6aff',
      copy: 'manar@fayoum.edu.eg',
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2z"/></svg>,
      label: 'Phone',
      value: '01000928710',
      href: 'tel:01000928710',
      color: '#4ade80',
      copy: '01000928710',
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
      label: 'LinkedIn',
      value: 'linkedin.com/in/manar-rabih',
      href: 'https://www.linkedin.com/in/manar-rabih',
      color: '#38bdf8',
      copy: 'https://www.linkedin.com/in/manar-rabih',
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>,
      label: 'GitHub',
      value: 'github.com/ManarRabi3',
      href: 'https://github.com/ManarRabi3',
      color: '#ff6a9e',
      copy: 'https://github.com/ManarRabi3',
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
      label: 'Location',
      value: 'Fayoum, Egypt',
      href: null,
      color: '#fbbf24',
      copy: null,
    },
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px',
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(30px)',
            transition: 'all 0.7s ease',
          }} ref={ref}>
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              Let's <span className="gradient-text">work together</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', maxWidth: '480px', margin: '0 auto' }}>
              I'm currently open to new opportunities. Whether you have a project in mind or just want to say hi — my inbox is always open!
            </p>
          </div>

          {/* Contact cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '16px',
            marginBottom: '48px',
          }}>
            {contactItems.map((item, i) => (
              <div key={item.label} style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                transition: 'all 0.3s ease',
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(20px)',
                transitionDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${item.color}66`
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
              >
                <div style={{
                  width: '40px', height: '40px',
                  borderRadius: '10px',
                  background: `${item.color}15`,
                  border: `1px solid ${item.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: item.color,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-dim)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      style={{ fontSize: '13px', color: 'var(--text)', fontWeight: 500, wordBreak: 'break-all' }}>
                      {item.value}
                    </a>
                  ) : (
                    <div style={{ fontSize: '13px', color: 'var(--text)', fontWeight: 500 }}>{item.value}</div>
                  )}
                </div>
                {item.copy && (
                  <button onClick={() => copyToClipboard(item.copy, item.label)} style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: copied === item.label ? '#4ade80' : 'var(--text-dim)',
                    fontSize: '12px',
                    fontFamily: 'var(--font-body)',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'color 0.2s',
                  }}>
                    {copied === item.label ? '✓ Copied!' : '⎘ Copy'}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* ── Contact Form ── */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '40px',
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(30px)',
            transition: 'all 0.8s 0.3s ease',
          }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '20px',
              marginBottom: '28px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              <span style={{
                width: '32px', height: '32px',
                background: 'rgba(124,106,255,0.15)',
                border: '1px solid var(--border-bright)',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/>
                </svg>
              </span>
              Send a Message
            </h3>

            {/* Row 1: Name + Email */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }} className="form-row">
              <div>
                <label style={labelStyle}>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  style={inputStyle('name')}
                />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  style={inputStyle('email')}
                />
              </div>
            </div>

            {/* Row 2: Subject */}
            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="What is this regarding?"
                value={form.subject}
                onChange={handleChange}
                onFocus={() => setFocused('subject')}
                onBlur={() => setFocused(null)}
                style={inputStyle('subject')}
              />
            </div>

            {/* Row 3: Message */}
            <div style={{ marginBottom: '28px' }}>
              <label style={labelStyle}>Message</label>
              <textarea
                name="message"
                placeholder="Tell me about your project, question, or opportunity..."
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                rows={6}
                style={{
                  ...inputStyle('message'),
                  resize: 'vertical',
                  minHeight: '140px',
                  lineHeight: 1.7,
                }}
              />
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={status === 'sending'}
              style={{
                width: '100%',
                padding: '15px',
                borderRadius: '10px',
                border: 'none',
                cursor: status === 'sending' ? 'wait' : 'pointer',
                background: status === 'sent'
                  ? 'linear-gradient(135deg, #4ade80, #22c55e)'
                  : status === 'error'
                  ? 'linear-gradient(135deg, #f87171, #ef4444)'
                  : 'linear-gradient(135deg, var(--accent), #9c8aff)',
                color: 'white',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '15px',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 24px rgba(124, 106, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
              }}
              onMouseEnter={e => { if (status !== 'sending') { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 36px rgba(124,106,255,0.45)' }}}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(124,106,255,0.3)' }}
            >
              {status === 'sent' ? (
                <>✓ Message Ready — Check your email client!</>
              ) : status === 'error' ? (
                <>⚠ Please fill Name, Email & Message</>
              ) : (
                <>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  Send Message
                </>
              )}
            </button>

            <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '12px', color: 'var(--text-dim)' }}>
              Your message will be sent to: <span style={{ color: 'var(--accent)' }}>manar@fayoum.edu.eg</span>
            </p>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
