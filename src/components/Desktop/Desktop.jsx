import AboutWindow from "../AboutWindow";
import ContactWindow from "../ContactWindow";
import ProjectDetailWindow from "../ProjectDetailWindow";
import ProjectsWindow from "../ProjectsWindow";
import "./Desktop.scss";

const Desktop = ({ handleOpenWindow, handleCloseWindow, activeWindow }) => {
  return (
    <main className="desktop">
      {(() => {
        switch (activeWindow) {
          case "about-me":
            return (
              <AboutWindow
                handleOpenWindow={handleOpenWindow}
                handleCloseWindow={handleCloseWindow}
              />
            );
          case "contact-me":
            return (
              <ContactWindow
                handleOpenWindow={handleOpenWindow}
                handleCloseWindow={handleCloseWindow}
              />
            );
          case "projects":
            return (
              <ProjectsWindow
                handleOpenWindow={handleOpenWindow}
                handleCloseWindow={handleCloseWindow}
              />
            );
          case "musync":
            return (
              <ProjectDetailWindow
                activeProject="musync"
                handleCloseWindow={handleCloseWindow}
                handleOpenWindow={handleOpenWindow}
              />
            );
          case "linktree-clone":
            return (
              <ProjectDetailWindow
                activeProject="linktree-clone"
                handleCloseWindow={handleCloseWindow}
                handleOpenWindow={handleOpenWindow}
              />
            );
          case "CS135-Guide":
            return (
              <ProjectDetailWindow
                activeProject="CS135-Guide"
                handleCloseWindow={handleCloseWindow}
                handleOpenWindow={handleOpenWindow}
              />
            );
          default:
            return " ";
        }
      })()}
    </main>
  );
};

export default Desktop;
