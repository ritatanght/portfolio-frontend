import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";

const FooterMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {isMenuOpen && (
        <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}
      <nav
        className={`footer-menu ${isMenuOpen ? "full-menu" : ""}`}
        onClick={() => !isMenuOpen && setIsMenuOpen(true)}
      >
        {isMenuOpen && (
          <div className="footer-menu__top">
            <Link
              to="/"
              className="icon-btn"
              onClick={() => setIsMenuOpen(false)}
            >
              <AiOutlineHome />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="icon-btn menu-close"
            >
              <CgClose />
            </button>
          </div>
        )}
        <h2>Menu</h2>
        <h3>Appetizers</h3>
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
          <div className="menu-item">
            <p>About me</p>
            <p>$XX</p>
          </div>
        </NavLink>

        <h3>Main Courses</h3>
        <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>
          <div className="menu-item">
            <p>Projects</p>
            <p>$XX</p>
          </div>
        </NavLink>

        <h3>Desserts</h3>
        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
          <div className="menu-item">
            <p>Contact</p>
            <p>$XX</p>
          </div>
        </NavLink>
      </nav>
    </>
  );
};

export default FooterMenu;
