import { useState } from "react";

export default function Footer() {
    const [visitorCount] = useState(1024)

    return(
    <footer className="border-t mt-8" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4">
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-muted)' }}>
            © 2026 Neo Thobejane · Built for the Cloud Resume Challenge
          </span>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded border" style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}>
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--color-green)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-muted)', letterSpacing: '0.08em' }}>
              VISITORS:
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-green)', letterSpacing: '0.1em' }}>
              {visitorCount.toLocaleString()}
            </span>
          </div>
        </div>
      </footer>
    ); 
}
