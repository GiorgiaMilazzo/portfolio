import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Contacts from './components/Contacts.jsx'

function App() {
  return (
    <div className="portfolio-page">
      <Hero />
      <Projects />

      <section className="info-strip panel-cream">
        <div className="mini-title">Info</div>
        <ul>
          <li>Based in Assisi, Perugia, Italy</li>
          <li>Driving license (B), no car</li>
          <li>First language Italian</li>
          <li>First language English</li>
        </ul>
      </section>

      <Contacts />
    </div>
  )
}

export default App