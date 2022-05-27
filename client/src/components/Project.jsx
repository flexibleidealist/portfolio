export const Project = ({ project }) => {
  return (
    <div className="project">
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
  );
};
