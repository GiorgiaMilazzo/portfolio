function Projects() {
  const projects = [
    {
      name: 'GoCare',
      type: 'Charity Mobile App',
      description: 'GoCare is a team project built with React Native and C#. It connects users with charity associations, making it easier to request and offer help.',
      logo: 'GC',
      repo: 'https://github.com/Stefano-Marinaro/project_workSGEF.git',
      skills: ['React Native', 'Expo', 'C#', 'Entity Framework'],
      tone: 'dark',
    },
    {
      name: 'Video Game',
      type: '2D Flappy Game',
      description: 'A video game currently in development, built with Godot and C#. This project is my way of exploring a new and fun field of programming.',
      logo: 'G',
      repo: 'https://github.com/yourusername/game',
      skills: ['Godot', 'C#'],
      tone: 'light',
    },
    {
      name: 'Portfolio',
      type: 'Personal Portfolio',
      description: 'This portfolio was built with React, a language that was completely new to me. I chose it because I like learning new technologies, and I wanted something both challenging and useful for showing my work.',
      logo: 'P',
      repo: 'https://github.com/GiorgiaMilazzo/MyPortfolio.git',
      skills: ['React Vite', 'CSS', 'HTML', 'JavaScript'],
      tone: 'dark',
    },

  ]

  return (
    <section className="work-section panel-dark">
      <div className="section-head">
        <span>Projects</span>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className={`project-card ${project.tone}`} key={project.name}>
            <div className="project-header">
              <h3>{project.name}</h3>
              <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">
                Repo
              </a>
            </div>

            <div className="project-copy">
              <p className="project-type">{project.type}</p>
              <p className="project-description">{project.description}</p>

              <ul className="skill-list">
                {project.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects