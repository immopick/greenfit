import { useState } from 'react'
import './Faq.css'

const FAQS = [
  {
    q: 'Pourquoi GreenFit ?',
    a: 'Chez GreenFit, vous n’êtes pas un simple client. Nous sommes des passionnés qui prennent soin de chaque visiteur, avec des installations récentes et un cadre reconnu pour son ambiance agréable.',
  },
  {
    q: 'Est-ce que je peux changer de formule ?',
    a: 'Oui. Vous pouvez adapter votre abonnement en fonction de votre profil et de vos besoins.',
  },
  {
    q: 'Quand puis-je venir ?',
    a: 'L’espace fitness reste accessible 24 h/24, 7 j/7 pour les adhérents. La réception est ouverte du lundi au jeudi de 8h30 à 13h30 et de 16h30 à 21h00, le vendredi jusqu’à 19h00, le samedi de 9h00 à 12h00, et fermée le dimanche. Les jours fériés officiels : réception fermée et pas de cours collectifs.',
  },
  {
    q: 'Je veux devenir coach sportif',
    a: 'Vous êtes un professionnel ? Nous aussi. N’hésitez pas à nous transmettre votre candidature — nous sommes toujours à la recherche de nouveaux collaborateurs motivés.',
  },
  {
    q: 'En fin de contrat, comment ça se passe ?',
    a: 'Le contrat est automatiquement reconduit pour la même période, dans les mêmes conditions. Un mois avant la date de fin, nous vous informons par écrit ou directement au centre afin que vous confirmiez ou non votre prolongation. Si vous ne souhaitez pas reconduire, merci de nous en informer par courrier au minimum 30 jours avant la date de fin de contrat.',
  },
  {
    q: 'Je suis intéressé, mais je n’ai jamais pratiqué de fitness…',
    a: 'Rassurez-vous, tout le monde a bien commencé un jour. Dès votre accueil, nous prenons le temps d’échanger avec vous et de vous présenter nos coachs. Si vous le souhaitez, nous évaluons votre condition et mettons en place un programme personnalisé selon vos objectifs. Nous sommes là pour vous accompagner.',
  },
  {
    q: 'Combien de séances pour voir des résultats ?',
    a: 'Nous vous conseillons 2 à 3 séances par semaine pour observer des progrès. Les premiers jours peuvent être exigeants, mais rapidement l’entraînement devient une véritable habitude — voire une addiction !',
  },
]

export default function Faq() {
  const [open, setOpen] = useState(-1)

  return (
    <section className="section faq" id="faq">
      <div className="container faq__grid">
        <div className="faq__intro reveal">
          <span className="eyebrow">FAQ</span>
          <h2>Vous avez <span className="gradient-text">une question ?</span></h2>
          <p>On a rassemblé les réponses aux questions les plus fréquentes.
            Vous ne trouvez pas ce que vous cherchez ?</p>
          <a href="#contact" className="btn btn--dark">Contactez-nous</a>
        </div>

        <div className="faq__list">
          {FAQS.map((item, i) => (
            <div className={`faq__item ${open === i ? 'is-open' : ''}`} key={item.q}>
              <button
                className="faq__q"
                type="button"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className="faq__icon" aria-hidden="true" />
              </button>
              <div className="faq__a">
                <div className="faq__a-inner">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
