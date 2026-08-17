export default function NavBar() {
    return(
       <nav className="fixed top-0 left-0 right-0 z-40 border-b" style={{ borderColor: 'var(--color-border)', background: 'rgba(5,13,18,0.85)', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--color-green)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-green)', letterSpacing: '0.1em' }}>
              NEO_THOBS.CLOUD
            </span>
          </div>
        </div>
      </nav>
    ); 
}
