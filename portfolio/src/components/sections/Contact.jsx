import './Contact.css'

const contactLinks = [
  { label: 'Email', href: 'mailto:kanishka.hirapure@example.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
]

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container section__inner contact__inner">
        <div className="section-heading section-heading--light">
          <p className="section-heading__index">05 / CONTACT</p>
          <h2>Let&apos;s build<br /><span>something useful.</span></h2>
          <p className="section-heading__copy">
            Have a project, an idea, or a website that needs a thoughtful frontend developer? Get in touch.
          </p>
        </div>

        <div className="contact__panel">
          <p className="contact__status"><span /> Available for select projects</p>
          <h3>Hi, I&apos;m Kanishka.</h3>
          <p>Tell me about your idea and the experience you want to create.</p>
          <div className="contact__links">
            {contactLinks.map((link) => (
              <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" key={link.label}>
                {link.label}<span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
