import { projects } from '../data/projects.js'

function Projects() {
  return (
    <section className="section container" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="card" key={project.name}>
            <div className="card-header">
              <h3>{project.name}</h3>
              <span className="status">{project.status}</span>
            </div>

            <p className="project-type">{project.type}</p>
            <p className="project-summary">{project.summary}</p>
            <p className="project-description">{project.description}</p>

            <ul className="tag-list">
              {project.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>

            {project.repo && (
              <a className="button button-outline card-link" href={project.repo} target="_blank" rel="noreferrer">
                View repository
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
