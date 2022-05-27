import '../App.css';

export const Project = ({ project }) => {
  return (
    <div className="project">
      <h3>{project.name}</h3>
      <img src={project.image} alt={`screenshot of ${project.name}`} />
      <p>{project.description}</p>
      <div className="project-buttons">
        <a href={project.link} target="_blank" rel="noreferrer">
          <button>visit site</button>
        </a>
        <a href={project.gitHub} target="_blank" rel="noreferrer">
          <button>see the code</button>
        </a>
      </div>
    </div>
  );
};
