import React, { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '20px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(10, 10, 15, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    }}>
      {/* Logo */}
      <a href="#hero" style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: '22px',
        color: 'var(--text)',
        letterSpacing: '-0.5px',
      }}>
        M<span style={{ color: 'var(--accent)' }}>.</span>
      </a>

      {/* Desktop nav */}
      <nav style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="desktop-nav">
        {navLinks.map(link => (
          <a key={link.href} href={link.href} style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            fontWeight: 400,
            color: 'var(--text-muted)',
            transition: 'color 0.2s',
            letterSpacing: '0.3px',
          }}
          onMouseEnter={e => e.target.style.color = 'var(--text)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >
            {link.label}
          </a>
        ))}
        <a href="mailto:manar@fayoum.edu.eg" style={{
          padding: '9px 22px',
          borderRadius: '50px',
          background: 'var(--accent)',
          color: 'white',
          fontSize: '14px',
          fontWeight: 500,
          fontFamily: 'var(--font-body)',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.target.style.background = '#6b58ee'; e.target.style.transform = 'translateY(-1px)'; }}
        onMouseLeave={e => { e.target.style.background = 'var(--accent)'; e.target.style.transform = 'translateY(0)'; }}
        >
          Hire Me
        </a>
      </nav>

      {/* Mobile hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{
        display: 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--text)',
        padding: '4px',
      }} className="mobile-menu-btn" aria-label="Menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {menuOpen
            ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
            : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
          }
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          top: '70px',
          background: 'rgba(10, 10, 15, 0.98)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px',
          zIndex: 99,
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '24px', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--text)' }}>
              {link.label}
            </a>
          ))}
          <a href="mailto:manar@fayoum.edu.eg" style={{
            padding: '12px 32px',
            borderRadius: '50px',
            background: 'var(--accent)',
            color: 'white',
            fontSize: '18px',
            fontWeight: 600,
          }}>Hire Me</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}
