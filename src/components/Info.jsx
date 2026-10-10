function Info() {
  return (
    <section className="section container" id="info">
      <h2 className="section-title">Info</h2>

      <div className="info-grid">
        <div className="card">
          <span className="info-label">Based in</span>
          <p className="info-value">Assisi, Perugia, Italy</p>
        </div>
        <div className="card">
          <span className="info-label">Driving license</span>
          <p className="info-value">B, no car</p>
        </div>
        <div className="card">
          <span className="info-label">First language</span>
          <p className="info-value">Italian</p>
        </div>
        <div className="card">
          <span className="info-label">Second language</span>
          <p className="info-value">English</p>
        </div>
      </div>
    </section>
  )
}

export default Info