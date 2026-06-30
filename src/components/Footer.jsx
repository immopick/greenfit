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
              <span className="brand__logo" aria-hidden="true">
                <img src="/logo.png" alt="" />
              </span>
              <span className="brand__word">GreenFit</span>
            </a>
            <p>Votre centre de bien-être à Salquenen / Sierre. Plus de 2 000 m²
              dédiés à la forme, la santé et le rétablissement.</p>
            <address className="footer__contact">
              Industriestrasse 16<br />
              3970 Salquenen / Sierre<br />
              <a href="tel:+41275654131">027 565 41 31</a><br />
              <a href="mailto:info@green-fit.ch">info@green-fit.ch</a>
            </address>
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
