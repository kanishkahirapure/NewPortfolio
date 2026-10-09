import './Skills.css'

const skillGroups = [
  {
    number: '01',
    title: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Responsive Design', 'Accessibility'],
  },
  {
    number: '02',
    title: 'Backend',
    skills: ['Node.js', 'REST APIs', 'MongoDB', 'PostgreSQL'],
  },
  {
    number: '03',
    title: 'Tools',
    skills: ['Git', 'Vite', 'npm', 'VS Code', 'Postman', 'Figma'],
  },
  {
    number: '04',
    title: 'Workflow',
    skills: ['Code Review', 'Testing', 'Performance', 'UI Thinking'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container section__inner">
        <div className="section-heading">
          <p className="section-heading__index">02 / SKILLS</p>
          <h2>Tools for<br /><span>building well.</span></h2>
          <p className="section-heading__copy">
            A practical toolkit for creating responsive interfaces and maintainable web applications.
          </p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.number}>
              <div className="skill-card__top">
                <span>{group.number}</span>
                <h3>{group.title}</h3>
              </div>
              <div className="skill-card__tags">
                {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
