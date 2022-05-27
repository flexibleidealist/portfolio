import { Project } from './Project.jsx';
import { projects } from '../data.js';

export const Projects = () => {
  return (
    <div className="projects">
      <h2>recent projects:</h2>
      <div className="projects-container">
        {projects.map(project => (
          <Project project={project} key={project.name} />
        ))}
      </div>
    </div>
  );
};
