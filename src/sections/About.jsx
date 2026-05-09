import React from 'react'
import useInView from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(40px)',
          transition: 'all 0.8s ease',
        }}>
          {/* Left: visual */}
          <div style={{ position: 'relative' }}>
            {/* Big gradient card */}
            <div style={{
              width: '100%',
              aspectRatio: '4/5',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(124,106,255,0.1), rgba(255,106,158,0.06))',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              padding: '40px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Decorative corner */}
              <div style={{
                position: 'absolute',
                top: 0, right: 0,
                width: '120px', height: '120px',
                background: 'linear-gradient(135deg, var(--accent), transparent)',
                opacity: 0.15,
                borderRadius: '0 24px 0 120px',
              }} />

              <div style={{
                width: '110px',
                height: '110px',
                borderRadius: '50%',
                border: '3px solid rgba(124, 106, 255, 0.5)',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(124, 106, 255, 0.35)',
                background: 'var(--bg-2)',
                flexShrink: 0,
              }}>
                <img
                  src="/manar.png"
                  alt="Manar Rabih"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.parentElement.style.background = 'linear-gradient(135deg, var(--accent), var(--accent-2))'
                    e.target.parentElement.innerHTML += `<span style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:42px;font-weight:800;color:white;">M</span>`
                  }}
                />
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 700, fontSize: '22px' }}>Manar Rabih</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '4px' }}>Fayoum, Egypt 🇪🇬</div>
              </div>

              {/* Info chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                {[
                  { icon: '🎓', text: 'CS & AI Graduate' },
                  { icon: '💼', text: 'Open to Work' },
                  { icon: '📚', text: 'Lifelong Learner' },
                  { icon: '🌍', text: 'Remote Friendly' },
                ].map(chip => (
                  <span key={chip.text} style={{
                    padding: '6px 14px',
                    background: 'rgba(124, 106, 255, 0.1)',
                    border: '1px solid var(--border)',
                    borderRadius: '50px',
                    fontSize: '13px',
                    color: 'var(--text-muted)',
                  }}>
                    {chip.icon} {chip.text}
                  </span>
                ))}
              </div>

              {/* Phone */}
              <a href="tel:01000928710" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                borderRadius: '12px',
                background: 'var(--bg-2)',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
                fontSize: '14px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-bright)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2z"/>
                </svg>
                01000928710
              </a>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <p className="section-label">About Me</p>
            <h2 className="section-title" style={{ marginBottom: '24px' }}>
              Turning ideas into{' '}
              <span className="gradient-text">digital reality</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '20px', fontSize: '15px' }}>
              I'm a Front-End Developer with a Bachelor's in Computer Science and Artificial Intelligence from Fayoum University (2024). My passion is crafting clean, fast, and beautiful web experiences using modern JavaScript and React.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '32px', fontSize: '15px' }}>
              Beyond coding, I've taught web development to students at STEM & Future School — an experience that sharpened both my technical skills and my ability to communicate complex concepts clearly. Currently leveling up through the Digital Pioneers Initiative (Digilians) as a Full-Stack Node.js Trainee.
            </p>

            {/* Education card */}
            <div style={{
              padding: '24px',
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--border)',
              marginBottom: '16px',
            }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '28px' }}>🎓</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '15px', marginBottom: '4px' }}>
                    BSc Computer Science & AI — Fayoum University
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '8px' }}>2020 – 2024 · GPA 2.8</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
                    Graduation Project: <span style={{ color: 'var(--accent)' }}>Wesal</span> — Arabic Sign Language app with real-time detection, speech recognition, text-to-speech & more.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
