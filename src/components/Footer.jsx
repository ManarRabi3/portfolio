import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '40px 32px',
      background: 'var(--bg-2)',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '20px' }}>
          M<span style={{ color: 'var(--accent)' }}>.</span>
        </div>

        <p style={{ color: 'var(--text-dim)', fontSize: '13px' }}>
          © {year} Manar Rabih · Built with React
        </p>

        <div style={{ display: 'flex', gap: '16px' }}>
          {[
            { href: 'https://github.com/ManarRabi3', label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/manar-rabih', label: 'LinkedIn' },
            { href: 'mailto:manar@fayoum.edu.eg', label: 'Email' },
          ].map(link => (
            <a key={link.label} href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{
                fontSize: '13px',
                color: 'var(--text-dim)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
