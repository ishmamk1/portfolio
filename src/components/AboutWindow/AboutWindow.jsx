import DividerLine from "../DividerLine";
import "./AboutWindow.scss";
import { skills } from "src/data/skills";
import { version } from "src/data/version";

const AboutWindow = ({ handleOpenWindow, handleCloseWindow }) => {
  const skillsJSX = skills.map((skill) => {
    return (
      <div key={skill.id} className="about__skill">
        <img src={skill.image} alt={skill.alt} className="about__skill-icon" />
        <p className="about__skill-title">{skill.name}</p>
      </div>
    );
  });

  return (
    <div className="window">
      <div className="window__title-bar">
        <div className="window__title-img-wrapper">
          <img
            src={`/images/icons/about-me.png`}
            alt="Old computer"
            className="window__icon"
          />
          <h2 className="window__title">About Me</h2>
        </div>
        <button
          className="window__button-close"
          onClick={() => handleCloseWindow("about-me")}
        >
          X
        </button>
      </div>
      <div className="window__body">
        <section className="about">
          <img
            src={`/images/icons/ishmam.png`}
            alt="Ishmam"
            className="about__image"
            style={{
              border: '2px solid #000', 
              borderRadius: '4px', 
              padding: '10px', 
              backgroundColor: '#c0c0c0', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s ease-in-out',
            }}
          />
          <div className="about__side">
            <h3 className="about__title">
              Ishmam Khan
            </h3>
            <DividerLine orientation="horizontal" />
            <p className="about__text">
              Hey there, I&apos;m Ishmam! I&apos;m a current student at Hunter College studying Computer Science
              with a double minor in Economics and Mathematics. I love to program (my favorite language is Python) and when
              I&apos;m not coding I am either at my boxing gym, going on runs, or hanging out with friends. 
            </p>
            <DividerLine orientation="horizontal" />

            <p className="about__text">
              This is my tech stack:
            </p>
            <div className="about__skills">{skillsJSX}</div>
          </div>
        </section>
        <div className="window__control-btns">
          <DividerLine orientation="horizontal" />
        </div>
      </div>
    </div>
  );
};
export default AboutWindow;

