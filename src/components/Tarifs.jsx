import { useEffect, useState } from 'react'
import Icon from './Icon'
import { useRecentSubscriptions } from '../hooks/useRecentSubscriptions'
import './Tarifs.css'

const FEATURES = [
  'Accès 24 h/24, 7 jours sur 7',
  'Plateau musculation & cardio',
  'Cours collectifs illimités',
  'Vestiaires, douches & sauna',
  'Reconnu par les caisses-maladie',
]

const PLANS = [
  {
    name: '3 mois',
    price: 369,
    months: 3,
    tagline: 'Pour tester en toute liberté',
    cta: 'Choisir 3 mois',
    featured: false,
  },
  {
    name: '6 mois',
    price: 499,
    months: 6,
    tagline: 'Un bon équilibre',
    cta: 'Choisir 6 mois',
    featured: false,
  },
  {
    name: '12 mois',
    price: 850,
    months: 12,
    tagline: 'Le plus avantageux',
    cta: 'Choisir 12 mois',
    featured: true,
  },
]

const ADDONS = [
  {
    id: 'programme-inbody',
    label: 'Programme personnalisé / Inbody analyse corporelle',
    price: 60,
  },
  {
    id: 'test-condition',
    label: 'Test condition, programme personnalisé et Inbody analyse corporelle',
    price: 115,
  },
  {
    id: 'nutrition',
    label: 'Nutrition (4 séances) avec Inbody analyse corporelle',
    price: 390,
  },
  {
    id: 'linge-casier',
    label: 'Linge / location casier',
    price: 150,
  },
]

function formatChf(amount) {
  return `${amount} CHF`
}

export default function Tarifs() {
  const recentCount = useRecentSubscriptions()
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [selectedAddons, setSelectedAddons] = useState([])

  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const addon = ADDONS.find((a) => a.id === id)
    return sum + (addon?.price ?? 0)
  }, 0)

  const total = selectedPlan ? selectedPlan.price + addonsTotal : 0

  const openModal = (plan) => {
    setSelectedPlan(plan)
    setSelectedAddons([])
  }

  const closeModal = () => {
    setSelectedPlan(null)
    setSelectedAddons([])
  }

  const toggleAddon = (id) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const goToContact = () => {
    closeModal()
    window.location.hash = 'contact'
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (!selectedPlan) return undefined

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeModal()
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedPlan])

  return (
    <section className="section tarifs" id="tarifs">
      <div className="container">
        <div className="section-head tarifs__head reveal">
          <span className="eyebrow">Tarifs</span>
          <h2>Choisissez votre <span className="gradient-text">abonnement</span></h2>
        </div>

        <div className="tarifs__grid">
          {PLANS.map((p) => (
            <article
              className={`tarifs__card reveal ${p.featured ? 'is-featured' : ''}`}
              key={p.name}
            >
              {p.featured && <span className="tarifs__ribbon">Populaire</span>}
              <h3>{p.name}</h3>
              <p className="tarifs__tagline">{p.tagline}</p>
              <div className="tarifs__price">
                <span className="tarifs__amount">{p.price} CHF</span>
              </div>
              <p className="tarifs__equiv">
                soit {Math.round(p.price / p.months)} CHF / mois
              </p>
              {p.featured && (
                <p className="tarifs__social">
                  <span className="tarifs__social-dot" aria-hidden="true" />
                  <span>
                    <strong>{recentCount} personne{recentCount > 1 ? 's' : ''}</strong>
                    {' '}ont choisi cet abonnement au cours des dernières 24 h
                  </span>
                </p>
              )}
              <button
                type="button"
                className={`btn ${p.featured ? 'btn--primary' : 'btn--light'} tarifs__cta`}
                onClick={() => openModal(p)}
              >
                {p.cta}
              </button>
              <ul className="tarifs__features">
                {FEATURES.map((f) => (
                  <li key={f}>
                    <span className="check">
                      <Icon name="check" size={13} stroke={2.4} />
                    </span>{' '}
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="tarifs__extras reveal">
          <div className="tarifs__extra">
            <span className="tarifs__extra-icon" aria-hidden="true">
              <Icon name="users" size={20} stroke={1.8} />
            </span>
            <div className="tarifs__extra-text">
              <strong>Tarifs réduits</strong>
              <p>AVS, étudiant et AI : −10 % sur les abonnements et entrées fitness.</p>
            </div>
          </div>
          <div className="tarifs__extra">
            <span className="tarifs__extra-icon" aria-hidden="true">
              <Icon name="pulse" size={20} stroke={1.8} />
            </span>
            <div className="tarifs__extra-text">
              <strong>Caisses-maladie</strong>
              <p>Votre caisse-maladie prend en charge une partie de votre abonnement.</p>
            </div>
          </div>
          <div className="tarifs__extra">
            <span className="tarifs__extra-icon" aria-hidden="true">
              <Icon name="spark" size={20} stroke={1.8} />
            </span>
            <div className="tarifs__extra-text">
              <strong>3 jours d’essai offerts</strong>
              <p>Venez découvrir le centre librement, sans engagement.</p>
            </div>
          </div>
        </div>
      </div>

      {selectedPlan && (
        <div
          className="tarifs-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="tarifs-modal-title"
        >
          <button
            type="button"
            className="tarifs-modal__backdrop"
            onClick={closeModal}
            aria-label="Fermer"
          />

          <div className="tarifs-modal__panel">
            <button
              type="button"
              className="tarifs-modal__close"
              onClick={closeModal}
              aria-label="Fermer"
            >
              ×
            </button>

            <div className="tarifs-modal__head">
              <span className="eyebrow">Votre sélection</span>
              <h3 id="tarifs-modal-title">Abonnement {selectedPlan.name}</h3>
              <p className="tarifs-modal__plan-price">{formatChf(selectedPlan.price)}</p>
            </div>

            <p className="tarifs-modal__lead">
              Ajoutez des options à votre abonnement (facultatif) :
            </p>

            <ul className="tarifs-modal__options">
              {ADDONS.map((addon) => {
                const checked = selectedAddons.includes(addon.id)
                return (
                  <li key={addon.id}>
                    <label className={`tarifs-modal__option ${checked ? 'is-checked' : ''}`}>
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleAddon(addon.id)}
                      />
                      <span className="tarifs-modal__option-box" aria-hidden="true">
                        {checked && <Icon name="check" size={14} stroke={2.5} />}
                      </span>
                      <span className="tarifs-modal__option-text">{addon.label}</span>
                      <span className="tarifs-modal__option-price">{formatChf(addon.price)}</span>
                    </label>
                  </li>
                )
              })}
            </ul>

            <div className="tarifs-modal__summary">
              <div className="tarifs-modal__summary-row">
                <span>Abonnement</span>
                <span>{formatChf(selectedPlan.price)}</span>
              </div>
              {selectedAddons.length > 0 && (
                <div className="tarifs-modal__summary-row">
                  <span>Options ({selectedAddons.length})</span>
                  <span>{formatChf(addonsTotal)}</span>
                </div>
              )}
              <div className="tarifs-modal__summary-row tarifs-modal__summary-row--total">
                <span>Total</span>
                <span>{formatChf(total)}</span>
              </div>
            </div>

            <div className="tarifs-modal__actions">
              <button type="button" className="btn btn--light" onClick={closeModal}>
                Annuler
              </button>
              <button type="button" className="btn btn--primary" onClick={goToContact}>
                Continuer
                <span className="arrow"><Icon name="arrow" size={15} stroke={2} /></span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
