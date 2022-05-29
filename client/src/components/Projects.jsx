import { useState } from 'react';
import { Project } from './Project.jsx';
import { projects } from '../data.js';
import '../App.css';

export const Projects = () => {
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const goBack = () => {
    let currentIndex = projects.indexOf(currentProject);
    if (currentIndex === 0) setCurrentProject(projects[projects.length - 1]);
    else setCurrentProject(projects[currentIndex - 1]);
  };
  const goForward = () => {
    let currentIndex = projects.indexOf(currentProject);
    if (currentIndex === projects.length - 1) {
      setCurrentProject(projects[0]);
    } else setCurrentProject(projects[currentIndex + 1]);
  };
  return (
    <div className="projects section-container">
      <h2>recent projects:</h2>
      <Project project={currentProject} />
      <div className="button-container">
        <button className="button-43" onClick={goBack}>
          Previous
        </button>
        <button className="button-43" onClick={goForward}>
          Next
        </button>
      </div>
    </div>
  );
};
