import { projects } from '../data.js';

export const Projects = () => {
  return (
    <div className="projects">
      <h2>recent projects:</h2>
      <div className="projects-container">
        {projects.map(project => (
          <div key={project.name} className="project">
            <h3>{project.name}</h3>
            <img src={project.image} alt={`screenshot of ${project.name}`} />
            <div className="project-buttons">
              <a href={project.link}>
                <button>visit site</button>
              </a>
              <a href={project.gitHub}>
                <button>see the code</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
