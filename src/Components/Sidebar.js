import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="wall wall-left sidebar">
      <div className="wall-menu text-center">
        <h2>Menu</h2>
        <nav>
          <ul>
            <li>
              <NavLink to="">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About me</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
