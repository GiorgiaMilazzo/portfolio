function Skills() {
  return (
    <section className="info-section">
      <div className="service-box panel-cream">
        <div className="mini-title">Services</div>
        <ul className="service-list">
          <li>
            <span className="icon">✦</span>
            <div>
              <strong>Web design</strong>
              <small>Responsive interfaces and clean layouts.</small>
            </div>
          </li>
          <li>
            <span className="icon">✦</span>
            <div>
              <strong>UI / UX Design</strong>
              <small>Clear, intuitive user experience.</small>
            </div>
          </li>
          <li>
            <span className="icon">✦</span>
            <div>
              <strong>Brand Experience</strong>
              <small>Visual consistency for digital projects.</small>
            </div>
          </li>
        </ul>
      </div>

      <div className="process-box panel-cream">
        <div className="mini-title">Skills</div>
        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>UI Design</li>
          <li>Responsive Design</li>
        </ul>
      </div>

      <div className="quote-box panel-cream">
        <div className="quote-visual" aria-hidden="true" />
        <blockquote>
          Good design is<br />not just how it<br />looks. It’s how it<br />makes people feel.
        </blockquote>
      </div>
    </section>
  )
}

export default Skills