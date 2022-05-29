import { aboutText, currentRole, profileImage } from '../data';
import '../App.css';

export const About = () => {
  return (
    <div className="about section-container">
      <div className="about-header">
        <h1>Nicholas Rynearson</h1>
        <h2>software engineer | full-stack developer</h2>
      </div>
      <img id="profile-img" src={profileImage} alt="Nicholas' head shot" />
      <div className="about-info">
        <p>{aboutText}</p>
        <p>{currentRole}</p>
        <a href="../nrynearson-resume.pdf">
          <button className="button-43">download my resume</button>
        </a>
      </div>
    </div>
  );
};
