function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a className="navbar-logo" href="#home">
          Giorgia Milazzo
        </a>
        <ul className="navbar-links">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#info">Info</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
