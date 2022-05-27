import { aboutText, currentRole, profileImage, projects } from '../data';

export const About = () => {
  return (
    <div className="about">
      <img src={profileImage} alt="Nicholas' head shot" />
      <img src={`${projects.drawBrite.image}`} />
      <div className="about-info">
        <h1>Nicholas Rynearson</h1>
        <h2>software engineer | full-stack developer</h2>
        <p>{aboutText}</p>
        <p>{currentRole}</p>
        <a href="../nrynearson-resume.pdf">download my resume</a>
      </div>
    </div>
  );
};
