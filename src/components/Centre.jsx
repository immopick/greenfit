import './Centre.css'

const FEATURES = [
  {
    title: 'Plateau musculation',
    text: '600 m² · machines guidées, poids libres, zone cross-training.',
  },
  {
    title: 'Studios collectifs',
    text: 'Deux studios insonorisés pour yoga, cycling et cours toniques.',
  },
  {
    title: 'Espace bien-être',
    text: 'Vestiaires premium, douches, sauna et coin détente.',
  },
  {
    title: 'Coaching sur-mesure',
    text: 'Bilan offert et suivi avec nos coachs diplômés d’État.',
  },
]

const PHOTOS = [
  {
    src: '/images/salle/salle.jpg',
    alt: 'Plateau musculation GreenFit',
  },
  {
    src: '/images/salle/salle2.jpg',
    alt: 'Espace cardio GreenFit',
  },
  {
    src: '/images/salle/salle3.jpg',
    alt: 'Studio cours collectifs GreenFit',
  },
  {
    src: '/images/salle/salle4.jpg',
    alt: 'Espace bien-être GreenFit',
  },
]

export default function Centre() {
  return (
    <section className="centre" id="centre">
      <div className="container centre__layout">
        <div className="centre__content">
          <span className="centre__label reveal">Le centre</span>

          <h2 className="centre__title reveal">
            Bien plus<br />qu’un fitness
          </h2>

          <p className="centre__lead reveal">
            GreenFit vous accueille dans un espace moderne de plus de 2 000 m²,
            ouvert 24 h/24, entièrement dédié à la forme, la santé et le
            bien-être. Reconnu par les caisses-maladie, notre centre propose
            une approche globale portée par une équipe de professionnels
            qualifiés.
          </p>

          <ul className="centre__features reveal">
            {FEATURES.map((f) => (
              <li key={f.title}>
                <strong>{f.title}</strong>
                <span>{f.text}</span>
              </li>
            ))}
          </ul>

          <div className="centre__metrics reveal">
            <div>
              <strong>2 000 m²</strong>
              <span>Espace total</span>
            </div>
            <div>
              <strong>24 h/24</strong>
              <span>Ouvert en continu</span>
            </div>
            <div>
              <strong>Reconnu</strong>
              <span>Caisses-maladie</span>
            </div>
          </div>
        </div>

        <div className="centre__hero reveal">
          <img src={PHOTOS[0].src} alt={PHOTOS[0].alt} loading="lazy" />
        </div>
      </div>

      <div className="centre__strip">
        <div className="centre__strip-track">
          {PHOTOS.slice(1).map((photo) => (
            <figure className="centre__strip-item reveal" key={photo.alt}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
