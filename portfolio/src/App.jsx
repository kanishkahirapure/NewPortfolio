import { useState } from 'react'
import PhotoLoader from './components/PhotoLoader'
import FlyingText from './components/FlyingText'
import portrait from './assets/avatar.png'
import resumeUrl from '../../Kanishka Hirapure (2).pdf'
import alphaDsaCertificate from '../../Screenshot 2026-10-09 100559.png'
import girlScriptCertificate from '../../Screenshot 2026-10-09 100415.png'
import bharatInternCertificate from '../../Screenshot 2026-10-09 100341.png'
import programmingHeroCertificate from '../../Screenshot 2026-10-09 100313.png'
import udemyCertificate from '../../Screenshot 2026-10-09 100237.png'
import ciscoCertificate from '../../Screenshot 2026-10-09 100103.png'
import './portfolio.css'

const navigation = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#capabilities' },
  { label: 'Projects', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const projects = [
  {
    number: '01',
    category: 'Travel booking website',
    title: 'SA Dream Destination',
    description: 'A multi-page travel booking website with responsive layouts, a booking popup, and WhatsApp integration.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: '',
    demoUrl: '',
  },
  {
    number: '02',
    category: 'Healthcare navigation and referral',
    title: 'Rural Healthcare Navigation & Referral System',
    description: 'A project designed to help rural patients discover suitable healthcare facilities and referral services.',
    tags: [],
    githubUrl: '',
    demoUrl: '',
  },
  {
    number: '03',
    category: 'Personal website',
    title: 'Personal Portfolio',
    description: 'A responsive developer portfolio built with React, CSS, and GSAP scroll animations.',
    tags: ['React', 'CSS', 'GSAP'],
    githubUrl: '',
    demoUrl: '',
  },
  {
    number: '04',
    category: 'E-commerce web application',
    title: 'E-commerce Web Application',
    description: 'Project description and technology details to be added.',
    tags: [],
    githubUrl: '',
    demoUrl: '',
  },
]

const capabilities = [
  { number: '01', title: 'Languages', icon: 'JS', items: ['JavaScript', 'Python', 'Java'] },
  { number: '02', title: 'Frontend', icon: '< >', items: ['HTML5', 'CSS3', 'React.js', 'Redux', 'Responsive Design'] },
  { number: '03', title: 'Backend', icon: '{ }', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { number: '04', title: 'Database', icon: 'DB', items: ['MongoDB', 'SQL'] },
  { number: '05', title: 'Tools & Design', icon: 'UI', items: ['Git', 'GitHub', 'Figma', 'VS Code'] },
]

const experience = [
  {
    period: 'February 2026 – May 2026',
    role: 'MERN Stack Developer Intern',
    company: 'WebCultivate Software Solutions, Nagpur',
    responsibilities: [
      'Developed full-stack applications.',
      'Created React components from design mockups.',
      'Worked with REST APIs.',
      'Collaborated using Git and GitHub.',
    ],
  },
]

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'P.R. Pote Patil College of Engineering and Management, Amravati',
    period: 'September 2025 – Present',
  },
  {
    degree: 'Bachelor of Vocation in Software Development',
    institution: 'Rashtrasant Tukadoji Maharaj University, Nagpur',
    period: 'July 2021 – April 2024',
    highlight: 'CGPA: 9.53/10 · Ranked in the Top 3 at university level',
  },
]

const certifications = [
  {
    name: 'Alpha DSA with Java',
    issuer: 'Apna College',
    image: alphaDsaCertificate,
    alt: 'Apna College certificate for Alpha DSA with Java, awarded to Kanishka Hirapure',
  },
  {
    name: 'Summer of Code Extended · Contributor',
    issuer: 'GirlScript Foundation',
    date: 'October 1–30, 2024',
    image: girlScriptCertificate,
    alt: 'GirlScript Summer of Code Extended contributor certificate for Kanishka Satyendra Hirapure',
  },
  {
    name: 'Web Development Virtual Internship Program',
    issuer: 'Bharat Intern',
    date: 'October 10 – November 10, 2023',
    image: bharatInternCertificate,
    alt: 'Bharat Intern Web Development virtual internship completion certificate for Kanishka Hirapure',
  },
  {
    name: 'Complete Web Development · With Excellence',
    issuer: 'Programming Hero',
    date: 'September 23, 2023',
    image: programmingHeroCertificate,
    alt: 'Programming Hero Complete Web Development certificate with excellence for Kanishka Hirapure',
  },
  {
    name: 'WordPress for Beginners: Best WordPress and Marketing Course',
    issuer: 'Udemy · Robbie Carter',
    date: 'September 22, 2023',
    image: udemyCertificate,
    alt: 'Udemy WordPress for beginners course completion certificate for Kanishka Hirapure',
  },
  {
    name: 'JavaScript Essentials 1',
    issuer: 'Cisco Networking Academy · OpenEDG',
    date: 'September 20, 2023',
    image: ciscoCertificate,
    alt: 'Cisco Networking Academy JavaScript Essentials 1 achievement certificate for Kanishka Hirapure',
  },
]

const profileLinks = [
  { label: 'GitHub', icon: 'GH', url: 'https://github.com/kanishkahirapure' },
  { label: 'LinkedIn', icon: 'in', url: 'https://www.linkedin.com/in/kanishka-hirapure-539433291/?isSelfProfile=true' },
  { label: 'Email', icon: '@', url: 'mailto:hirapurekanishka@gmail.com' },
]

function ProfileLink({ link, children, className = '' }) {
  if (!link.url) {
    return (
      <span className={`${className} is-placeholder`} title={`Add ${link.label} URL in profileLinks`} aria-label={`${link.label} link not added`}>
        {children}
      </span>
    )
  }

  return (
    <a className={className} href={link.url} target={link.url.startsWith('http') ? '_blank' : undefined} rel={link.url.startsWith('http') ? 'noreferrer' : undefined} aria-label={link.label} title={link.label}>
      {children}
    </a>
  )
}

function SocialIcon({ label }) {
  if (label === 'GitHub') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.82.09-.65.35-1.08.64-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    )
  }

  if (label === 'LinkedIn') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M5.1 3.5a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM3.5 8.8h3.2v11.7H3.5V8.8Zm5.3 0h3.1v1.6h.05A3.4 3.4 0 0 1 15 8.72c3.25 0 3.85 2.14 3.85 4.92v6.86h-3.2v-6.08c0-1.45-.03-3.32-2.03-3.32s-2.34 1.58-2.34 3.21v6.19H8.8V8.8Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  )
}

function ProjectLink({ label, url }) {
  if (!url) {
    return <span className="project-link is-placeholder" aria-disabled="true" title={`Add the ${label} URL in the projects list`}>{label} link needed</span>
  }

  return <a className="project-link" href={url} target="_blank" rel="noreferrer">{label} <span aria-hidden="true">↗</span></a>
}

function ContactForm() {
  const [formStatus, setFormStatus] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const emailLink = profileLinks.find((link) => link.label === 'Email')?.url || ''
    const recipient = emailLink.replace(/^mailto:/, '').trim()

    if (!recipient) {
      setFormStatus('Add your email address to profileLinks to enable sending.')
      return
    }

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const subject = encodeURIComponent(`Portfolio message from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
    setFormStatus('Your email app should open with your message ready.')
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <AnimatedHeading as="h3" className="contact-form__heading" mode="reveal" direction="up" revealOrder="left-to-right">Send a message</AnimatedHeading>
      <div className="contact-field">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" autoComplete="name" required />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="contact-field contact-field--message">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows="4" required />
      </div>
      <div className="contact-form__actions">
        <button className="hero-cta" type="submit">Prepare email <span aria-hidden="true">↗</span></button>
        <p className="contact-form__status" role="status" aria-live="polite">{formStatus}</p>
      </div>
    </form>
  )
}

function AnimatedHeading({ as = 'h2', children, ...props }) {
  const isHero = as === 'h1'

  return (
    <FlyingText
      as={as}
      mode="scatter"
      direction="right"
      strength={as === 'h3' ? 24 : 42}
      scatter={as === 'h3' ? 0.28 : 0.34}
      rotation={as === 'h3' ? 7 : 10}
      stagger={as === 'h3' ? 0.014 : 0.02}
      duration={0.9}
      revealOrder="random"
      start={isHero ? 'top top' : 'top 82%'}
      {...props}
    >
      {children}
    </FlyingText>
  )
}

function App() {
  const [loaderVisible, setLoaderVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {loaderVisible && <PhotoLoader onFinish={() => setLoaderVisible(false)} />}
      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="wordmark" href="#top" aria-label="Kanishka Hirapure home">Kanishka Hirapure<span>&lt;/&gt;</span></a>
          <span className="nav-caption">Independent frontend developer<br />India · Working everywhere</span>
          <button
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span />
          </button>
          <div className={`nav-links${menuOpen ? ' is-open' : ''}`}>
            {navigation.map((item) => (
              <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-mark" /> Available for opportunities</p>
              <AnimatedHeading as="h1" id="hero-title">Hi, I&apos;m<br /><em>Kanishka<br />Hirapure.</em></AnimatedHeading>
              <p className="hero-role">Frontend Developer</p>
              <p className="hero-description">I create responsive, user-friendly web experiences with clean design and modern web technologies.</p>
              <div className="hero-bottom">
                <a className="hero-cta" href="#work">View Projects <span aria-hidden="true">↗</span></a>
                <a className="hero-cta hero-cta--secondary" href={resumeUrl} download="Kanishka-Hirapure-Resume.pdf">Download Resume <span aria-hidden="true">↓</span></a>
                <a className="hero-cta hero-cta--secondary" href="#contact">Contact Me</a>
                <div className="hero-socials" aria-label="Social links">
                  {profileLinks.map((link) => <ProfileLink className="hero-social-link" key={link.label} link={link}>{link.icon}</ProfileLink>)}
                </div>
              </div>
            </div>
            <div className="hero-art" aria-label="Illustrated portrait of Kanishka Hirapure">
              <div className="hero-art__portrait"><img src={portrait} alt="Illustration of Kanishka Hirapure" /></div>
              <span className="tech-badge tech-badge--js" aria-label="JavaScript">JS</span>
              <span className="tech-badge tech-badge--react" aria-label="React">R</span>
              <span className="tech-badge tech-badge--css" aria-label="CSS">CSS</span>
            </div>
          </div>
        </section>

        <div className="ticker" aria-label="Design with care, build with purpose">
          <div className="ticker-track"><span>Design with care <b>✳</b> Build with purpose <b>✳</b> Keep it human <b>✳</b> Design with care <b>✳</b> Build with purpose <b>✳</b> Keep it human <b>✳</b></span></div>
        </div>

        <section className="about section-pad" id="about">
          <div className="about-content">
            <AnimatedHeading>Curious about<br />building useful <em>things.</em></AnimatedHeading>
            <div className="about-lower">
              <div className="about-marker">A NOTE<br />FROM ME <span>↘</span></div>
              <div className="about-copy"><p>I&apos;m Kanishka, an MCA student and software development professional interested in frontend development, modern web design, and building useful web applications.</p><p>I enjoy creative design and continuously work to improve my technical skills through study and hands-on development.</p><a className="text-link" href="#contact">Let&apos;s connect <span>↗</span></a></div>
            </div>
          </div>
          <div className="about-side-note">GOOD DETAILS<br />ADD UP.</div>
        </section>

        <section className="capabilities section-pad" id="capabilities">
          <div className="section-head section-head--light">
            <div><AnimatedHeading>Tools for<br /><em>building well.</em></AnimatedHeading><p className="section-intro">Languages and tools I use across frontend, backend, and product development.</p></div>
          </div>
          <div className="capability-list">{capabilities.map((capability) => <article className="capability" key={capability.number}><span className="capability-icon" aria-hidden="true">{capability.icon}</span><AnimatedHeading as="h3">{capability.title}</AnimatedHeading><div className="capability-tags">{capability.items.map((item) => <span key={item}>{item}</span>)}</div><b aria-hidden="true">↗</b></article>)}</div>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-head">
            <div><AnimatedHeading>Selected<br /><em>projects.</em></AnimatedHeading><p className="section-intro">Projects built around useful web experiences and clear, responsive interfaces.</p></div>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card__top"><span>{project.number} / {project.category}</span><span className="project-card__mark" aria-hidden="true">{project.number}</span></div>
                <div className="project-info">
                  <AnimatedHeading as="h3">{project.title}</AnimatedHeading>
                  <p>{project.description}</p>
                  {project.tags.length > 0 && <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}
                  <div className="project-links">
                    <ProjectLink label="GitHub" url={project.githubUrl} />
                    <ProjectLink label="Live demo" url={project.demoUrl} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section-pad" id="experience">
          <div className="section-head">
            <div><AnimatedHeading>Learning by<br /><em>building.</em></AnimatedHeading><p className="section-intro">MERN Stack Developer internship at WebCultivate Software Solutions.</p></div>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-row" key={item.role}>
                <time>{item.period}</time>
                <div><AnimatedHeading as="h3">{item.role}</AnimatedHeading><p className="experience-company">{item.company}</p><ul className="experience-responsibilities">{item.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul></div>
                <span aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="education section-pad" id="education">
          <div className="section-head">
            <div><AnimatedHeading>Grounded in<br /><em>learning.</em></AnimatedHeading><p className="section-intro">Academic foundations in software development and computer applications.</p></div>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <article className="education-row" key={item.degree}>
                <time>{item.period}</time>
                <div><AnimatedHeading as="h3">{item.degree}</AnimatedHeading><p>{item.institution}</p>{item.highlight && <strong>{item.highlight}</strong>}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="certifications section-pad" id="certifications">
          <div className="section-head">
            <div><AnimatedHeading>Verified<br /><em>learning.</em></AnimatedHeading><p className="section-intro">A place for completed, verifiable certifications.</p></div>
          </div>
          {certifications.length > 0 ? (
            <div className="certification-list">
              {certifications.map((certification) => (
                <article className="certification-card" key={`${certification.name}-${certification.issuer}`}>
                  <a className="certification-card__image" href={certification.image} target="_blank" rel="noreferrer" aria-label={`View certificate: ${certification.name}`}>
                    <img src={certification.image} alt={certification.alt} loading="lazy" />
                  </a>
                  <div className="certification-card__details">
                    <AnimatedHeading as="h3">{certification.name}</AnimatedHeading>
                    <p>{certification.issuer}</p>
                    {certification.date && <time>{certification.date}</time>}
                  </div>
                </article>
              ))}
            </div>
          ) : <p className="certifications-empty">No verified certifications added.</p>}
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-layout">
            <div className="contact-copy">
              <AnimatedHeading as="h2" className="contact-heading" mode="reveal" direction="up" revealOrder="left-to-right">Let&apos;s build<br /><em>something meaningful.</em></AnimatedHeading>
              <p>Get in touch for job opportunities, internships, or professional collaboration.</p>
            </div>
            <ContactForm />
          </div>
          <div className="contact-links contact-links--footer">
            {profileLinks.map((link) => <ProfileLink className="contact-profile-link" key={link.label} link={link}><SocialIcon label={link.label} /></ProfileLink>)}
          </div>
          <div className="contact-stamp" aria-hidden="true">SAY<br />HELLO<br /><b>✳</b></div>
        </section>
      </main>

      <footer className="site-footer"><a className="footer-name" href="#top">Kanishka Hirapure</a><span>© {new Date().getFullYear()} Kanishka Hirapure</span><div>{profileLinks.slice(0, 2).map((link) => <ProfileLink className="footer-profile-link" key={link.label} link={link}>{link.label} ↗</ProfileLink>)}<a href="#top">Back to top ↑</a></div></footer>
    </>
  )
}

export default App
