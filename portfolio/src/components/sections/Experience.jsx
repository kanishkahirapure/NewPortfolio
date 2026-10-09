import './Experience.css'

const experiences = [
  {
    period: '2024 — Present',
    role: 'Frontend Developer',
    company: 'Independent Projects',
    description: 'Building responsive interfaces and reusable React components for product teams and personal projects.',
  },
  {
    period: '2022 — 2024',
    role: 'Junior Web Developer',
    company: 'Digital Studio',
    description: 'Developed responsive websites and interactive pages using modern HTML, CSS, JavaScript, and React.',
  },
  {
    period: '2021 — 2022',
    role: 'Software Developer',
    company: 'Open Source Community',
    description: 'Contributed to frontend projects, documentation, and community-led learning resources.',
  },
]

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container section__inner">
        <div className="section-heading">
          <p className="section-heading__index">04 / EXPERIENCE</p>
          <h2>Built through<br /><span>practice.</span></h2>
          <p className="section-heading__copy">
            Continuous learning and hands-on projects are shaping a strong foundation in modern frontend development.
          </p>
        </div>

        <div className="experience__timeline">
          {experiences.map((experience) => (
            <article className="experience-item" key={experience.role}>
              <time>{experience.period}</time>
              <div>
                <h3>{experience.role}</h3>
                <p className="experience-item__company">{experience.company}</p>
                <p>{experience.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
