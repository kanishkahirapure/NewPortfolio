import developerPortrait from '../../assets/developer-portrait.svg'
import './Home.css'

const codeLines = [
  { label: 'component', indent: '01' },
  { label: 'const experience', indent: '02' },
  { label: 'return <Product />', indent: '03' },
  { label: '}', indent: '04' },
]

function Home() {
  return (
    <section id="home" className="home section">
      <div className="home__glow home__glow--one" aria-hidden="true" />
      <div className="home__glow home__glow--two" aria-hidden="true" />

      <div className="container home__inner">
        <div className="home__content">
          <p className="eyebrow"><span /> Available for select projects</p>
          <p className="home__greeting">Hi, I&apos;m</p>
          <h1>Kanishka<br /><em>Hirapure.</em></h1>
          <p className="home__title">Frontend Developer</p>
          <p className="home__description">
            I build responsive and user-friendly web interfaces using React, JavaScript and modern web technologies.
          </p>
          <div className="home__actions">
            <a href="#projects" className="button button--primary">View My Work <span aria-hidden="true">↗</span></a>
            <a href="#contact" className="button button--secondary">Contact Me</a>
          </div>
          <div className="home__meta">
            <span><i /> Based in India</span>
            <span><i /> Open to collaborations</span>
          </div>
        </div>

        <div className="home__visual" aria-label="Developer profile card">
          <div className="developer-card">
            <div className="developer-card__topbar">
              <div className="developer-card__dots" aria-hidden="true"><span /><span /><span /></div>
              <span>developer.profile.js</span>
              <span className="developer-card__status">AVAILABLE</span>
            </div>

            <div className="developer-card__portrait-wrap">
              <img
                className="developer-card__portrait"
                src={developerPortrait}
                alt="Portrait illustration of Kanishka Hirapure, frontend developer"
              />
              <div className="developer-card__portrait-overlay" aria-hidden="true" />
              <div className="developer-card__identity">
                <span>KH</span>
                <div><strong>Kanishka Hirapure</strong><small>Frontend Developer</small></div>
              </div>
            </div>

            <div className="developer-card__body">
              <div className="developer-card__code" aria-hidden="true">
                <div className="developer-card__code-line"><span>01</span><code><b>const</b> developer = &#123;</code></div>
                {codeLines.slice(1).map((line) => (
                  <div className="developer-card__code-line" key={line.label}>
                    <span>{line.indent}</span><code>{line.label}</code>
                  </div>
                ))}
                <div className="developer-card__code-line developer-card__code-line--last"><span>05</span><code>&#125;;</code></div>
              </div>

              <div className="developer-card__footer">
                <div><span className="developer-card__pulse" /> Ready to build</div>
                <span>React · JS</span>
              </div>
            </div>
          </div>

          <div className="floating-card floating-card--top" aria-hidden="true">
            <span>⌘</span>
            <div><strong>Clean code</strong><small>Built for maintainability</small></div>
          </div>

          <div className="floating-card floating-card--bottom" aria-hidden="true">
            <span>✓</span>
            <div><strong>Responsive</strong><small>Every screen, every time</small></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
