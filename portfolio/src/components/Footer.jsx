import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <a href="#home" className="footer__logo">KH<span>.</span></a>
          <p>Software developer creating useful digital experiences.</p>
        </div>

        <div className="footer__links">
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:hello@example.com">Email</a>
        </div>

        <p className="footer__copy">© {currentYear} Kanishka Hirapure. Built with React + Vite.</p>
      </div>
    </footer>
  )
}

export default Footer
