import { Project } from './Project.jsx';
import { projects } from '../data.js';
import '../App.css';

export const Projects = () => {
  return (
    <div className="projects section-container">
      <h2>recent projects:</h2>
      <div className="projects-container">
        {projects.map(project => (
          <Project project={project} key={project.name} />
        ))}
      </div>
    </div>
  );
};
