import React from 'react'
import useInView from '../hooks/useInView'

const experiences = [
  {
    role: 'Full-Stack Node.js Trainee',
    company: 'Digital Pioneers Initiative (Digilians)',
    period: '2025 – Present',
    type: 'Trainee',
    color: '#7c6aff',
    current: true,
    bullets: [
      'Building RESTful APIs using Node.js and Express.js',
      'Working with databases and implementing authentication & authorization',
      'Developing full-stack applications integrating React with Node.js backend',
      'Applying scalable architecture and clean code principles',
    ],
  },
  {
    role: 'Web Development Instructor',
    company: 'STEM & Future School',
    period: '2024 – 2025',
    type: 'Instructor',
    color: '#ff6a9e',
    current: false,
    bullets: [
      'Delivered front-end training (HTML, CSS, JavaScript)',
      'Taught responsive design, DOM manipulation, and UI/UX principles',
      'Guided students in building real-world web projects',
      'Prepared structured lesson plans and practical assignments',
    ],
  },
]

const courseModules = [
  'HTML5 Essentials', 'CSS Essentials', 'Bootstrap / Tailwind',
  'UX/UI Design', 'JavaScript', 'Design Patterns & SOLID',
  'Git & GitHub', 'TypeScript', 'React & Advanced React',
  'Next.js', 'SQL & NoSQL', 'MongoDB', 'Node.js + Express',
]

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div style={{
          textAlign: 'center',
          marginBottom: '70px',
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(30px)',
          transition: 'all 0.7s ease',
        }} ref={ref}>
          <p className="section-label">My Journey</p>
          <h2 className="section-title">Experience & <span className="gradient-text">Training</span></h2>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto 80px' }}>
          {/* Line */}
          <div style={{
            position: 'absolute',
            left: '32px',
            top: 0, bottom: 0,
            width: '1px',
            background: 'linear-gradient(to bottom, var(--accent), var(--accent-2), transparent)',
            opacity: 0.3,
          }} />

          {experiences.map((exp, i) => (
            <ExperienceItem key={exp.role} exp={exp} index={i} />
          ))}
        </div>

        {/* Course modules */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '36px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <span style={{
                width: '36px', height: '36px',
                background: 'rgba(124, 106, 255, 0.1)',
                border: '1px solid var(--border-bright)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '18px',
              }}>📚</span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '17px' }}>
                  Full-Stack Development Track
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
                  Professional React Web Developer • 126 Sessions • 252 Hours
                </div>
              </div>
              <div style={{
                marginLeft: 'auto',
                padding: '4px 14px',
                background: 'rgba(74, 222, 128, 0.1)',
                border: '1px solid rgba(74, 222, 128, 0.3)',
                borderRadius: '50px',
                fontSize: '12px',
                color: '#4ade80',
                fontWeight: 500,
              }}>
                ✓ 13 / 20 Modules
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {courseModules.map((mod, i) => (
                <span key={mod} style={{
                  padding: '6px 14px',
                  background: 'rgba(124, 106, 255, 0.08)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}>
                  <span style={{ color: '#4ade80', fontSize: '11px' }}>✓</span>
                  {mod}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({ exp, index }) {
  const [ref, inView] = useInView()

  return (
    <div ref={ref} style={{
      display: 'flex',
      gap: '28px',
      marginBottom: '48px',
      opacity: inView ? 1 : 0,
      transform: inView ? 'none' : 'translateX(-30px)',
      transition: `all 0.7s ${index * 0.15}s ease`,
    }}>
      {/* Dot */}
      <div style={{
        flexShrink: 0,
        width: '64px',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '4px',
      }}>
        <div style={{
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          background: exp.color,
          boxShadow: `0 0 0 4px ${exp.color}20, 0 0 16px ${exp.color}50`,
          flexShrink: 0,
          marginTop: '4px',
          animation: exp.current ? 'pulse-glow 2s ease infinite' : 'none',
        }} />
      </div>

      {/* Card */}
      <div style={{
        flex: 1,
        background: 'var(--bg-card)',
        border: `1px solid ${exp.color}30`,
        borderRadius: 'var(--radius)',
        padding: '28px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', marginBottom: '4px' }}>{exp.role}</h3>
            <div style={{ color: exp.color, fontWeight: 500, fontSize: '14px' }}>{exp.company}</div>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            {exp.current && (
              <span style={{
                padding: '4px 12px',
                background: 'rgba(74, 222, 128, 0.1)',
                border: '1px solid rgba(74, 222, 128, 0.3)',
                borderRadius: '50px',
                fontSize: '11px',
                color: '#4ade80',
                fontWeight: 600,
                letterSpacing: '0.5px',
              }}>● CURRENT</span>
            )}
            <span style={{
              padding: '4px 12px',
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '50px',
              fontSize: '12px',
              color: 'var(--text-muted)',
            }}>{exp.period}</span>
          </div>
        </div>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {exp.bullets.map(b => (
            <li key={b} style={{ display: 'flex', gap: '10px', color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6 }}>
              <span style={{ color: exp.color, marginTop: '1px', flexShrink: 0 }}>→</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
