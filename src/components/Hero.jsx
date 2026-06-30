import Icon from './Icon'
import './Hero.css'

const STATS = [
  { value: '3 200+', label: 'Adhérents actifs' },
  { value: '11', label: 'Cours / semaine' },
  { value: '9', label: 'Coachs diplômés' },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/salle/salle.jpg"
        >
          <source src="/videos/gym.mov" type="video/mp4" />
        </video>
        <div className="hero__overlay" />
        <div className="hero__grid" aria-hidden="true" />
      </div>

      <div className="container hero__content">
        <div className="hero__top">
          <h1 className="hero__title">
            BOUGEZ.<br />
            <span className="gradient-text">TRANSPIREZ.</span><br />
            PROGRESSEZ.
          </h1>

          <p className="hero__sub">
            Votre centre de bien-être près de chez vous. Forme, santé et
            récupération réunies dans un espace moderne ouvert 24 h/24.
          </p>

          <div className="hero__actions">
            <a href="#tarifs" className="btn btn--light">
              Je veux m'inscrire
              <span className="arrow"><Icon name="arrow" size={15} stroke={2} /></span>
            </a>
            <a href="#planning" className="btn btn--ghost">Voir le planning</a>
          </div>
        </div>

        <div className="hero__stats">
          {STATS.map((s) => (
            <div className="hero__stat" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#centre" className="hero__scroll" aria-label="Défiler vers le bas">
        <span />
      </a>
    </section>
  )
}
