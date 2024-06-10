import { useState } from "react";
import DividerLine from "../DividerLine";
import "./ContactWindow.scss";

import { experience } from "src/data/experience";

const ContactWindow = ({ handleOpenWindow, handleCloseWindow }) => {
  const experienceJSX = experience.map((exp) => {
    return (
      <div key={exp.id} className="contact__skill">
        <img src={exp.image} className="contact__skill-icon" alt={`${exp.name} logo`} />
        <div className="contact__skill-info">
          <p className="contact__skill-title">{exp.name}</p>
          <p className="contact__skill-org">{exp.organization}</p>
          <p className="contact__skill-date">{exp.date}</p>
        </div>
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
          <h2 className="window__title">My Experience</h2>
        </div>
        <button
          className="window__button-close"
          onClick={() => handleCloseWindow("about-me")}
        >
          X
        </button>
      </div>
      <div className="window__body">
        <div className="experiences">
          <div className="contact__skills">{experienceJSX}</div>
        </div>
        <div className="window__control-btns">
          <DividerLine orientation="horizontal" />
        </div>
      </div>
    </div>
  );
};

export default ContactWindow;

