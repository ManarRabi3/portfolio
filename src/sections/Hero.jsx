import React, { useEffect, useRef, useState } from 'react'

const roles = ['Front-End Developer', 'React Specialist', 'UI Craftsperson', 'Web Instructor']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  // Typewriter effect
  useEffect(() => {
    let timeout
    const current = roles[roleIdx]
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setRoleIdx((roleIdx + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIdx])

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow blobs */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '-5%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(124,106,255,0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        filter: 'blur(40px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255,106,158,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        filter: 'blur(40px)',
      }} />

      <div className="container" style={{ width: '100%', paddingTop: '120px', paddingBottom: '80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '60px', alignItems: 'center' }}>
          
          {/* Left content */}
          <div>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '50px',
              border: '1px solid var(--border-bright)',
              background: 'rgba(124, 106, 255, 0.08)',
              marginBottom: '32px',
              animation: 'fadeInUp 0.6s ease forwards',
            }}>
              <span style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: '#4ade80',
                boxShadow: '0 0 8px #4ade80',
                animation: 'pulse-glow 2s ease infinite',
              }} />
              <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', letterSpacing: '0.5px' }}>
                Available for opportunities
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 6vw, 80px)',
              fontWeight: 800,
              lineHeight: 1.0,
              marginBottom: '12px',
              animation: 'fadeInUp 0.6s 0.1s ease both',
            }}>
              Hi, I'm{' '}
              <span style={{ display: 'block', marginTop: '8px' }}>
                <span style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontSize: 'clamp(44px, 6.5vw, 86px)',
                }}>Manar Rabih</span>
              </span>
            </h1>

            {/* Typewriter role */}
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(20px, 3vw, 32px)',
              fontWeight: 600,
              color: 'var(--text-muted)',
              marginBottom: '28px',
              minHeight: '42px',
              animation: 'fadeInUp 0.6s 0.2s ease both',
            }}>
              {displayed}
              <span style={{
                display: 'inline-block',
                width: '2px',
                height: '1em',
                background: 'var(--accent)',
                marginLeft: '3px',
                verticalAlign: 'middle',
                animation: 'blink 1s step-end infinite',
              }} />
            </div>

            {/* Summary */}
            <p style={{
              fontSize: '16px',
              color: 'var(--text-muted)',
              maxWidth: '520px',
              lineHeight: 1.8,
              marginBottom: '40px',
              animation: 'fadeInUp 0.6s 0.3s ease both',
            }}>
              Front-End Developer with a CS & AI degree from Fayoum University.
              I build responsive, scalable web apps with React.js — currently expanding into Full-Stack with Node.js.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              animation: 'fadeInUp 0.6s 0.4s ease both',
            }}>
              <a href="#projects" style={{
                padding: '14px 32px',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, var(--accent), #9c8aff)',
                color: 'white',
                fontWeight: 600,
                fontSize: '15px',
                fontFamily: 'var(--font-body)',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 24px rgba(124, 106, 255, 0.3)',
              }}
              onMouseEnter={e => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 16px 40px rgba(124, 106, 255, 0.4)'; }}
              onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 8px 24px rgba(124, 106, 255, 0.3)'; }}
              >
                View Projects →
              </a>
              <a href="#contact" style={{
                padding: '14px 32px',
                borderRadius: '50px',
                border: '1px solid var(--border-bright)',
                color: 'var(--text)',
                fontWeight: 500,
                fontSize: '15px',
                fontFamily: 'var(--font-body)',
                transition: 'all 0.3s ease',
                background: 'transparent',
              }}
              onMouseEnter={e => { e.target.style.background = 'rgba(124, 106, 255, 0.1)'; e.target.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.transform = 'translateY(0)'; }}
              >
                Get in Touch
              </a>
            </div>

            {/* Social links */}
            <div style={{
              display: 'flex',
              gap: '20px',
              marginTop: '48px',
              animation: 'fadeInUp 0.6s 0.5s ease both',
            }}>
              {[
                { label: 'GitHub', href: 'https://github.com/ManarRabi3', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg> },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/manar-rabih', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                { label: 'Email', href: 'mailto:manar@fayoum.edu.eg', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg> },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                    background: 'var(--bg-card)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.borderColor = 'var(--border-bright)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Avatar */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            animation: 'fadeIn 0.8s 0.3s ease both',
          }} className="hero-image">
            <div style={{ position: 'relative', animation: 'float 5s ease-in-out infinite' }}>
              {/* Rotating ring */}
              <div style={{
                position: 'absolute',
                inset: '-16px',
                borderRadius: '50%',
                border: '1.5px dashed rgba(124, 106, 255, 0.3)',
                animation: 'spin-slow 15s linear infinite',
              }} />
              {/* Glow */}
              <div style={{
                position: 'absolute',
                inset: '-8px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(124,106,255,0.15) 0%, transparent 70%)',
                filter: 'blur(12px)',
              }} />
              {/* Image */}
              <div style={{
                width: '220px',
                height: '220px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid rgba(124, 106, 255, 0.5)',
                position: 'relative',
                background: 'var(--bg-2)',
              }}>
                <img
                  src="/manar.png"
                  alt="Manar Rabih"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:72px;font-weight:800;background:linear-gradient(135deg,#7c6aff,#ff6a9e);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">M</div>`
                  }}
                />
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '16px' }}>
              {[
                { num: '5+', label: 'Projects' },
                { num: '1+', label: 'Year Exp' },
                { num: '13', label: 'Modules' },
              ].map(stat => (
                <div key={stat.label} style={{
                  textAlign: 'center',
                  padding: '12px 16px',
                  background: 'var(--bg-card)',
                  borderRadius: '12px',
                  border: '1px solid var(--border)',
                  minWidth: '70px',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', color: 'var(--accent)' }}>
                    {stat.num}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.5px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          marginTop: '80px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          color: 'var(--text-dim)',
          animation: 'fadeInUp 0.6s 0.8s ease both',
        }}>
          <div style={{
            width: '28px',
            height: '48px',
            border: '1.5px solid var(--border)',
            borderRadius: '14px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '8px',
          }}>
            <div style={{
              width: '4px',
              height: '10px',
              background: 'var(--accent)',
              borderRadius: '2px',
              animation: 'float 1.5s ease-in-out infinite',
            }} />
          </div>
          <span style={{ fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase' }}>Scroll to explore</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-image { display: none !important; }
        }
      `}</style>
    </section>
  )
}
