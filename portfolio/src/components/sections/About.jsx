import './About.css'

const facts = [
  ['Name', 'Kanishka Hirapure'],
  ['Location', 'India · Remote'],
  ['Focus', 'Frontend Development'],
  ['Availability', 'Open to projects'],
]

function About() {
  return (
    <section id="about" className="section about">
      <div className="container section__inner">
        <div className="section-heading">
          <p className="section-heading__index">01 / ABOUT</p>
          <h2>Thoughtful code.<br /><span>Useful experiences.</span></h2>
          <p className="section-heading__copy">
            I am a software developer who enjoys turning clear ideas into responsive, accessible web products.
          </p>
        </div>

        <div className="about__grid">
          <div className="about__story">
            <p>
              I work across the full frontend experience, from the structure of the page to the smallest interaction detail.
            </p>
            <p>
              My approach combines clean JavaScript, React, and modern CSS with careful attention to accessibility, performance, and usability.
            </p>
            <p>
              I enjoy building useful tools, learning new technologies, and helping teams create websites that feel simple and dependable.
            </p>
          </div>

          <div className="facts-card">
            <p className="facts-card__label">Developer details</p>
            {facts.map(([label, value]) => (
              <div className="facts-card__row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
            <a href="#contact" className="text-link">Start a conversation <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
