import './Footer.css'

const COLS = [
  {
    title: 'Le centre',
    links: ['À propos', 'Nos coachs', 'Équipements', 'Recrutement'],
  },
  {
    title: 'Activités',
    links: ['Cours collectifs', 'Bien-être', 'Musculation', 'Coaching'],
  },
  {
    title: 'Infos',
    links: ['Tarifs', 'FAQ', 'Contact'],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#top" className="brand brand--footer">
              <span className="brand__mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                  <path d="M12 2c2.5 3.5 6 5.8 6 10a6 6 0 1 1-12 0c0-1.6.6-3 1.4-4.3C8.6 9.6 10 11 12 11c0-3-1-6 0-9Z" fill="currentColor"/>
                </svg>
              </span>
              Green<span className="brand__accent">Fit</span>
            </a>
            <p>Votre centre de bien-être à Salquenen / Sierre. Plus de 2 000 m²
              dédiés à la forme, la santé et le rétablissement.</p>
            <address className="footer__contact">
              Industriestrasse 16<br />
              3970 Salquenen / Sierre<br />
              <a href="tel:+41275654131">027 565 41 31</a><br />
              <a href="mailto:info@green-fit.ch">info@green-fit.ch</a>
            </address>
            <a href="#tarifs" className="btn btn--light">3 jours d’essai offerts</a>
          </div>

          <div className="footer__cols">
            {COLS.map((c) => (
              <div className="footer__col" key={c.title}>
                <h4>{c.title}</h4>
                <ul>
                  {c.links.map((l) => (
                    <li key={l}><a href="#">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} GreenFit. Tous droits réservés.</p>
          <div className="footer__legal">
            <a href="#">Mentions légales</a>
            <a href="#">Confidentialité</a>
            <a href="#">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
