import React from 'react'
import useInView from '../hooks/useInView'

const skillGroups = [
  {
    category: 'Frontend',
    color: '#7c6aff',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 92 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'React.js', level: 85 },
      { name: 'Bootstrap', level: 88 },
      { name: 'Tailwind CSS', level: 82 },
    ],
  },
  {
    category: 'Backend & DB',
    color: '#ff6a9e',
    skills: [
      { name: 'Node.js', level: 65 },
      { name: 'Express.js', level: 65 },
      { name: 'MongoDB', level: 68 },
      { name: 'SQL', level: 60 },
      { name: 'Firebase', level: 65 },
    ],
  },
  {
    category: 'Tools & Concepts',
    color: '#4ade80',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'REST APIs', level: 82 },
      { name: 'Figma', level: 70 },
      { name: 'Docker', level: 55 },
      { name: 'Postman', level: 75 },
    ],
  },
]

const techIcons = [
  { name: 'React', bg: '#61DAFB22', color: '#61DAFB', letter: '⚛' },
  { name: 'JS', bg: '#F7DF1E22', color: '#F7DF1E', letter: 'JS' },
  { name: 'Node', bg: '#3C873A22', color: '#3C873A', letter: '⬡' },
  { name: 'HTML', bg: '#E3420022', color: '#E34200', letter: '⊡' },
  { name: 'CSS', bg: '#264DE422', color: '#264DE4', letter: '◈' },
  { name: 'Git', bg: '#F0503022', color: '#F05030', letter: '⎇' },
  { name: 'Tailwind', bg: '#06B6D422', color: '#06B6D4', letter: '~' },
  { name: 'MongoDB', bg: '#47A24822', color: '#47A248', letter: '🍃' },
]

function SkillBar({ name, level, color, delay }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ fontSize: '14px', color: 'var(--text)', fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{level}%</span>
      </div>
      <div style={{
        height: '6px',
        background: 'rgba(255,255,255,0.06)',
        borderRadius: '3px',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: inView ? `${level}%` : '0%',
          background: `linear-gradient(90deg, ${color}, ${color}99)`,
          borderRadius: '3px',
          transition: `width 1s ${delay}s ease`,
          boxShadow: `0 0 10px ${color}66`,
        }} />
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '70px', opacity: inView ? 1 : 0, transition: 'opacity 0.6s ease' }} ref={ref}>
          <p className="section-label">Technical Skills</p>
          <h2 className="section-title">What I <span className="gradient-text">work with</span></h2>
        </div>

        {/* Tech icons row */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'center',
          marginBottom: '70px',
        }}>
          {techIcons.map((tech, i) => (
            <div key={tech.name} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 20px',
              background: tech.bg,
              border: `1px solid ${tech.color}33`,
              borderRadius: '16px',
              minWidth: '80px',
              cursor: 'default',
              transition: 'all 0.2s',
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(20px)',
              transitionDelay: `${i * 0.07}s`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px) scale(1.05)'
              e.currentTarget.style.boxShadow = `0 12px 32px ${tech.color}33`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.boxShadow = 'none'
            }}
            >
              <span style={{ fontSize: '24px', color: tech.color, fontWeight: 700 }}>{tech.letter}</span>
              <span style={{ fontSize: '11px', color: tech.color, fontWeight: 600, letterSpacing: '0.5px' }}>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Skill bars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
        }}>
          {skillGroups.map(group => (
            <div key={group.category} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '32px',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '16px',
                marginBottom: '24px',
                color: group.color,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                <span style={{
                  display: 'inline-block',
                  width: '8px', height: '8px',
                  borderRadius: '50%',
                  background: group.color,
                  boxShadow: `0 0 8px ${group.color}`,
                }} />
                {group.category}
              </div>
              {group.skills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} color={group.color} delay={i * 0.1} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
