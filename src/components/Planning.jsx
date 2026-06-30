import { useState } from 'react'
import Icon from './Icon'
import './Planning.css'

const TYPES = {
  caf: { label: 'CAF', tone: 'green', icon: 'pulse' },
  pump: { label: 'Body Pump', tone: 'purple', icon: 'strength' },
  yoga: { label: 'Yoga', tone: 'green', icon: 'person' },
  fstrength: { label: 'F. Strength', tone: 'slate', icon: 'strength' },
  attack: { label: 'Body Attack', tone: 'purple', icon: 'pulse' },
  pilates: { label: 'Pilates', tone: 'green', icon: 'wellness' },
  functional: { label: 'Functional', tone: 'slate', icon: 'spark' },
}

const CATEGORIES = [
  { key: 'all', label: 'Tout' },
  { key: 'pump', label: 'Body Pump' },
  { key: 'yoga', label: 'Yoga' },
  { key: 'pilates', label: 'Pilates' },
  { key: 'functional', label: 'Functional' },
  { key: 'attack', label: 'Body Attack' },
  { key: 'caf', label: 'CAF' },
  { key: 'fstrength', label: 'F. Strength' },
]

const SLOTS = [
  { key: 'morning', label: 'Matin' },
  { key: 'midday', label: 'Midi' },
  { key: 'evening', label: 'Soir' },
]

const DAY_NAMES = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']

const s = (type, start, end) => ({ type, start, end })

const SCHEDULE = [
  // Lundi
  { morning: s('caf', '09:30', '10:30'), midday: null, evening: s('pump', '18:30', '19:30') },
  // Mardi
  { morning: s('yoga', '09:30', '11:00'), midday: s('fstrength', '12:15', '13:00'), evening: s('attack', '18:30', '19:30') },
  // Mercredi
  { morning: s('pilates', '09:30', '10:30'), midday: null, evening: s('functional', '18:30', '19:15') },
  // Jeudi
  { morning: s('pump', '09:30', '10:30'), midday: s('functional', '12:15', '13:00'), evening: s('pump', '18:30', '19:30') },
  // Vendredi
  { morning: null, midday: null, evening: null },
  // Samedi
  { morning: s('pump', '09:30', '10:30'), midday: null, evening: null },
  // Dimanche
  { morning: null, midday: null, evening: null },
]

function getCurrentMonday() {
  const now = new Date()
  const day = now.getDay()
  const diff = day === 0 ? -6 : 1 - day
  const mon = new Date(now)
  mon.setDate(now.getDate() + diff)
  mon.setHours(0, 0, 0, 0)
  return mon
}

function getWeekDates(offset) {
  const monday = getCurrentMonday()
  return DAY_NAMES.map((name, i) => {
    const d = new Date(monday)
    d.setDate(monday.getDate() + offset * 7 + i)
    return { name, num: d.getDate() }
  })
}

function sessionMatches(s, category) {
  return s && (category === 'all' || s.type === category)
}

export default function Planning() {
  const [category, setCategory] = useState('all')
  const [selectedDay, setSelectedDay] = useState(0)
  const [week, setWeek] = useState(0)

  const dates = getWeekDates(week)
  const mobileSessions = SLOTS.flatMap((slot) => {
    const session = SCHEDULE[selectedDay][slot.key]
    if (!sessionMatches(session, category)) return []
    const t = TYPES[session.type]
    return [{ slot, s: session, t }]
  })

  return (
    <section className="section planning" id="planning">
      <span className="planning__plus planning__plus--tl" aria-hidden="true">+</span>
      <span className="planning__plus planning__plus--tr" aria-hidden="true">+</span>

      <div className="container">
        <div className="planning__head reveal">
          <span className="planning__eyebrow">Cours collectifs</span>
          <h2>Planning de la semaine</h2>
          <p className="planning__sub">
            Plus de 7 disciplines encadrées par nos coachs. Filtrez par
            activité et réservez votre place en quelques clics.
          </p>
          <div className="planning__filters" role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                className={`planning__filter ${category === cat.key ? 'is-active' : ''}`}
                onClick={() => setCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop — grille semaine */}
        <div className="planning__calendar planning__calendar--desktop reveal">
          <button
            className="planning__nav"
            onClick={() => setWeek((w) => w - 1)}
            aria-label="Semaine précédente"
          >
            <Icon name="arrow" size={18} className="flip" />
          </button>

          <div className="planning__scroll">
            <div className="planning__grid">
              <div className="planning__corner" />
              {dates.map((d, di) => (
                <button
                  key={di}
                  className={`planning__day ${selectedDay === di ? 'is-selected' : ''}`}
                  onClick={() => setSelectedDay(di)}
                >
                  <span className="planning__day-name">{d.name}</span>
                  <span className="planning__day-num">{d.num}</span>
                </button>
              ))}

              {SLOTS.map((slot) => (
                <div className="planning__rowgroup" key={slot.key} style={{ display: 'contents' }}>
                  <div className="planning__timecol">{slot.label}</div>
                  {dates.map((_, di) => {
                    const session = SCHEDULE[di][slot.key]
                    const matches = sessionMatches(session, category)
                    const selCol = selectedDay === di ? 'is-selcol' : ''

                    if (!session || !matches) {
                      return <div className={`planning__cell is-empty ${selCol}`} key={di} />
                    }

                    const t = TYPES[session.type]
                    return (
                      <div
                        className={`planning__cell tone-${t.tone} ${selCol}`}
                        key={di}
                      >
                        <span className="planning__cell-icon">
                          <Icon name={t.icon} size={16} />
                        </span>
                        <span className="planning__cell-name">{t.label}</span>
                        <span className="planning__cell-spots">
                          <Icon name="clock" size={13} />
                          {session.start} – {session.end}
                        </span>
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>

          <button
            className="planning__nav"
            onClick={() => setWeek((w) => w + 1)}
            aria-label="Semaine suivante"
          >
            <Icon name="arrow" size={18} />
          </button>
        </div>

        {/* Mobile — vue jour compacte */}
        <div className="planning__mobile reveal">
          <div className="planning__mobile-week">
            <button
              type="button"
              className="planning__mobile-nav"
              onClick={() => setWeek((w) => w - 1)}
              aria-label="Semaine précédente"
            >
              <Icon name="arrow" size={16} className="flip" />
            </button>
            <span className="planning__mobile-label">
              Semaine du {dates[0].num} au {dates[6].num}
            </span>
            <button
              type="button"
              className="planning__mobile-nav"
              onClick={() => setWeek((w) => w + 1)}
              aria-label="Semaine suivante"
            >
              <Icon name="arrow" size={16} />
            </button>
          </div>

          <div className="planning__mobile-days">
            {dates.map((d, di) => (
              <button
                key={di}
                type="button"
                className={`planning__mobile-day ${selectedDay === di ? 'is-selected' : ''}`}
                onClick={() => setSelectedDay(di)}
              >
                <span>{d.name}</span>
                <strong>{d.num}</strong>
              </button>
            ))}
          </div>

          <ul className="planning__mobile-list">
            {mobileSessions.length === 0 ? (
              <li className="planning__mobile-empty">
                Aucun cours pour ce filtre ce jour-là.
              </li>
            ) : (
              mobileSessions.map(({ slot, s: session, t }) => (
                <li
                  key={slot.key}
                  className={`planning__mobile-item tone-${t.tone}`}
                >
                  <span className="planning__mobile-time">{session.start}</span>
                  <div className="planning__mobile-body">
                    <div>
                      <strong>{t.label}</strong>
                      <span>
                        <Icon name="clock" size={12} />
                        {session.start} – {session.end}
                      </span>
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>

        <p className="planning__note reveal">
          Réservez vos cours en un clin d’œil — <a href="#contact">téléchargez</a> notre
          application pour une expérience fluide.
        </p>
      </div>
    </section>
  )
}
