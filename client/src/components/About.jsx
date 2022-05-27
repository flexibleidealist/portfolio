import { aboutText, currentRole, profileImage } from '../data';
import '../App.css';

export const About = () => {
  return (
    <div className="about">
      <img id="profile-img" src={profileImage} alt="Nicholas' head shot" />
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
