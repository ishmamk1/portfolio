import { useState } from "react";
import { projects } from "../../data/projects";
import Icon from "../Icon";
import ProjectLinks from "../ProjectLinks";
import "./ProjectsWindow.scss";
import ProjectView from "../ProjectView";

const ProjectsWindow = ({ handleOpenWindow, handleCloseWindow }) => {
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedProjectDetails, setSelectedProjectDetails] = useState(null);

  const handleSelectProject = (projectName) => {
    setSelectedProject(projectName);
    setSelectedProjectDetails(
      projects.filter((project) => project.name === projectName)
    );
  };

  const icons = projects.map((icon) => {
    return (
      <Icon
        key={icon.id}
        name={icon.name}
        title={icon.title}
        icon={icon.icon}
        iconSelectedImage={icon.iconSelected}
        iconAlt={icon.iconAlt}
        selectedProject={selectedProject}
        handleSelectProject={handleSelectProject}
      />
    );
  });
  return (
    <div className="window">
      <div className="window__title-bar">
        <div className="window__title-img-wrapper">
          <img
            src={`images/icons/projects.png`}
            alt="Open folder"
            className="window__icon"
          />
          <h2 className="window__title">My Projects</h2>
        </div>
        <button
          className="window__button-close"
          onClick={() => handleCloseWindow("projects")}
        >
          X
        </button>
      </div>
      <div className="window__body window__body--projects">
        <section className="projects">
          <div className="options">
            <button
              className="options__btn"
              onClick={() => handleOpenWindow("contact-me")}
            >
              Work Experience
            </button>
            <a
              className="options__btn"
              href="https://github.com/ishmamk1"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="options__btn"
              href="https://www.linkedin.com/in/khanishmam"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <ProjectView selectedProjectDetails={selectedProjectDetails} />

          <section className="icons">{icons}</section>
          <ProjectLinks
            handleOpenWindow={handleOpenWindow}
            selectedProject={selectedProject}
            selectedProjectDetails={selectedProjectDetails}
          />
          <section className="folder-footer">
            <p className="folder-footer__text">
              {!projects && "No projects."}
              {projects && projects.length}{" "}
              {projects && projects.length > 1 ? "objects" : "object"}
            </p>
            <p className="folder-footer__text">515MB</p>
            <p className="folder-footer__text">Projects</p>
          </section>
        </section>
      </div>
    </div>
  );
};
export default ProjectsWindow;
