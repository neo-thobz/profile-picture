import { useState } from "react";

export default function NavBar() {

    const [activeSection, setActiveSection] = useState('About')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const NAV_LINKS = ['About', 'Contact']


    return(
       <nav className="fixed top-0 left-0 right-0 z-40 border-b" style={{ borderColor: 'var(--color-border)', background: 'rgba(5,13,18,0.85)', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--color-green)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-green)', letterSpacing: '0.1em' }}>
              NEO_THOBS.CLOUD
            </span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setActiveSection(link)}
                className="px-3 py-1.5 rounded transition-all duration-200"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.08em',
                  color: activeSection === link ? 'var(--color-cyan)' : 'var(--color-muted)',
                  background: activeSection === link ? 'rgba(0,212,255,0.08)' : 'transparent',
                }}
                onMouseEnter={e => { if (activeSection !== link) (e.target as HTMLElement).style.color = 'var(--color-text)' }}
                onMouseLeave={e => { if (activeSection !== link) (e.target as HTMLElement).style.color = 'var(--color-muted)' }}
              >
                {link.toUpperCase()}
              </a>
            ))}
          </div>
          <button
            className="md:hidden p-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: 'var(--color-cyan)' }}
          >
            <div className="w-5 h-0.5 mb-1" style={{ background: 'currentColor' }} />
            <div className="w-5 h-0.5 mb-1" style={{ background: 'currentColor' }} />
            <div className="w-5 h-0.5" style={{ background: 'currentColor' }} />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t px-6 py-4 flex flex-col gap-2" style={{ borderColor: 'var(--color-border)', background: 'rgba(5,13,18,0.98)' }}>
            {NAV_LINKS.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-text)', letterSpacing: '0.08em', padding: '0.5rem 0' }}>
                {`> ${link.toUpperCase()}`}
              </a>
            ))}
          </div>
        )}
      </nav>
    ); 
}
