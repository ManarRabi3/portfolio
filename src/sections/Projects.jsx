import React, { useState } from 'react'
import useInView from '../hooks/useInView'

const projects = [
  {
    title: 'Healthia',
    period: '2024 – 2025',
    description: 'A health-focused web application providing medical information, wellness tracking, and user-friendly health management features.',
    tags: ['React', 'JavaScript', 'CSS3', 'API'],
    github: 'https://github.com/ManarRabi3/Healthia',
    color: '#4ade80',
    emoji: '🏥',
    featured: true,
  },
  {
    title: 'E-Commerce Platform',
    period: '2024',
    description: 'Full-featured e-commerce web app with product listings, cart functionality, and a clean shopping UI experience.',
    tags: ['React', 'JavaScript', 'Bootstrap', 'REST API'],
    github: 'https://github.com/ManarRabi3/E-commerce',
    color: '#ff6a9e',
    emoji: '🛍️',
    featured: true,
  },
  {
    title: 'News Web App',
    period: '2024',
    description: 'Dynamic news aggregator fetching real-time articles across categories with a responsive, modern UI.',
    tags: ['React', 'News API', 'CSS3', 'JavaScript'],
    github: 'https://github.com/ManarRabi3/new-web',
    color: '#7c6aff',
    emoji: '📰',
    featured: true,
  },
  {
    title: 'Salary Management App',
    period: '2024',
    description: 'Tool for managing employee salaries with calculations, filtering, and clean data presentation.',
    tags: ['React', 'JavaScript', 'CRUD'],
    github: 'https://github.com/ManarRabi3/salary-app',
    color: '#fbbf24',
    emoji: '💰',
    featured: false,
  },
  {
    title: 'To-Do App',
    period: '2023',
    description: 'Feature-rich task manager with add, edit, delete, and filter functionality — built with clean component architecture.',
    tags: ['React', 'useState', 'CSS3'],
    github: null,
    color: '#38bdf8',
    emoji: '✅',
    featured: false,
  },
  {
    title: 'Wesal',
    period: '2023 – 2024',
    description: 'Graduation Project: Arabic Sign Language detection app with real-time recognition, speech-to-text, TTS, courses, categories & favorites.',
    tags: ['AI', 'Python', 'Computer Vision', 'React'],
    github: null,
    color: '#c084fc',
    emoji: '🤟',
    featured: false,
  },
]

export default function Projects() {
  const [ref, inView] = useInView()
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'featured' ? projects.filter(p => p.featured) : projects

  return (
    <section id="projects" className="section">
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '50px',
          flexWrap: 'wrap',
          gap: '20px',
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(30px)',
          transition: 'all 0.7s ease',
        }} ref={ref}>
          <div>
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">
              My <span className="gradient-text">Projects</span>
            </h2>
          </div>

          <div style={{
            display: 'flex',
            gap: '8px',
            padding: '4px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '50px',
          }}>
            {['all', 'featured'].map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{
                padding: '8px 20px',
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 500,
                background: filter === f ? 'var(--accent)' : 'transparent',
                color: filter === f ? 'white' : 'var(--text-muted)',
                transition: 'all 0.2s',
                textTransform: 'capitalize',
              }}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '28px',
        }}>
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 0.08} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <a href="https://github.com/ManarRabi3" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 32px',
            border: '1px solid var(--border-bright)',
            borderRadius: '50px',
            color: 'var(--text)',
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            fontWeight: 500,
            background: 'transparent',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(124,106,255,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, delay }) {
  const [ref, inView] = useInView()
  const [hovered, setHovered] = useState(false)
  const isClickable = !!project.github

  const Wrapper = isClickable ? 'a' : 'div'
  const wrapperProps = isClickable
    ? { href: project.github, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Wrapper
      ref={ref}
      {...wrapperProps}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
        background: 'var(--bg-card)',
        border: `1px solid ${hovered ? project.color + '55' : 'var(--border)'}`,
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        cursor: isClickable ? 'pointer' : 'default',
        transition: 'all 0.35s ease',
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered ? 'translateY(-6px)' : 'translateY(0)'
          : 'translateY(30px)',
        transitionDelay: inView ? '0s' : `${delay}s`,
        boxShadow: hovered ? `0 20px 48px ${project.color}18` : 'none',
      }}
    >
      {/* ── Preview area (like the reference) ── */}
      <div style={{
        width: '100%',
        height: '200px',
        background: hovered
          ? `linear-gradient(135deg, ${project.color}20, rgba(255,255,255,0.04))`
          : 'rgba(255,255,255,0.02)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.4s ease',
        borderBottom: `1px solid ${hovered ? project.color + '33' : 'var(--border)'}`,
      }}>
        {/* dot-grid bg */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${project.color}22 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          opacity: hovered ? 1 : 0.5,
          transition: 'opacity 0.4s',
        }} />

        {/* Emoji */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          width: '100px',
          height: '100px',
          borderRadius: '24px',
          border: `2px solid ${project.color}55`,
          background: `${project.color}10`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: hovered ? `0 0 32px ${project.color}40, inset 0 0 20px ${project.color}10` : `0 0 0px transparent`,
          transition: 'box-shadow 0.4s ease, transform 0.4s ease',
          transform: hovered ? 'scale(1.1) translateY(-4px)' : 'scale(1)',
        }}>
          <span style={{
            fontSize: '52px',
            lineHeight: 1,
            filter: `drop-shadow(0 4px 12px ${project.color}60)`,
          }}>
            {project.emoji}
          </span>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            padding: '4px 10px',
            background: `${project.color}20`,
            border: `1px solid ${project.color}50`,
            borderRadius: '50px',
            fontSize: '11px',
            color: project.color,
            fontWeight: 600,
            letterSpacing: '0.5px',
            zIndex: 2,
          }}>★ Featured</div>
        )}

        {/* GitHub overlay on hover */}
        {isClickable && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
            zIndex: 3,
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '11px 22px',
              background: 'rgba(255,255,255,0.12)',
              borderRadius: '50px',
              border: '1px solid rgba(255,255,255,0.25)',
              color: 'white',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '14px',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
              View on GitHub
            </div>
          </div>
        )}
      </div>

      {/* ── Card body ── */}
      <div style={{ padding: '22px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', gap: '10px' }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '17px',
            color: 'var(--text)',
            lineHeight: 1.2,
          }}>{project.title}</h3>
          <span style={{
            flexShrink: 0,
            fontSize: '12px',
            color: 'var(--text-dim)',
            fontFamily: 'var(--font-body)',
            whiteSpace: 'nowrap',
          }}>{project.period}</span>
        </div>

        <p style={{
          fontSize: '13px',
          color: 'var(--text-muted)',
          lineHeight: 1.7,
          marginBottom: '16px',
        }}>{project.description}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              padding: '4px 12px',
              borderRadius: '6px',
              background: `${project.color}12`,
              border: `1px solid ${project.color}40`,
              fontSize: '12px',
              color: project.color,
              fontWeight: 600,
              fontFamily: 'var(--font-body)',
              letterSpacing: '0.2px',
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}
