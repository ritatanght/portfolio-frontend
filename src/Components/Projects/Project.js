import { useState } from "react";
const Project = ({
  project: { name, description, repository, liveURL, screencast, image, tools },
}) => {
  const [popUpOpen, setPopUpOpen] = useState(false);
  return (
    <article className="project-card">
      <div className="project__img">
        <img src={image} alt={name} />
      </div>
      <div className="project__text">
        <h3>{name}</h3>
        <div className="project__details">
          <p>{description}</p>
          <ul className="tool-list">
            {tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
        <div className="project__links text-center">
          {liveURL && screencast ? (
            <>
              <div className={`popup ${popUpOpen ? "showPopUp" : ""}`}>
                <a
                  className="link-btn"
                  href={screencast}
                  target="_blank"
                  rel="noreferrer"
                >
                  Video
                </a>{" "}
                <a
                  className="link-btn"
                  href={liveURL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Site
                </a>
              </div>
              <button
                className="link-btn popup-btn"
                onMouseOver={() => setPopUpOpen(true)}
                onFocus={() => setPopUpOpen(true)}
                onMouseOut={() => setPopUpOpen(false)}
              >
                View Demo
              </button>
            </>
          ) : (
            liveURL && (
              <a
                className="link-btn"
                href={liveURL}
                target="_blank"
                rel="noreferrer"
              >
                View Demo
              </a>
            )
          )}

          <a
            className="link-btn"
            href={repository}
            target="_blank"
            rel="noreferrer"
            onFocus={() => setPopUpOpen(false)}
          >
            View Code
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
