import { useState } from 'react'
import Icon from './Icon'
import './Contact.css'

const RECEPTION_HOURS = [
  { days: 'Lundi – jeudi', hours: '8h30 – 13h30 / 16h30 – 21h00' },
  { days: 'Vendredi', hours: '8h30 – 13h30 / 16h30 – 19h00' },
  { days: 'Samedi', hours: '9h00 – 12h00' },
  { days: 'Dimanche', hours: 'Fermé' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <div className="contact__intro reveal">
          <span className="eyebrow">Contact</span>
          <h2>On se rencontre <span className="gradient-text">bientôt ?</span></h2>
          <p>
            3 jours d’essai gratuits, une visite du centre ou une simple question
            notre équipe vous répond sous 24 h.
          </p>

          <div className="contact__reach">
            <a className="contact__phone" href="tel:+41275654131">
              027 565 41 31
            </a>
            <a className="contact__email" href="mailto:info@green-fit.ch">
              info@green-fit.ch
            </a>
          </div>

          <address className="contact__addr">
            <a
              href="https://maps.google.com/?q=Industriestrasse+16,+3970+Salquenen"
              target="_blank"
              rel="noopener noreferrer"
            >
              Industriestrasse 16<br />
              3970 Salquenen / Sierre
            </a>
          </address>

          <div className="contact__hours">
            <h3 className="contact__hours-title">Horaires réception</h3>
            <ul>
              {RECEPTION_HOURS.map((slot) => (
                <li key={slot.days}>
                  <span>{slot.days}</span>
                  <span>{slot.hours}</span>
                </li>
              ))}
            </ul>
            <p>Fitness adhérents : 24 h/24 · Jours fériés : réception fermée, pas de cours collectifs.</p>
          </div>
        </div>

        <div className="contact__main reveal">
          {sent ? (
            <div className="contact__card contact__success">
              <div className="contact__success-ic"><Icon name="check" size={28} stroke={2} /></div>
              <h3>Message envoyé</h3>
              <p>Notre équipe vous recontacte très vite pour planifier votre essai de 3 jours.</p>
              <button className="btn btn--dark" type="button" onClick={() => setSent(false)}>
                Nouveau message
              </button>
            </div>
          ) : (
            <form className="contact__card contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-head">
                <h3>Demande d’essai gratuit</h3>
                <p>Sans engagement</p>
              </div>

              <div className="contact__fields">
                <div className="contact__row">
                  <label>
                    Prénom
                    <input type="text" required placeholder="Camille" autoComplete="given-name" />
                  </label>
                  <label>
                    Nom
                    <input type="text" required placeholder="Durand" autoComplete="family-name" />
                  </label>
                </div>
                <label>
                  Email
                  <input type="email" required placeholder="camille@email.ch" autoComplete="email" />
                </label>
                <label>
                  Téléphone
                  <input type="tel" placeholder="079 123 45 67" autoComplete="tel" />
                </label>
                <label>
                  Objectif
                  <select defaultValue="">
                    <option value="" disabled>Choisir…</option>
                    <option>Perte de poids</option>
                    <option>Prise de muscle</option>
                    <option>Remise en forme</option>
                    <option>Bien-être & mobilité</option>
                  </select>
                </label>
                <label>
                  Message <span className="contact__optional">(optionnel)</span>
                  <textarea rows="3" placeholder="Une question, une disponibilité…" />
                </label>
              </div>

              <div className="contact__form-foot">
                <button type="submit" className="btn btn--primary contact__submit">
                  Envoyer <span className="arrow"><Icon name="arrow" size={15} stroke={2} /></span>
                </button>
                <small className="contact__legal">
                  En envoyant ce formulaire, vous acceptez d’être recontacté·e par GreenFit.
                </small>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
