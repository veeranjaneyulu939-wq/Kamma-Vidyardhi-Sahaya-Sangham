import { FaArrowRight, FaBookOpen, FaHouse, FaShieldHeart } from 'react-icons/fa6'

const features = [
  {
    icon: FaHouse,
    title: 'A place to belong',
    description: 'Comfortable residential spaces designed to help students feel at home while they study.',
  },
  {
    icon: FaBookOpen,
    title: 'Built around learning',
    description: 'A calm, focused environment where academic routines and personal growth come first.',
  },
  {
    icon: FaShieldHeart,
    title: 'Care you can trust',
    description: 'A supportive community committed to student safety, wellbeing, and responsible living.',
  },
]

function App() {
  return (
    <main>
      <section className="hero" aria-labelledby="page-title">
        <div className="hero__glow" aria-hidden="true" />
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#home" aria-label="Kamma Vidyarthi Sahaya Sangam home">
            <span className="brand__mark">క</span>
            <span>
              <strong>KVSS</strong>
              <small>Guntur</small>
            </span>
          </a>
          <a className="nav__link" href="#about">About the hostel</a>
        </nav>

        <div className="hero__content" id="home">
          <div className="hero__copy">
            <p className="eyebrow">Kamma Vidyarthi Sahaya Sangam</p>
            <h1 id="page-title">
              A steady home for
              <span> ambitious students.</span>
            </h1>
            <p className="hero__intro">
              A residential facility for boys in Guntur, Andhra Pradesh, created to support focused study,
              good habits, and lasting friendships.
            </p>
            <a className="button" href="#about">
              Discover our community <FaArrowRight aria-hidden="true" />
            </a>
          </div>

          <aside className="hero__card" aria-label="Our guiding principle">
            <span className="hero__card-number">01</span>
            <blockquote>“Education grows stronger when students have stability, dignity, and community.”</blockquote>
            <div className="hero__card-line" />
            <p>Supporting tomorrow’s leaders from Guntur.</p>
          </aside>
        </div>
      </section>

      <section className="about" id="about" aria-labelledby="about-title">
        <div className="about__heading">
          <p className="eyebrow eyebrow--dark">More than accommodation</p>
          <h2 id="about-title">Space to study.<br />People who care.</h2>
        </div>
        <div className="features">
          {features.map(({ icon: Icon, title, description }, index) => (
            <article className="feature" key={title}>
              <div className="feature__top">
                <Icon aria-hidden="true" />
                <span>0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <span>కమ్మ విద్యార్థి సహాయ సంఘం</span>
        <span>Guntur, Andhra Pradesh</span>
      </footer>
    </main>
  )
}

export default App
