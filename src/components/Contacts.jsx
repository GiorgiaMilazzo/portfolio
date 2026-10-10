function Contacts() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <h2 className="section-title">Let’s talk</h2>

        <div className="contact-grid">
          <a className="contact-card" href="mailto:giorgiamilazzo20@gmail.com">
            <span className="contact-label">Email</span>
            giorgiamilazzo20@gmail.com
          </a>

          <a className="contact-card" href="https://github.com/GiorgiaMilazzo" target="_blank" rel="noreferrer">
            <span className="contact-label">GitHub</span>
            github.com/GiorgiaMilazzo
          </a>

          <a className="contact-card" href="https://instagram.com/_giorgia.milazzo_" target="_blank" rel="noreferrer">
            <span className="contact-label">Instagram</span>
            @_giorgia.milazzo_
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Contacts