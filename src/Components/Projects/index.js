import "./projects.scss";import { useState, useEffect } from "react";
import Project from "./Project";
import { getAll } from "../../service/service.js";
import BarLoader from "react-spinners/BarLoader";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getAll()
      .then((projects) => setProjects(projects))
      .catch((err) => console.log(err));
  }, []);

  const projectsElements =
  Array.isArray(projects) &&
  projects.map((project) => <Project key={project._id} project={project} />);

  return (
    <section className="projects-page">
      <h2 className="text-center">Projects</h2>
      <div className="projects__container">
        {projectsElements.length > 0 ? (
          projectsElements
        ) : (
          <div className="projects__loading">
            <BarLoader
              color="#fafafa"
              loading={projectsElements.length === 0}
              size={150}
              aria-label="Loading Spinner"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
