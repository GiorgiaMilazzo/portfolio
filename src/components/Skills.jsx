import { skillGroups } from '../data/projects.js'

function Skills() {
  return (
    <section className="section container" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="card" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="tag-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
