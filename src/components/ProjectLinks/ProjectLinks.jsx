import "./ProjectLinks.scss";
import learnMoreBtnImage from "/images/icons/projects.png";

const ProjectLinks = ({
  selectedProject,
  selectedProjectDetails,
  handleOpenWindow,
}) => {
  if (selectedProject === "") {
    return (
      <section className="links">
        <fieldset className="links__fieldset">
          <legend className="links__legend">No project is selected</legend>
          <div className="links__github">
            <a href="/" className="links__btn links__btn--disabled" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <img
                src="/images/icons/github.png"
                alt="GitHub"
                className="links__link-img"
                style={{ marginRight: '8px' }}
              />
              Repository
            </a>
          </div>
          <button className="links__live links__btn--disabled">
            <img
              src={learnMoreBtnImage}
              className="links__link-img links__link-img--disabled"
              alt="Learn more about the project"
            />
            Learn more about the project
          </button>
        </fieldset>
      </section>
    );
  }
  return (
    <section className="links">
      <fieldset className="links__fieldset">
        <legend className="links__legend">Check out the source code</legend>
        <div className="links__github">
          {selectedProjectDetails[0].github.general === "no-link" &&
            (selectedProjectDetails[0].github.client_link === "no-link" &&
            selectedProjectDetails[0].github.server_link === "no-link" ? (
              <>
                <p>This source code is private.</p>
              </>
            ) : (
              <>
                <a
                  href={selectedProjectDetails[0].github.client_link}
                  className="links__btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/icons/github.png"
                    alt="GitHub"
                    className="links__link-img"
                  />
                  Client
                </a>
                <a
                  href={selectedProjectDetails[0].github.server_link}
                  className="links__btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/icons/github.png"
                    alt="GitHub"
                    className="links__link-img"
                  />
                  Server
                </a>
              </>
            ))}

          {selectedProjectDetails[0].github.general !== "no-link" && (
            <>
              <a
                href={selectedProjectDetails[0].github.general}
                className="links__btn links__btn--general"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/icons/github.png"
                  alt="GitHub"
                  className="links__link-img"
                />
                Repository
              </a>
            </>
          )}
        </div>
        <button
          className="links__live"
          onClick={(e) => handleOpenWindow(selectedProjectDetails[0].name)}
        >
          <img
            src={learnMoreBtnImage}
            className="links__link-img"
            alt="Learn more about the project"
          />
          Learn more about {selectedProjectDetails[0].title}
        </button>
      </fieldset>
    </section>
  );
};
export default ProjectLinks;
