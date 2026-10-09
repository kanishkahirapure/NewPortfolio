import './Projects.css'

const projects = [
  {
    number: '01',
    title: 'Productivity Dashboard',
    type: 'Web Application',
    description: 'A focused workspace that helps teams track tasks, review progress, and keep daily work organized.',
    tags: ['React', 'JavaScript', 'CSS'],
    theme: 'blue',
  },
  {
    number: '02',
    title: 'Travel Booking UI',
    type: 'Responsive Web Experience',
    description: 'A clean booking interface designed around quick searches, clear details, and effortless trip planning.',
    tags: ['HTML', 'CSS', 'React'],
    theme: 'violet',
  },
  {
    number: '03',
    title: 'Developer Portfolio',
    type: 'Personal Website',
    description: 'A fast, accessible portfolio that presents skills, experience, and selected work with a strong visual hierarchy.',
    tags: ['React', 'Vite', 'JavaScript'],
    theme: 'green',
  },
]

function ProjectCard({ project }) {
  return (
    <article className={`project-card project-card--${project.theme}`}>
      <div className="project-card__visual" aria-hidden="true">
        <div className="project-card__window">
          <div className="project-card__bars"><span /><span /><span /></div>
          <div className="project-card__content">
            <span className="project-card__menu" />
            <span className="project-card__title" />
            <span className="project-card__line" />
            <span className="project-card__line project-card__line--short" />
            <div className="project-card__blocks"><i /><i /><i /></div>
          </div>
        </div>
      </div>
      <div className="project-card__details">
        <div>
          <p>{project.type}</p>
          <h3>{project.title}</h3>
        </div>
        <p>{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container section__inner">
        <div className="section-heading">
          <p className="section-heading__index">03 / PROJECTS</p>
          <h2>Selected<br /><span>work.</span></h2>
          <p className="section-heading__copy">
            A few practical web projects that demonstrate clean interfaces, responsive layouts, and modern frontend development.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => <ProjectCard project={project} key={project.number} />)}
        </div>
      </div>
    </section>
  )
}

export default Projects
