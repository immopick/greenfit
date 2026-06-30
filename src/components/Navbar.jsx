import { useEffect, useState } from 'react'
import './Navbar.css'

const LINKS = [
  { href: '#centre', label: 'Le centre' },
  { href: '#bien-etre', label: 'Bien-être' },
  { href: '#planning', label: 'Cours collectifs' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__logo" aria-hidden="true">
            <img src="/logo.png" alt="" />
          </span>
          <span className="brand__word">Greenfit</span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#tarifs" className="btn btn--primary nav__cta--mobile" onClick={() => setOpen(false)}>
            Démarrer
          </a>
        </nav>

        <div className="nav__right">
          <a href="#tarifs" className="nav__cta">S'inscrire</a>
          <button
            className={`burger ${open ? 'is-open' : ''}`}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
