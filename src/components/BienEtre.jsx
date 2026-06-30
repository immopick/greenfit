import './BienEtre.css'

const OFFERS = [
  {
    title: 'Physiothérapie',
    text: 'L’expertise de physiothérapeutes partenaires pour la rééducation, la prévention et le suivi.',
    src: '/images/salle/salle5.jpg',
    alt: 'Cabinet de physiothérapie GreenFit',
  },
  {
    title: 'Pilates Reformer',
    text: 'Une spécialiste du Pilates Reformer pour renforcer, étirer et retrouver un corps aligné.',
    src: '/images/salle/pilates-reformer.jpg',
    alt: 'Studio Pilates Reformer GreenFit',
  },
  {
    title: 'Naturopathie',
    text: 'Une naturopathe partenaire pour un accompagnement personnalisé de votre vitalité.',
    src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    alt: 'Consultation naturopathie GreenFit',
  },
]

export default function BienEtre() {
  return (
    <section className="bienetre" id="bien-etre">
      <div className="container">
        <div className="bienetre__head reveal">
          <div className="bienetre__intro">
            <span className="bienetre__label">Bien-être</span>
            <h2 className="bienetre__title">Une approche globale de votre santé</h2>
            <p className="bienetre__lead">
              En collaboration avec nos partenaires, profitez de l’expertise de
              physiothérapeutes, d’une naturopathe et d’une spécialiste du
              Pilates Reformer pour un accompagnement complet et personnalisé.
            </p>
          </div>
          <a href="#contact" className="btn btn--light bienetre__cta">Prendre rendez-vous</a>
        </div>

        <div className="bienetre__grid">
          {OFFERS.map((item) => (
            <article className="bienetre__card reveal" key={item.title}>
              <figure className="bienetre__card-media">
                <img src={item.src} alt={item.alt} loading="lazy" />
              </figure>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
