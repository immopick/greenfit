import { useReveal } from './hooks/useReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Centre from './components/Centre'
import BienEtre from './components/BienEtre'
import Planning from './components/Planning'
import Tarifs from './components/Tarifs'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useReveal()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Centre />
        <BienEtre />
        <Planning />
        <Tarifs />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
